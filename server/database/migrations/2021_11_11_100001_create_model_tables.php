<?php

use App\Http\Models;
use App\Traits\Terminal;
use Illuminate\Database\Migrations\Migration;

class CreateModelTables extends Migration
{
    use Terminal;

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Terminal::get()->progressStart(collect(Models::MIGRATIONS_UP)->keys()->count());
        foreach (Models::MIGRATIONS_UP as $migrationModel) {
            Models::createTable($migrationModel);
            Terminal::get()->progressAdvance();
            Terminal::get()->write(' ' . $migrationModel[Models::NAME]);
        }
        Terminal::get()->progressFinish();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Terminal::get()->progressStart(collect(Models::MIGRATIONS_DOWN)->keys()->count());
        foreach (Models::MIGRATIONS_DOWN as $migrationModel) {
            Models::destroyTable($migrationModel);
            Terminal::get()->progressAdvance();
            Terminal::get()->write(' ' . $migrationModel[Models::NAME]);
            usleep(100);
        }
        Terminal::get()->progressFinish();
    }
}
