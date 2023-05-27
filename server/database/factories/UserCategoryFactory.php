<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\UserCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserCategoryFactory extends ModelsFactory
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
            if (User::count() > 0 && Category::count() > 0) {
                collect(User::all())->each(function ($user) use ($modelFactory) {
                    collect(Category::all())->each(function ($category) use ($user, $modelFactory) {
                        $modelFactory->state([
                            User::FOREIGN_ID => $user->id,
                            Category::FOREIGN_ID => $category->id,
                            UserCategory::STATE => true,
                        ])->create();
                    });
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
