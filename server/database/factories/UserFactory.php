<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends ModelsFactory
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
           User::create([
                User::NAME => 'Admin Name',
                User::EMAIL => 'admin@gmail.com',
                User::PASSWORD => bcrypt('123'),
            ]);
            if (config('common.factory_count') > 0) {
                $modelFactory->count(config('common.factory_count'))->create();
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
        return [
            User::NAME => $this->faker->name(),
            User::EMAIL => $this->faker->unique()->safeEmail(),
            User::PASSWORD => bcrypt('123'),
        ];
    }
}
