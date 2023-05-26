<?php

namespace App\Http\Props\Routes;

use App\Http\Controllers\Authentication\AuthenticationController;
use App\Http\Messages;
use App\Http\Props\TokenProps;
use App\Http\Props\RouteProps;
use App\Models\User;

class AuthenticationRouteProps extends RouteProps
{
    public const AUTH_GROUP = [parent::PREFIX => parent::AUTH];
    public const AUTH_PROPS =  [
        parent::GROUP => self::AUTH_GROUP,
        parent::NAME => parent::AUTH . parent::SP,
        parent::MIDDLEWARE => [parent::MIDDLEWARE_GUEST],
        parent::ROUTE => '/',
        parent::CONTROLLER => AuthenticationController::class,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const REGISTER =  [
        ...self::AUTH_PROPS,
        parent::NAME => self::AUTH_PROPS[parent::NAME] . AuthenticationController::REGISTER,
        parent::ROUTE => self::AUTH_PROPS[parent::ROUTE] . AuthenticationController::REGISTER,
        parent::METHOD => parent::POST,
        parent::ACTION => AuthenticationController::REGISTER,
        parent::ATTRIBUTES => [
            parent::REQUEST => [
                User::EMAIL => ['string', 'required', 'email', 'unique:users'],
                User::PASSWORD => ['string', 'required', 'min:8', 'max:16', 'confirmed', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'],
                User::PASSWORD_CONFIRMATION => ['string', 'required'],
            ],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'required', 'message'],
                TokenProps::ACCESS => ['string'],
                User::EMAIL => ['string', 'message'],
            ],
        ],
        parent::MESSAGES => [
            ...self::AUTH_PROPS[parent::MESSAGES],
            parent::REQUEST => [
                User::PASSWORD . '.regex' => 'Password must have at least an uppercase, lowercase, symbol, and number.',
            ],
        ],
    ];

    public const LOGIN = [
        ...self::AUTH_PROPS,
        parent::NAME => self::AUTH_PROPS[parent::NAME] . AuthenticationController::LOGIN,
        parent::ROUTE => self::AUTH_PROPS[parent::ROUTE] . AuthenticationController::LOGIN,
        parent::METHOD => parent::POST,
        parent::ACTION => AuthenticationController::LOGIN,
        parent::ATTRIBUTES => [
            parent::REQUEST => [
                User::EMAIL => ['string', 'required', 'email'],
                User::PASSWORD => ['string', 'required'],
            ],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'success', 'message'],
                TokenProps::ACCESS => ['string'],
                User::EMAIL => ['string', 'success', 'error', 'invalid', 'message'],
                User::PASSWORD => ['string', 'invalid', 'message'],
            ],
        ],
    ];

    public const LOGOUT = [
        ...self::AUTH_PROPS,
        parent::NAME => self::AUTH_PROPS[parent::NAME] . AuthenticationController::LOGOUT,
        parent::ROUTE => self::AUTH_PROPS[parent::NAME] . AuthenticationController::LOGOUT,
        parent::METHOD => parent::POST,
        parent::ACTION => AuthenticationController::LOGOUT,
        parent::ATTRIBUTES => [
            ...self::AUTH_PROPS[parent::ATTRIBUTES],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'required', 'message'],
            ],
        ],
    ];
}
