<?php

namespace App\Http\Tables;

use App\Http\Props\RouteProps;
use App\Http\Props\Routes\AuthenticationRouteProps;
use App\Http\Props\Routes\AccountRouteProps;
use App\Http\Props\Routes\CommonRouteProps;
use App\Http\Props\Routes\NewsRouteProps;

class RoutesTable extends RouteProps
{
    public const ROUTE_TABLE = [
        self::ROUTE_API => [
            AuthenticationRouteProps::REGISTER,
            AuthenticationRouteProps::LOGIN,
            AuthenticationRouteProps::LOGOUT,
            AccountRouteProps::CURRENT_USER,
            AccountRouteProps::CURRENT_COUNTRY,
            AccountRouteProps::CURRENT_CATEGORIES,
            NewsRouteProps::ALL_COUNTRIES,
            NewsRouteProps::ALL_CATEGORIES,
            NewsRouteProps::ARTICLES,
            NewsRouteProps::SOURCES,
            AccountRouteProps::UPDATE_USER,
            AccountRouteProps::UPDATE_COUNTRY,
            AccountRouteProps::UPDATE_CATEGORY,
        ],
        self::ROUTE_WEB => [
            CommonRouteProps::VIEW_TELESCOPE,
            CommonRouteProps::VIEW_MODELS,
            CommonRouteProps::VIEW_ROUTES,
            CommonRouteProps::VIEW_MESSAGES,
            CommonRouteProps::VIEW_DATABASE,
            CommonRouteProps::LOAD_PROPS,
        ],
    ];
}
