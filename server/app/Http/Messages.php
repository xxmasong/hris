<?php

namespace App\Http;

use App\Http\Tables\MessagesTable;
use Illuminate\Support\Facades\App;
use Illuminate\Support\MessageBag;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Translation\FileLoader;

class Messages extends MessagesTable
{
    private static ?MessageBag $messageBag = null;
    private static ?array $messageTable = null;

    /**
     * Create new messages instance.
     *
     * @return void
     */
    public function __construct()
    {
        $fileLoader = new FileLoader(new Filesystem(), App::langPath());
        $locale = App::getLocale();
        self::$messageTable = array();
        $table = (new \ReflectionClass(self::class))->getConstant('TABLE');
        $table = (new \ReflectionClass(self::class))->getConstant($table);
        foreach ($table as $resource) {
            self::$messageTable += [$resource => $fileLoader->load($locale, $resource)];
        }
        self::$messageBag = new MessageBag();
    }

    /**
     * Returns the message table or listing.
     *
     * @param  array  $exclude
     * @return array
     */
    public static function getMessageTable(array $exclude = [])
    {
        if (!empty($exclude)) {
            $modifiedTable = self::$messageTable;
            $excludes = array_intersect(array_keys($modifiedTable), $exclude);
            foreach ($excludes as $reject) {
                unset($modifiedTable[$reject]);
            }
            return $modifiedTable;
        }

        return self::$messageTable;
    }

    /**
     * Gets the message string from the table or resource from message key.
     *
     * @param  string  $key
     * @param  array  $replace
     * @return string
     */
    public static function get(string $key, array $replace = [])
    {
        $message = '';
        if (str_contains($key, parent::ERROR_SIGN)) {
            $message = $key . ': ' . collect(self::$messageTable[parent::ERROR])->get($key);
        } else if (str_contains($key, parent::ALERT_SIGN)) {
            $message = $key . ': ' . collect(self::$messageTable[parent::ALERT])->get($key);
        } else if (str_contains($key, parent::CUSTOM_SIGN)) {
            $message = collect(self::$messageTable[parent::CUSTOM])->get($key);
        } else {
            $message = collect(self::$messageBag)->get($key);
        }

        if (str_contains($message, parent::REF_SIGN . '.')) {
            $message = self::get(trim(substr($message, 2)), []);
        }

        if (!empty($replace)) {
            foreach (parent::SUBSTITUTES as $substitute) {
                if (collect($replace)->has($substitute)) {
                    if (str_contains($message, $substitute)) {
                        $message = str_replace($substitute, $replace[$substitute], $message);
                    }
                }
            }
        }

        return $message;
    }

    /**
     * Sets the message string to the message table.
     *
     * @param  string  $key
     * @param  string  $message
     */
    public static function set(string $key, string $message)
    {
        self::$messageBag->add($key, $message);
    }
}
