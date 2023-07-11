<?php

namespace App\Providers;

use App\Http\Messages;
use App\Http\Models;
use App\Http\Routes;
use Illuminate\Auth\Authenticatable;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

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
        Schema::defaultStringLength(191);

        app(Models::class);
        app(Routes::class);
        app(Messages::class);
    }
}
