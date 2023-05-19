<?php

namespace App\Http\Props;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class AuthModelProps extends Authenticatable implements
    ModelPropsInterface,
    MustVerifyEmail
{
    use HasApiTokens, Notifiable;
}
