<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends ModelsFactory
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
            collect(Category::CATEGORIES)->each(function ($category) use ($modelFactory) {
                $modelFactory->state([
                    Category::NAME => $category,
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
