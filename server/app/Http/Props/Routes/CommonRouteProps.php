<?php

namespace App\Http\Props\Routes;

use App\Http\Controllers\Common\LoaderController;
use App\Http\Controllers\Common\ViewerController;
use App\Http\Props\RouteProps;

class CommonRouteProps extends RouteProps
{
    public const VIEW_TELESCOPE = [
        parent::GROUP => parent::NOTSET,
        parent::TYPE => parent::VIEWER,
        parent::NAME => 'telescope.redirect',
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/telescope',
        parent::METHOD => parent::GET,
        parent::CONTROLLER => ViewerController::class,
        parent::ACTION => ViewerController::VIEW_TELESCOPE,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const VIEW_MODELS = [
        parent::GROUP => [parent::PREFIX => 'view'],
        parent::TYPE => parent::VIEWER,
        parent::NAME => 'models',
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/models/{key}',
        parent::METHOD => parent::GET,
        parent::CONTROLLER => ViewerController::class,
        parent::ACTION => ViewerController::VIEW_MODELS,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const VIEW_ROUTES = [
        parent::GROUP => [parent::PREFIX => 'view'],
        parent::TYPE => parent::VIEWER,
        parent::NAME => 'routes',
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/routes/{key}',
        parent::METHOD => parent::GET,
        parent::CONTROLLER => ViewerController::class,
        parent::ACTION => ViewerController::VIEW_ROUTES,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const VIEW_MESSAGES = [
        parent::GROUP => [parent::PREFIX => 'view'],
        parent::TYPE => parent::VIEWER,
        parent::NAME => 'messages',
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/messages/{key}',
        parent::METHOD => parent::GET,
        parent::CONTROLLER => ViewerController::class,
        parent::ACTION => ViewerController::VIEW_MESSAGES,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const VIEW_DATABASE = [
        parent::GROUP => [parent::PREFIX => 'view'],
        parent::TYPE => parent::VIEWER,
        parent::NAME => 'database',
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/db/{key}',
        parent::METHOD => [parent::GET, parent::POST],
        parent::CONTROLLER => ViewerController::class,
        parent::ACTION => ViewerController::VIEW_DATABASE,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const LOAD_PROPS = [
        parent::GROUP => [parent::PREFIX => 'load'],
        parent::TYPE => parent::LOADER,
        parent::NAME => 'props',
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/{key}',
        parent::METHOD => [parent::GET, parent::POST],
        parent::CONTROLLER => LoaderController::class,
        parent::ACTION => LoaderController::LOAD_PROPS,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];
}
