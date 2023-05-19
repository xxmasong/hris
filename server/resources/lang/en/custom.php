<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Custom Messages
    |--------------------------------------------------------------------------
    |
    | ...
    |
    */

    '#route:unknown' => 'Route Method Not Recognized!',

    '#msg:forbidden' => 'Request Not Allowed!',
    '#msg:not-found' => 'Resource Not Found!',
    '#msg:error' => 'Failed! An error occured.',
    '#msg:success' => 'Success! No error occured.',
    '#msg:invalid' => 'The given data was invalid.',
    '#msg:valid' => 'The given data was valid.',

    '#rsp:required' => 'Value is required but NOT present.',
    '#rsp:type' => 'Value is NOT of type :type.',
    '#rsp:transform' => 'Cannot transform \':field\' into message.',
    '#rsp:status' => 'The field \':field\' is not required.',
    '#rsp:violations' => 'One or more violations found at response.',

    '#res:not-acceptable' => 'Resource not acceptable.',
    '#res:no-request' => 'Resource data not provided.',
    '#res:no-search' => 'Resource search not provided.',
    '#res:not-found' => 'Resource search not found.',
    '#res:no-content' => 'Resource has no content.',
    '#res:found' => 'Resource search found.',
    '#res:options' => 'Resource options provided.',
    '#res:existed' => 'Resource already existed.',
    '#res:created' => 'Resource created!',
    '#res:updated' => 'Resource updated!',
    '#res:moved' => 'Resource transferred!',
    '#res:deleted' => 'Resource deleted!',
    '#res:nondeletable' => 'Resource not deletable.',

    '#registered' => 'Account successfully registered.',
    '#updated' => 'Account successfully updated.',
    '#login' => 'Account successfully logged in.',
    '#logged_in' => 'Account already logged in.',
    '#logout' => 'Account successfully logged out.',
    '#verified' => 'Account verified.',
    '#email-invalid' => 'Invalid Email',
    '#password-invalid' => 'Invalid Password',
    '#password-mismatch' => 'Password verification mismatch.',

    /*
    |--------------------------------------------------------------------------
    | Alias Messages
    |--------------------------------------------------------------------------
    |
    | ...
    |
    */
];
