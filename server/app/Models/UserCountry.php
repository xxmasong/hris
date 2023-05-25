<?php

namespace App\Models;

use App\Http\Models;
use App\Http\Props\ModelProps;
use App\Http\Props\TimeProps;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserCountry extends ModelProps
{
    use HasFactory;

    /*
    |--------------------------------------------------------------------------
    | Model Definition ...
    |--------------------------------------------------------------------------
    */

    private const MODEL_KEY_R = 'user_countr';
    public const MODEL_KEY = self::MODEL_KEY_R . 'y';
    public const MODEL_KEY_P = self::MODEL_KEY_R . 'ies';
    public const MODEL = [
        parent::MODEL_CLASS => self::class,
        parent::GROUP => parent::NOTSET,
        parent::NAME => self::MODEL_KEY_P,
        parent::PRIMARY_KEY => parent::ID,
        parent::FOREIGN_KEY => self::MODEL_KEY . parent::ID_P,
        parent::ATTRIBUTES => [
            parent::ID => ['id'],
            User::FOREIGN_ID => ['bigInteger', 'unsigned'],
            Country::FOREIGN_ID => ['bigInteger', 'unsigned', 'nullable'],
            TimeProps::CREATED => ['timestamp', 'nullable'],
            TimeProps::UPDATED => ['timestamp', 'nullable'],
        ],
        parent::CONSTRAINTS => [
            User::FOREIGN_ID => [
                parent::REFERENCES => [User::FOREIGN_NAME => parent::ID],
                parent::ACTIONS => [parent::CASCADE_ON_UPDATE, parent::CASCADE_ON_DELETE],
            ],
            Country::FOREIGN_ID => [
                parent::REFERENCES => [Country::FOREIGN_NAME => parent::ID],
                parent::ACTIONS => [parent::CASCADE_ON_UPDATE, parent::CASCADE_ON_DELETE],
            ],
        ],
        parent::RELATIONS => [
            // Inverse Relations ...
            User::class => parent::ONE_TO_ONE_INVERSE,
            Country::class => parent::ONE_TO_ONE_INVERSE,
        ],
        parent::PARAMETERS => [],
    ];
    public const FOREIGN_ID = self::MODEL[parent::FOREIGN_KEY];
    public const FOREIGN_NAME = self::MODEL[parent::NAME];

    /*
    |--------------------------------------------------------------------------
    | Table Properties ...
    |--------------------------------------------------------------------------
    */

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = self::MODEL[self::NAME];

    /**
     * The index or primary key of the table.
     *
     * @var string
     */
    protected $primaryKey = self::MODEL[self::PRIMARY_KEY];

    /**
     * Indicates if the model's ID is auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The data type of the auto-incrementing ID.
     *
     * @var string
     */
    protected $keyType = self::PK_TYPE;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        User::FOREIGN_ID,
        Country::FOREIGN_ID,
    ];

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        TimeProps::CREATED,
        TimeProps::UPDATED,
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [];

    /*
    |--------------------------------------------------------------------------
    | Inverse Relations ...
    |--------------------------------------------------------------------------
    */

    public function user()
    {
        return Models::establishRelation($this, __FUNCTION__);
    }

    public function country()
    {
        return Models::establishRelation($this, __FUNCTION__);
    }

    /*
    |--------------------------------------------------------------------------
    | Query ...
    |--------------------------------------------------------------------------
    */

    public static function name()
    {
        return (new \ReflectionClass(self::class))->getShortName();
    }

    public static function pick(string $attribute)
    {
        return self::all($attribute)->random()[$attribute];
    }
}
