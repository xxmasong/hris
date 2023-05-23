<?php

namespace App\Http;

use App\Http\Controllers\Common\MissingController;
use App\Http\Messages;
use App\Http\Tables\RoutesTable;
use Closure;
use Illuminate\Support\Facades\Route;
use Symfony\Component\HttpFoundation\Response;

class Routes extends RoutesTable
{
    private static ?array $routeTable = null;

    /**
     * Create new routes instance.
     *
     * @return void
     */
    public function __construct()
    {
        $table = (new \ReflectionClass(self::class))->getConstant('TABLE');
        $table = (new \ReflectionClass(self::class))->getConstant($table);
        $fnGetRoutes = function (string $routeType) use ($table) {
            $routeProps = array();
            foreach ($table[$routeType] as $props) {
                $routeProps += [$props[parent::NAME] => $props];
            }
            return $routeProps;
        };
        self::$routeTable = [
            parent::ROUTE_API => $fnGetRoutes(parent::ROUTE_API),
            parent::ROUTE_WEB => $fnGetRoutes(parent::ROUTE_WEB),
        ];
    }

    /**
     * Returns the route table or listing.
     *
     * @param  array  $exclude
     * @return array
     */
    public static function getRouteTable(array $exclude = [])
    {
        if (!empty($exclude)) {
            $fnGetRoutes = function (string $routeType) use ($exclude) {
                $modifiedTable = self::$routeTable[$routeType];
                foreach ($modifiedTable as &$props) {
                    $excludes = array_intersect(array_keys($props), $exclude);
                    foreach ($excludes as $reject) {
                        unset($props[$reject]);
                    }
                }
                return $modifiedTable;
            };

            return [
                parent::ROUTE_API => $fnGetRoutes(parent::ROUTE_API),
                parent::ROUTE_WEB => $fnGetRoutes(parent::ROUTE_WEB),
            ];
        }

        return self::$routeTable;
    }

    /**
     * Register route that matches the props' specified route method.
     *
     * @param  array  $props
     */
    private static function registerMATCHRoute(mixed $props)
    {
        $methods = $props[parent::METHOD];
        if (!empty($props[parent::MIDDLEWARE])) {
            Route::match($methods, $props[parent::ROUTE], [$props[parent::CONTROLLER], $props[parent::ACTION]])
                ->middleware($props[parent::MIDDLEWARE])
                ->name($props[parent::NAME]);
        } else {
            Route::match($methods, $props[parent::ROUTE], [$props[parent::CONTROLLER], $props[parent::ACTION]])
                ->name($props[parent::NAME]);
        }
    }

    /**
     * Register route as a resource.
     *
     * @param  array  $props
     */
    private static function registerResourceRoute(mixed $props)
    {
        if (!empty($props[parent::ACTION])) {
            Route::resource($props[parent::NAME], $props[parent::CONTROLLER])
                ->only(array_intersect(array_keys($props[parent::ROUTE]), $props[parent::ACTION]));
        }
    }

    /**
     * Register route as part of a group.
     *
     * @param  array  $props
     */
    private static function registerRouteInGroup(mixed $props)
    {
        if (!empty($props)) {
            if (!empty($props[parent::CONTROLLER]) && !empty($props[parent::ACTION])) {
                switch (collect($props[parent::METHOD])->count()) {
                    case 0:
                        abort(Response::HTTP_FORBIDDEN, Messages::get('#route:unknown'));
                        break;
                    case 1:
                        switch ($props[parent::METHOD]) {
                            case parent::RESOURCE:
                                self::registerResourceRoute($props);
                                break;
                            case parent::GET:
                            case parent::POST:
                            case parent::PUT:
                            case parent::PATCH:
                            case parent::DELETE:
                                self::registerMATCHRoute($props);
                                break;
                            default:
                                abort(Response::HTTP_FORBIDDEN,  Messages::get('#route:unknown'));
                                break;
                        }
                        break;
                    default:
                        self::registerMATCHRoute($props);
                        break;
                }
            }
        }
    }

