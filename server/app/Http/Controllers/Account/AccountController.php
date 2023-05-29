<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Messages;
use App\Http\Props\Routes\AccountRouteProps as AccountProps;
use App\Http\Requests\Account\UpdateCategoryRequest;
use App\Http\Requests\Account\UpdateCountryRequest;
use App\Http\Requests\Account\UpdateUserRequest;
use App\Models\Category;
use App\Models\Country;
use App\Models\User;
use App\Models\UserCategory;
use App\Models\UserCountry;
use App\Traits\Responser;
use Illuminate\Support\Facades\Hash;

class AccountController extends Controller
{
    use Responser;

    public const CURRENT_USER = 'currentUser';
    public function currentUser()
    {
        return $this->success(AccountProps::CURRENT_USER, [
            Messages::REASON => ['#verified'],
            User::MODEL_KEY => User::authUser(),
        ]);
    }

    public const CURRENT_COUNTRY = 'currentCountry';
    public function currentCountry()
    {
        return $this->success(AccountProps::CURRENT_COUNTRY, [
            Messages::REASON => ['#verified'],
            Country::MODEL_KEY => Country::authCountry(),
        ]);
    }

    public const CURRENT_CATEGORIES = 'currentCategories';
    public function currentCategories()
    {
        return $this->success(AccountProps::CURRENT_CATEGORIES, [
            Messages::REASON => ['#verified'],
            Category::MODEL_KEY => Category::authCategories(),
        ]);
    }

    public const UPDATE_USER = 'updateUser';
    public function updateUser(UpdateUserRequest $request)
    {
        [$user, $validData] = $request->validated();

        if (collect($validData)->has([
            User::PASSWORD_OLD, User::PASSWORD, User::PASSWORD_CONFIRMATION
        ])) {
            if ($validData[User::PASSWORD] === $validData[User::PASSWORD_CONFIRMATION]) {
                if (!Hash::check($validData[User::PASSWORD_OLD], $user[User::PASSWORD])) {
                    return $this->error(AccountProps::UPDATE_USER, [
                        Messages::REASON => ['#password-invalid'],
                    ]);
                }
                $validData[User::PASSWORD] = bcrypt($validData[User::PASSWORD]);
            } else {
                return $this->error(AccountProps::UPDATE_USER, [
                    Messages::REASON => ['#password-mismatch'],
                ]);
            }
        }
        $user->update($validData);

        return $this->success(AccountProps::UPDATE_USER, [
            Messages::REASON => ['#updated'],
            User::MODEL_KEY => collect($user)->only([
                User::NAME, User::EMAIL
            ]),
        ]);
    }

    public const UPDATE_COUNTRY = 'updateCountry';
    public function updateCountry(UpdateCountryRequest $request)
    {
        [$userCountry, $validData] = $request->validated();

        if (empty($validData)) {
            return $this->error(AccountProps::UPDATE_COUNTRY, [
                Messages::REASON => ['#res:no-content'],
            ]);
        }
        if (collect($validData)->has(Country::CODE)) {
            $countryData = [Country::FOREIGN_ID => collect(Country::COUNTRIES)
                ->search(function ($country) use ($validData) {
                    return $country[Country::CODE] === strtolower($validData[Country::CODE]);
            })];
        } else if (collect($validData)->has(Country::NAME)) {
            $countryData = [Country::FOREIGN_ID => collect(Country::COUNTRIES)
                ->search(function ($country) use ($validData) {
                    return $country[Country::NAME] === ucwords($validData[Country::NAME]);
            })];
            if (!$countryData[Country::FOREIGN_ID]
                && strtolower(trim($validData[Country::NAME])) === Country::GLOBAL) {
                $countryData = [Country::FOREIGN_ID => null];
            }
        }
        if ($countryData[Country::FOREIGN_ID] !== false) {
            $userCountry->update($countryData);
            if ($countryData[Country::FOREIGN_ID] === null) {
                $validData = [Country::CODE => 'global', Country::NAME => 'Global'];
            } else {
                $validData = Country::COUNTRIES[$countryData[Country::FOREIGN_ID]];
            }
        } else {
            return $this->error(AccountProps::UPDATE_COUNTRY, [
                Messages::REASON => ['#res:not-found'],
            ]);
        }

        return $this->success(AccountProps::UPDATE_COUNTRY, [
            Messages::REASON => ['#updated'],
            UserCountry::MODEL_KEY => collect($validData),
        ]);
    }

    public const UPDATE_CATEGORY = 'updateCategory';
    public function updateCategory(UpdateCategoryRequest $request)
    {
        [$userCategory, $validData] = $request->validated();

        if (empty($validData)) {
            return $this->error(AccountProps::UPDATE_CATEGORY, [
                Messages::REASON => ['#res:no-content'],
            ]);
        }
        $userCategory->where(Category::FOREIGN_ID,
            collect(Category::CATEGORIES)->search(function ($category) use ($validData) {
                return array_key_first($validData) === $category;
            }))->update([UserCategory::STATE => collect($validData)->first()]);

        return $this->success(AccountProps::UPDATE_CATEGORY, [
            Messages::REASON => ['#updated'],
            UserCategory::MODEL_KEY => collect($validData),
        ]);
    }
}
