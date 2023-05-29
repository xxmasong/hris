<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Common Development Environment
    |--------------------------------------------------------------------------
    |
    | Here specified the development helpers, constants and/or configuration
    | used in the development of the project.
    |
    */

    'key' => env('USE_COMMON_KEY', ''),

    'viewer' => (bool) env('USE_COMMON_VIEWERS', false),

    'loader' => (bool) env('USE_COMMON_LOADERS', false),

    'factory_count' => (int) env('USE_COMMON_FACTORY_COUNT', 0),

    'newsdata_api_key' => env('NEWSDATA_API_KEY', ''),

    'newsdata_api_key_1' => env('NEWSDATA_API_KEY_1', ''),

    'newsdata_api_key_2' => env('NEWSDATA_API_KEY_2', ''),

    'newsdata_api_key_3' => env('NEWSDATA_API_KEY_3', ''),

    'newsdata_api_key_4' => env('NEWSDATA_API_KEY_4', ''),

    'newsdata_api_key_5' => env('NEWSDATA_API_KEY_5', ''),
];
