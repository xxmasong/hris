<?php

namespace App\Http\Props;

class RouteProps
{
    public const NOTSET = '';
    public const SP = '.';
    public const WC = '*';
    public const SP_WC = '.*';

    public const RESOURCE = 'RESOURCE';
    public const DELETE = 'DELETE';
    public const PUT = 'PUT';
    public const POST = 'POST';
    public const PATCH = 'PATCH';
    public const GET = 'GET';

    public const NO_ROUTE = '';
    public const NAMESPACE = 'namespace';
    public const PREFIX = 'prefix';
    public const ROUTE_API = 'api';
    public const ROUTE_WEB = 'web';

    public const GROUP = 'group';
    public const TYPE = 'type';
    public const NAME = 'name';
    public const ROUTE = 'route';
    public const MIDDLEWARE = 'middleware';
    public const METHOD = 'method';
    public const CONTROLLER = 'class';
    public const ACTION = 'action';
    public const ATTRIBUTES = 'attributes';
    public const MESSAGES = 'messages';
    public const REQUEST = 'request';
    public const RESPONSE = 'response';
    public const DATA = 'data';

    public const MIDDLEWARE_GUEST = 'guest';
    public const MIDDLEWARE_AUTH = 'auth:sanctum';

    public const VIEWER = 'viewer';
    public const LOADER = 'loader';
    public const AUTH = 'auth';
    public const USER = 'user';

    public const INDEX = 'index';
    public const STORE = 'store';
    public const CREATE = 'create';
    public const SHOW = 'show';
    public const EDIT = 'edit';
    public const UPDATE = 'update';
    public const DESTROY = 'destroy';

    public const TABLE = 'ROUTE_TABLE';
}
