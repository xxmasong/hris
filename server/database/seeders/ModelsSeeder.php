<?php

namespace Database\Seeders;

use App\Http\Models;
use App\Traits\Terminal;
use Illuminate\Database\Seeder;

class ModelsSeeder extends Seeder
{
    use Terminal;

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Terminal::get()->progressStart(collect(Models::SEEDERS)->keys()->count());
        foreach (Models::SEEDERS as $modelSeeder) {
            Models::seedTable($modelSeeder);
            Terminal::get()->progressAdvance();
            Terminal::get()->write(' ' . $modelSeeder[Models::NAME]);
        }
        Terminal::get()->progressFinish();
    }
}
