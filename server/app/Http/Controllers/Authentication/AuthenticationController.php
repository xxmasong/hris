<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Http\Messages;
use App\Http\Props\Routes\AuthenticationRouteProps as AuthenticationProps;
use App\Http\Props\TokenProps;
use App\Http\Requests\Authentication\LoginRequest;
use App\Http\Requests\Authentication\RegisterRequest;
use App\Http\Routes;
use App\Models\Category;
use App\Models\Country;
use App\Models\User;
use App\Models\UserCategory;
use App\Models\UserCountry;
use App\Traits\Responser;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Symfony\Component\HttpFoundation\Response;

class AuthenticationController extends Controller
{
    use HasApiTokens, Responser;

    public const REGISTER = 'register';
    public function register(RegisterRequest $request)
    {
        [$user, $validData] = $request->validated();
        $store = $this->dto($user, $validData, [User::PASSWORD_CONFIRMATION])->toArray();
        $response = $this->newResource($user, $store, AuthenticationProps::REGISTER);
        if ($response->status() === Response::HTTP_CREATED) {
            try {
                DB::beginTransaction();
                $response = collect($response->getOriginalContent())->toArray()['data'][User::MODEL_KEY];
                collect(Category::all())->each(function ($category) use ($response) {
                    (new UserCategory([
                        User::FOREIGN_ID => $response[User::ID],
                        Category::FOREIGN_ID => $category[Category::ID],
                        UserCategory::STATE => true,
                    ]))->save();
                });
                (new UserCountry([
                    User::FOREIGN_ID => $response[User::ID],
                    Country::FOREIGN_ID => null,
                ]))->save();
                DB::commit();
             } catch(Exception $e){
                DB::rollback();
             }
            Auth::guard(Routes::ROUTE_WEB)->login($user);
            $token = $user->createToken(TokenProps::ACCESS)->plainTextToken;

            return $this->success(AuthenticationProps::REGISTER, [
                Messages::REASON => ['#registered'],
                TokenProps::ACCESS => [$token],
            ]);
        }

        return $response;
    }

    public const LOGIN = 'login';
    public function login(LoginRequest $request)
    {
        [$user, $validData] = $request->validated();
        if (empty($user)) {
            return $this->invalid(AuthenticationProps::LOGIN, [
                User::EMAIL => ['#email-invalid'],
            ]);
        }
        if (!Hash::check($validData[User::PASSWORD], $user[User::PASSWORD])) {
            return $this->invalid(AuthenticationProps::LOGIN, [
                User::PASSWORD => ['#password-invalid'],
            ]);
        }
        Auth::guard(Routes::ROUTE_WEB)->login($user);
        $token = $user->createToken(TokenProps::ACCESS)->plainTextToken;

        return $this->success(AuthenticationProps::LOGIN, [
            Messages::REASON => ['#login'],
            TokenProps::ACCESS => [$token],
        ]);
    }

    public const LOGOUT = 'logout';
    public function logout()
    {
        Auth::guard(Routes::ROUTE_WEB)->logout();
        Auth::user()->tokens()->delete();

        return $this->success(AuthenticationProps::LOGOUT, [Messages::REASON => ['#logout']]);
    }
}
