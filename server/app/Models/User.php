<?php

namespace App\Models;

use App\Http\Models;
use App\Http\Props\AuthModelProps;
use App\Http\Props\TimeProps;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends AuthModelProps
{
    use HasFactory;

    /*
    |--------------------------------------------------------------------------
    | Model Definition ...
    |--------------------------------------------------------------------------
    */

    public const EMAIL = 'email';
    public const PASSWORD = 'password';

    public const PASSWORD_OLD = 'password_old';
    public const PASSWORD_CONFIRMATION = 'password_confirmation';
    public const PASSWORD_TEMPORARY = 'password_temporary';

    private const MODEL_KEY_R = 'user';
    public const MODEL_KEY = self::MODEL_KEY_R;
    public const MODEL_KEY_P = self::MODEL_KEY . 's';
    public const MODEL = [
        parent::MODEL_CLASS => self::class,
        parent::GROUP => parent::NOTSET,
        parent::NAME => self::MODEL_KEY_P,
        parent::PRIMARY_KEY => parent::ID,
        parent::FOREIGN_KEY => self::MODEL_KEY . parent::ID_P,
        parent::ATTRIBUTES => [
            parent::ID => ['id'],
            parent::NAME => ['string', 'nullable'],
            self::EMAIL => ['string', 'unique'],
            self::PASSWORD => ['string'],
            TimeProps::CREATED => ['timestamp', 'nullable'],
            TimeProps::UPDATED => ['timestamp', 'nullable'],
        ],
        parent::CONSTRAINTS => [],
        parent::RELATIONS => [
            // Direct Relations ...
            UserCategory::class => parent::ONE_TO_MANY,
            UserCountry::class => parent::ONE_TO_ONE,
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
    protected $table = self::MODEL[parent::NAME];

    /**
     * The index or primary key of the table.
     *
     * @var string
     */
    protected $primaryKey = self::MODEL[parent::PRIMARY_KEY];

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
    protected $keyType = parent::PK_TYPE;

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
        self::NAME,
        self::EMAIL,
        self::PASSWORD,
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
        self::PASSWORD,
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
    | Direct Relations ...
    |--------------------------------------------------------------------------
    */

    public function userCategory()
    {
        return Models::establishRelation($this, __FUNCTION__);
    }

    public function userCountry()
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

    public static function authUser()
    {
        $user = collect(auth()->user())->only([
            User::NAME, User::EMAIL
        ])->toArray();

        return collect($user);
    }
}
