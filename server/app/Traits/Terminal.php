<?php

namespace App\Traits;

use Illuminate\Console\Command;
use Illuminate\Console\OutputStyle;
use Symfony\Component\Console\Input\StringInput;
use Symfony\Component\Console\Output\ConsoleOutput;

/*
|--------------------------------------------------------------------------
| Terminal Trait
|--------------------------------------------------------------------------
|
| This trait will be used to print on console.
|
*/

trait Terminal
{
    private static ?OutputStyle $terminal = null;

    /**
     * Returns an OutputStyle object for writing to console.
     *
     * @return \Illuminate\Console\OutputStyle
     */
    public static function get()
    {
        if (empty(self::$terminal)) {
            $command = (function () {
                return new class extends Command
                {
                    public $outputStyle;
                    public function __construct()
                    {
                        parent::__construct();
                        $this->outputStyle = new OutputStyle(new StringInput(''), new ConsoleOutput());
                    }
                };
            })();
            self::$terminal = $command->outputStyle;
        }

        return self::$terminal;
    }
}
