<?php

namespace Database\Factories;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;

class CountryFactory extends ModelsFactory
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
            collect(Country::COUNTRIES)->each(function ($country) use ($modelFactory) {
                $modelFactory->state([
                    Country::CODE => $country[Country::CODE],
                    Country::NAME => $country[Country::NAME],
                ])->create();
            });
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
