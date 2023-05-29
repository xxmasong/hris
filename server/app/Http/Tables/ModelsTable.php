<?php

namespace App\Http\Tables;

use App\Http\Props\ModelProps;
use App\Models\Article;
use App\Models\ArticleCategory;
use App\Models\ArticleCountry;
use App\Models\Category;
use App\Models\Country;
use App\Models\User;
use App\Models\UserCategory;
use App\Models\UserCountry;

class ModelsTable extends ModelProps
{
    public const MODEL_TABLE = [
        Category::MODEL,
        Country::MODEL,
        User::MODEL,
        UserCategory::MODEL,
        UserCountry::MODEL,
    ];

    public const MIGRATIONS_UP = self::MODEL_TABLE;
    public const MIGRATIONS_DOWN = self::MODEL_TABLE;

    public const SEEDERS = [
        // Tables with Factories
        Category::MODEL,
        Country::MODEL,
        // Tables with ...
        User::MODEL,
        // Tables with ...
        UserCategory::MODEL,
        UserCountry::MODEL,
    ];
}
