<?php

namespace App\Models;

use App\Http\Models;
use App\Http\Props\ModelProps;
use App\Http\Props\TimeProps;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends ModelProps
{
    use HasFactory;

    /*
    |--------------------------------------------------------------------------
    | Model Definition ...
    |--------------------------------------------------------------------------
    */

    public const WORLD = 1;
    public const POLITICS = 2;
    public const BUSINESS = 3;
    public const ENTERTAINMENT = 4;
    public const SPORTS = 5;
    public const HEALTH = 6;
    public const TECHNOLOGY = 7;
    public const SCIENCE = 8;

    public const FOOD = 9;
    public const TOURISM = 10;
    public const ENVIRONMENT = 11;
    public const TOP = 12;

    public const CATEGORIES = [
        self::WORLD => 'world',
        self::POLITICS => 'politics',
        self::BUSINESS => 'business',
        self::ENTERTAINMENT => 'entertainment',
        self::SPORTS => 'sports',
        self::HEALTH => 'health',
        self::TECHNOLOGY => 'technology',
        self::SCIENCE => 'science',
    ];

    public const CATEGORIES_EXT = [
        self::FOOD => 'food',
        self::TOURISM => 'tourism',
        self::ENVIRONMENT => 'environment',
        self::TOP => 'top',
    ];

    public const MODEL_KEY = 'category';
    public const MODEL_KEY_P = 'categories';
    public const MODEL = [
        parent::MODEL_CLASS => self::class,
        parent::GROUP => parent::NOTSET,
        parent::NAME => self::MODEL_KEY_P,
        parent::PRIMARY_KEY => parent::ID,
        parent::FOREIGN_KEY => self::MODEL_KEY . parent::ID_P,
        parent::ATTRIBUTES => [
            parent::ID => ['id'],
            parent::NAME => ['string'],
            TimeProps::CREATED => ['timestamp', 'nullable'],
            TimeProps::UPDATED => ['timestamp', 'nullable'],
        ],
        parent::CONSTRAINTS => [],
        parent::RELATIONS => [
            // Direct Relations ...
            UserCategory::class => parent::ONE_TO_MANY,
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
        parent::NAME,
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
    | Direct Relations ...
    |--------------------------------------------------------------------------
    */

    public function userCategory()
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

    public static function authCategories()
    {
        $userContext = collect(auth()->user()->load([
            UserCategory::name() . parent::SP . self::name(),
        ]));

        $categories = collect($userContext[UserCategory::MODEL_KEY] ?? [])
            ->mapWithKeys(function ($category) {
                return [$category[self::MODEL_KEY][parent::NAME] => !!$category[UserCategory::STATE]];
            })->toArray();

        return collect($categories);
    }

    public static function allCategories()
    {
        return self::get([self::NAME]);
    }
}
