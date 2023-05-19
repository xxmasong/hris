<?php

namespace App\Providers;

use App\Http\Messages;
use App\Http\Models;
use App\Http\Routes;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Auth\Authenticatable;
use Illuminate\Support\Facades\URL;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;

class AppServiceProvider extends ServiceProvider
{
    use Authenticatable;

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->environment('local')) {
            $this->app->register(\Laravel\Telescope\TelescopeServiceProvider::class);
            $this->app->register(TelescopeServiceProvider::class);
        }
        $this->app->singleton(Models::class, function () {
            return new Models();
        });
        $this->app->singleton(Routes::class, function () {
            return new Routes();
        });
        $this->app->singleton(Messages::class, function () {
            return new Messages();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        app(Models::class);
        app(Routes::class);
        app(Messages::class);
    }
}
