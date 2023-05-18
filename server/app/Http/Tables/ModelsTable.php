<?php

namespace App\Http\Tables;

use App\Http\Props\ModelProps;

class ModelsTable extends ModelProps
{
    public const MODEL_TABLE = [
    ];

    public const MIGRATIONS_UP = self::MODEL_TABLE;
    public const MIGRATIONS_DOWN = self::MODEL_TABLE;

    public const SEEDERS = [];
}