    /**
     * Register all routes.
     *
     * @param  array  $routes
     */
    private static function registerRouteList(string $routes)
    {
        $groupedRoutes = collect((function ($routeTable) use ($routes) {
            $routePropsList = $routeTable[$routes];
            foreach ($routePropsList as &$routeProps) {
                $routeGroup = &$routeProps[parent::GROUP];
                if (!empty($routeGroup)) {
                    $routeGroup = json_encode($routeGroup);
                }
            }
            return $routePropsList;
        })(self::$routeTable))->groupBy(parent::GROUP, true);
        $routeGroups = $groupedRoutes->keys();
        foreach ($routeGroups as $group) {
            if (!empty($group)) {
                Route::group((array) json_decode($group), function () use ($groupedRoutes, $group) {
                    foreach ($groupedRoutes[$group] as $props) {
                        self::registerRouteInGroup($props);
                    }
                });
            } else {
                foreach ($groupedRoutes[$group] as $props) {
                    self::registerRouteInGroup($props);
                }
            }
        }
    }

    /**
     * Register only API-specified routes.
     */
    public static function registerAPIRoutes()
    {
        self::registerRouteList(parent::ROUTE_API);
    }


    /**
     * Register only WEB-specified routes.
     */
    public static function registerWEBRoutes()
    {
        self::registerRouteList(parent::ROUTE_WEB);
    }

    /**
     * Gets attributes related to a certain route.
     *
     * @param  array  $props
     * @param  string  $option
     * @param  string  $resourceMethod
     * @return  array
     */
    private static function getAttributes(array $props, string $option, string $resourceMethod)
    {
        $attributes = $props[parent::ATTRIBUTES][$option];
        if ($props[parent::METHOD] === parent::RESOURCE) {
            if (!empty($resourceMethod)) {
                $attributes = $attributes[$resourceMethod];
            }
        }

        return $attributes;
    }

    /**
     * Gets request attributes related to a certain route.
     *
     * @param  array  $props
     * @param  string  $resourceMethod
     * @return  array
     */
    public static function getRequestAttributes(array $props, string $resourceMethod = '')
    {
        return self::getAttributes($props, parent::REQUEST, $resourceMethod);
    }

    /**
     * Gets reponse attributes related to a certain route.
     *
     * @param  array  $props
     * @param  string  $resourceMethod
     * @return  array
     */
    public static function getResponseAttributes(array $props, string $resourceMethod = '')
    {
        return self::getAttributes($props, parent::RESPONSE, $resourceMethod);
    }

    /**
     * Gets messages related to a certain route.
     *
     * @param  array  $props
     * @param  string  $option
     * @param  string  $resourceMethod
     * @return  array
     */
    private static function getMessages(array $props, string $option, string $resourceMethod)
    {
        $messages = array();
        $messageList = $props[parent::MESSAGES][$option];
        if ($props[parent::METHOD] === parent::RESOURCE) {
            if (!empty($resourceMethod)) {
                $messageList = $messageList[$resourceMethod];
            }
        }
        $fields = collect($messageList)->keys();
        foreach ($fields as $field) {
            $message = Messages::get($messageList[$field]);
            if (!empty($message)) {
                $messages += [$field => $message];
            } else {
                $messages += [$field => $messageList[$field]];
            }
        }
        return $messages;
    }

    /**
     * Gets request messages related to a certain route.
     *
     * @param  array  $props
     * @param  string  $resourceMethod
     * @return  array
     */
    public static function getRequestMessages(array $props, string $resourceMethod = '')
    {
        return self::getMessages($props, parent::REQUEST, $resourceMethod);
    }

    /**
     * Gets request messages related to a certain route.
     *
     * @param  array  $props
     * @param  string  $resourceMethod
     * @return  array
     */
    public static function getResponseMessages(array $props, string $resourceMethod = '')
    {
        return self::getMessages($props, parent::RESPONSE, $resourceMethod);
    }
}
