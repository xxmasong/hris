<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DBCreate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'migrate:db {name?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new MySQL database based on the database config file or the provided name.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $default = config('database.default');
        $connection = config('database.connections.' . $default);
        $host = $connection['host'];
        $port = $connection['port'];
        $username = $connection['username'];
        $password = $connection['password'];
        $database = $this->argument('name') ?: $connection['database'];
        $charset = $connection['charset'];
        $collation = $connection['collation'];

        try {
            $conn = new \mysqli($host, $username, $password, null, $port, null);
            if ($conn->connect_error) {
                $this->error("Connection failed: " . $conn->connect_error);
                die;
            }
            if ($conn->query("CREATE DATABASE `$database` CHARACTER SET `$charset` COLLATE `$collation`;") === TRUE) {
                $this->info("Sucessfully created database '" . $database . "'.");
            } else {
                $this->error("Error creating database: " . $conn->error);
            }
            $conn->close();
        } catch (\Exception $e) {
            $this->warn("There was a problem creating database '" . $database . "'.");
            die;
        }

        return Command::SUCCESS;
    }
}
