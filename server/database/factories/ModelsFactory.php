<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

abstract class ModelsFactory extends Factory
{
    public const BUILD = 'buildFactory';

    /**
     * Build instance of the factory on specified model.
     *
     * @param \Illuminate\Database\Eloquent\Factories\Factory
     * @return void
     */
    abstract public static function buildFactory(Factory $modelFactory);
}
