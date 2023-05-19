<?php

namespace App\Http\Props;

class MessageProps
{
    public const NOTSET = '';
    public const SP = '.';

    public const ERROR = 'errors';
    public const ALERT = 'alerts';
    public const CUSTOM = 'custom';
    public const AUTH = 'auth';
    public const PAGINATION = 'pagination';
    public const PASSWORD = 'passwords';
    public const VALIDATION = 'validation';

    public const REASON = 'reason';
    public const MESSAGE = 'message';
    public const CODE = 'code';

    public const ERROR_SIGN = 'E_MSG';
    public const ALERT_SIGN = 'A_MSG';
    public const CUSTOM_SIGN = '#';
    public const REF_SIGN = '@';

    public const ATTRIBUTE = ':attribute';
    public const DATE = ':date';
    public const MIN = ':min';
    public const MAX = ':max';
    public const FORMAT = ':format';
    public const OTHER = ':other';
    public const DIGITS = ':digits';
    public const VALUES = ':values';
    public const VALUE = ':value';
    public const SIZE = ':size';
    public const FIELD = ':field';
    public const TYPE = ':type';
    public const STATUS = ':status';
    public const SUBSTITUTES = [
        self::ATTRIBUTE,
        self::DATE,
        self::MIN,
        self::MAX,
        self::FORMAT,
        self::OTHER,
        self::DIGITS,
        self::VALUES,
        self::VALUE,
        self::SIZE,
        self::FIELD,
        self::TYPE,
        self::STATUS,
    ];

    public const TABLE = 'MESSAGE_TABLE';
}
