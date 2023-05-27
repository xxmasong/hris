<?php

namespace Database\Factories;

use App\Http\Props\ModelProps;
use App\Models\Country;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserCountryFactory extends ModelsFactory
{
    /**
     * Build instance of the factory on specified model.
     *
     * @param \Illuminate\Database\Eloquent\Factories\Factory
     * @return void
     */
    public static function buildFactory(Factory $modelFactory)
    {
        if (!empty($modelFactory)) {
            if (User::count() > 0 && Country::count() > 0) {
                collect(User::all())->each(function ($user) use ($modelFactory) {
                    $modelFactory->state([
                        User::FOREIGN_ID => $user->id,
                        Country::FOREIGN_ID => Country::pick(ModelProps::ID),
                    ])->create();
                });
            }
        }
    }

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [];
    }
}
