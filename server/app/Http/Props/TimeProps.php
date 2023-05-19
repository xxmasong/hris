<?php

namespace App\Http\Props;

class TimeProps
{
    public const NOTSET = '';
    public const SP = '-';

    public const TIME = 'time';
    public const TIME_FMT = 'His';

    public const DATE = 'date';
    public const DATE_FMT = 'Y-m-d';

    public const DATE_TIME = self::DATE . self::TIME;
    public const DATE_TIME_FMT = self::DATE_FMT . self::SP . self::TIME_FMT;
    public const DATE_CAST = self::DATE . ':' . self::DATE_FMT;

    public const CREATED = 'created_at';
    public const UPDATED = 'updated_at';
    public const VERIFIED = 'email_verified_at';
}
