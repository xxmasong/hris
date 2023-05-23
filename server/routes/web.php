<?php

use App\Http\Routes;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Routes::registerWebRoutes();

Route::get('/healthcheck', function () {
    return 'ok';
});


Route::get('/', function () {
    return view('welcome');
});

