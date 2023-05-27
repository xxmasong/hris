<?php

use App\Http\Models;
use App\Traits\Terminal;
use Illuminate\Database\Migrations\Migration;

class CreateModelTablesConstraints extends Migration
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
            Models::addConstrains($migrationModel);
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
            Models::removeConstrains($migrationModel);
            Terminal::get()->progressAdvance();
            Terminal::get()->write(' ' . $migrationModel[Models::NAME]);
            usleep(100);
        }
        Terminal::get()->progressFinish();
    }
}
