<?php

namespace App\Http\Props;

class MultimediaProps
{
    public const NOTSET = '';
    public const SP = '-';

    public const DIR = '/';
    public const DATA = 'data:';
    public const WEB = ['http://', 'https://'];
    public const DIR_IMAGE = '/images/';

    public const MIME = 'mime';
    public const IMAGE = 'image';

    public const FILE_DATE = TimeProps::DATE_TIME_FMT;
    public const FILE_GEN_LENGTH = 8;
    public const WEB_CONNECT_TIMEOUT = 10;

    public const SOURCE = 'source';
    public const CONVERSIONS = 'conversions';
    public const RESPONSIVES = 'responsive-images';

    public const STORAGE_APP = 'app';
    public const AWS_S3 = 's3';
    public const LOCAL = 'local';
    public const PUBLIC = 'public';
}
