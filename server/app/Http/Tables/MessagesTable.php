<?php

namespace App\Http\Tables;

use App\Http\Props\MessageProps;

class MessagesTable extends MessageProps
{
    public const MESSAGE_TABLE = [
        self::ERROR,
        self::ALERT,
        self::CUSTOM,
        self::AUTH,
        self::PAGINATION,
        self::PASSWORD,
        self::VALIDATION,
    ];
}
