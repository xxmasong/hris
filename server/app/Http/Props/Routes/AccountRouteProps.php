<?php

namespace App\Http\Props\Routes;

use App\Http\Controllers\Account\AccountController;
use App\Http\Messages;
use App\Http\Props\RouteProps;
use App\Models\Category;
use App\Models\Country;
use App\Models\User;
use App\Models\UserCategory;
use App\Models\UserCountry;

class AccountRouteProps extends RouteProps
{
    public const ACCOUNT = 'account';
    public const ACCOUNT_GROUP = [parent::PREFIX => self::ACCOUNT];
    public const ACCOUNT_PROPS = [
        parent::GROUP => self::ACCOUNT_GROUP,
        parent::NAME => self::ACCOUNT . parent::SP,
        parent::MIDDLEWARE => [parent::MIDDLEWARE_AUTH],
        parent::ROUTE => '/',
        parent::CONTROLLER => AccountController::class,
        parent::ATTRIBUTES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
        parent::MESSAGES => [
            parent::REQUEST => [],
            parent::RESPONSE => [],
        ],
    ];

    public const CURRENT_USER = [
        ...self::ACCOUNT_PROPS,
        parent::NAME => self::ACCOUNT_PROPS[parent::NAME] . AccountController::CURRENT_USER,
        parent::ROUTE => self::ACCOUNT_PROPS[parent::ROUTE]. AccountController::CURRENT_USER,
        parent::METHOD => parent::GET,
        parent::ACTION => AccountController::CURRENT_USER,
        parent::ATTRIBUTES => [
            ...self::ACCOUNT_PROPS[parent::ATTRIBUTES],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'message'],
                User::MODEL_KEY => ['object', 'required'],
            ],
        ],
    ];

    public const CURRENT_COUNTRY = [
        ...self::ACCOUNT_PROPS,
        parent::NAME => self::ACCOUNT_PROPS[parent::NAME] . AccountController::CURRENT_COUNTRY,
        parent::ROUTE => self::ACCOUNT_PROPS[parent::ROUTE]. AccountController::CURRENT_COUNTRY,
        parent::METHOD => parent::GET,
        parent::ACTION => AccountController::CURRENT_COUNTRY,
        parent::ATTRIBUTES => [
            ...self::ACCOUNT_PROPS[parent::ATTRIBUTES],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'message'],
                Country::MODEL_KEY => ['object', 'required'],
            ],
        ],
    ];

    public const CURRENT_CATEGORIES = [
        ...self::ACCOUNT_PROPS,
        parent::NAME => self::ACCOUNT_PROPS[parent::NAME] . AccountController::CURRENT_CATEGORIES,
        parent::ROUTE => self::ACCOUNT_PROPS[parent::ROUTE]. AccountController::CURRENT_CATEGORIES,
        parent::METHOD => parent::GET,
        parent::ACTION => AccountController::CURRENT_CATEGORIES,
        parent::ATTRIBUTES => [
            ...self::ACCOUNT_PROPS[parent::ATTRIBUTES],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'message'],
                Category::MODEL_KEY => ['object', 'required'],
            ],
        ],
    ];

    public const UPDATE_USER = [
        ...self::ACCOUNT_PROPS,
        parent::NAME => self::ACCOUNT_PROPS[parent::NAME] . AccountController::UPDATE_USER,
        parent::ROUTE => self::ACCOUNT_PROPS[parent::ROUTE]. AccountController::UPDATE_USER,
        parent::METHOD => parent::PATCH,
        parent::ACTION => AccountController::UPDATE_USER,
        parent::ATTRIBUTES => [
            parent::REQUEST => [
                User::NAME => ['string', 'sometimes', 'required'],
                User::EMAIL => ['string', 'email', 'sometimes', 'required'],
                User::PASSWORD_OLD => ['string', 'required_with:password'],
                User::PASSWORD => ['string', 'required_with:password_old', 'min:8', 'max:16', 'confirmed', 'regex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/'],
                User::PASSWORD_CONFIRMATION => ['string', 'required_with:password'],
            ],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'error', 'success', 'message'],
                User::MODEL_KEY => ['object', 'success'],
            ],
        ],
    ];

    public const UPDATE_COUNTRY = [
        ...self::ACCOUNT_PROPS,
        parent::NAME => self::ACCOUNT_PROPS[parent::NAME] . AccountController::UPDATE_COUNTRY,
        parent::ROUTE => self::ACCOUNT_PROPS[parent::ROUTE]. AccountController::UPDATE_COUNTRY,
        parent::METHOD => parent::PATCH,
        parent::ACTION => AccountController::UPDATE_COUNTRY,
        parent::ATTRIBUTES => [
            parent::REQUEST => [
                Country::CODE => ['string', 'sometimes', 'required'],
                Country::NAME => ['string', 'sometimes', 'required'],
            ],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'error', 'success', 'message'],
                UserCountry::MODEL_KEY => ['object', 'success'],
            ],
        ],
    ];

    public const UPDATE_CATEGORY = [
        ...self::ACCOUNT_PROPS,
        parent::NAME => self::ACCOUNT_PROPS[parent::NAME] . AccountController::UPDATE_CATEGORY,
        parent::ROUTE => self::ACCOUNT_PROPS[parent::ROUTE]. AccountController::UPDATE_CATEGORY,
        parent::METHOD => parent::PATCH,
        parent::ACTION => AccountController::UPDATE_CATEGORY,
        parent::ATTRIBUTES => [
            parent::REQUEST => [
                // Basic Categories:
                Category::CATEGORIES[Category::WORLD] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::POLITICS] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::BUSINESS] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::ENTERTAINMENT] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::SPORTS] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::HEALTH] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::TECHNOLOGY] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES[Category::SCIENCE] => ['boolean', 'sometimes', 'required'],
                // Extended Supported Categories:
                Category::CATEGORIES_EXT[Category::FOOD] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES_EXT[Category::TOURISM] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES_EXT[Category::ENVIRONMENT] => ['boolean', 'sometimes', 'required'],
                Category::CATEGORIES_EXT[Category::TOP] => ['boolean', 'sometimes', 'required'],
            ],
            parent::RESPONSE => [
                Messages::REASON => ['string', 'error', 'success', 'message'],
                UserCategory::MODEL_KEY => ['object', 'success'],
            ],
        ],
    ];
}
