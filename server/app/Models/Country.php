<?php

namespace App\Models;

use App\Http\Models;
use App\Http\Props\ModelProps;
use App\Http\Props\TimeProps;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Country extends ModelProps
{
    use HasFactory;

    /*
    |--------------------------------------------------------------------------
    | Model Definition ...
    |--------------------------------------------------------------------------
    */

    public const CODE = 'code';
    public const GLOBAL = 'global';

    public const AE = 1;
    public const AL = 2;
    public const DZ = 3;
    public const AO = 4;
    public const AR = 5;
    public const AU = 6;
    public const AT = 7;
    public const AZ = 8;
    public const BH = 9;
    public const BD = 10;
    public const BB = 11;
    public const BY = 12;
    public const BE = 13;
    public const BM = 14;
    public const BT = 15;
    public const BO = 16;
    public const BA = 17;
    public const BR = 18;
    public const BN = 19;
    public const BG = 20;
    public const BF = 21;
    public const KH = 22;
    public const CM = 23;
    public const CA = 24;
    public const CV = 25;
    public const KY = 26;
    public const CL = 27;
    public const CN = 28;
    public const CO = 29;
    public const KM = 30;
    public const CR = 31;
    public const CI = 32;
    public const HR = 33;
    public const CU = 34;
    public const CY = 35;
    public const CZ = 36;
    public const DK = 37;
    public const DJ = 38;
    public const DM = 39;
    public const DO = 40;
    public const CD = 41;
    public const EC = 42;
    public const EG = 43;
    public const SV = 44;
    public const EE = 45;
    public const ET = 46;
    public const FJ = 47;
    public const FI = 48;
    public const FR = 49;
    public const PF = 50;
    public const GA = 51;
    public const GE = 52;
    public const DE = 53;
    public const GH = 54;
    public const GR = 55;
    public const GT = 56;
    public const GN = 57;
    public const HT = 58;
    public const HN = 59;
    public const HK = 60;
    public const HU = 61;
    public const IS = 62;
    public const IN = 63;
    public const ID = 64;
    public const IQ = 65;
    public const IE = 66;
    public const IL = 67;
    public const IT = 68;
    public const JM = 69;
    public const JP = 70;
    public const JO = 71;
    public const KZ = 72;
    public const KE = 73;
    public const KW = 74;
    public const KG = 75;
    public const LV = 76;
    public const LB = 77;
    public const LY = 78;
    public const LT = 79;
    public const LU = 80;
    public const MO = 81;
    public const MK = 82;
    public const MG = 83;
    public const MW = 84;
    public const MY = 85;
    public const MV = 86;
    public const ML = 87;
    public const MT = 88;
    public const MR = 89;
    public const MX = 90;
    public const MD = 91;
    public const MN = 92;
    public const ME = 93;
    public const MA = 94;
    public const MZ = 95;
    public const MM = 96;
    public const NA = 97;
    public const NP = 98;
    public const NL = 99;
    public const NZ = 100;
    public const NE = 101;
    public const NG = 102;
    public const KP = 103;
    public const NO = 104;
    public const OM = 105;
    public const PK = 106;
    public const PA = 107;
    public const PY = 108;
    public const PE = 109;
    public const PH = 110;
    public const PL = 111;
    public const PT = 112;
    public const PR = 113;
    public const RO = 114;
    public const RU = 115;
    public const RW = 116;
    public const WS = 117;
    public const SM = 118;
    public const SA = 119;
    public const SN = 120;
    public const RS = 121;
    public const SG = 122;
    public const SK = 123;
    public const SI = 124;
    public const SB = 125;
    public const SO = 126;
    public const ZA = 127;
    public const KR = 128;
    public const ES = 129;
    public const LK = 130;
    public const SD = 131;
    public const SE = 132;
    public const CH = 133;
    public const SY = 134;
    public const TW = 135;
    public const TJ = 136;
    public const TZ = 137;
    public const TH = 138;
    public const TO = 139;
    public const TN = 140;
    public const TR = 141;
    public const TM = 142;
    public const UG = 143;
    public const UA = 144;
    public const GB = 145;
    public const US = 146;
    public const UY = 147;
    public const UZ = 148;
    public const VE = 149;
    public const VI = 150;
    public const YE = 151;
    public const ZM = 152;
    public const ZW = 153;

    public const COUNTRIES = [
        self::AE => [self::CODE => 'ae', self::NAME => 'United Arab Emirates'],
        self::AL => [self::CODE => 'al', self::NAME => 'Albania'],
        self::DZ => [self::CODE => 'dz', self::NAME => 'Algeria'],
        self::AO => [self::CODE => 'ao', self::NAME => 'Angola'],
        self::AR => [self::CODE => 'ar', self::NAME => 'Argentina'],
        self::AU => [self::CODE => 'au', self::NAME => 'Australia'],
        self::AT => [self::CODE => 'at', self::NAME => 'Austria'],
        self::AZ => [self::CODE => 'az', self::NAME => 'Azerbaijan'],
        self::BH => [self::CODE => 'bh', self::NAME => 'Bahrain'],
        self::BD => [self::CODE => 'bd', self::NAME => 'Bangladesh'],
        self::BB => [self::CODE => 'bb', self::NAME => 'Barbados'],
        self::BY => [self::CODE => 'by', self::NAME => 'Belarus'],
        self::BE => [self::CODE => 'be', self::NAME => 'Belgium'],
        self::BM => [self::CODE => 'bm', self::NAME => 'Bermuda'],
        self::BT => [self::CODE => 'bt', self::NAME => 'Bhutan'],
        self::BO => [self::CODE => 'bo', self::NAME => 'Bolivia'],
        self::BA => [self::CODE => 'ba', self::NAME => 'Bosnia And Herzegovina'],
        self::BR => [self::CODE => 'br', self::NAME => 'Brazil'],
        self::BN => [self::CODE => 'bn', self::NAME => 'Brunei'],
        self::BG => [self::CODE => 'bg', self::NAME => 'Bulgaria'],
        self::BF => [self::CODE => 'bf', self::NAME => 'Burkina Faso'],
        self::KH => [self::CODE => 'kh', self::NAME => 'Cambodia'],
        self::CM => [self::CODE => 'cm', self::NAME => 'Cameroon'],
        self::CA => [self::CODE => 'ca', self::NAME => 'Canada'],
        self::CV => [self::CODE => 'cv', self::NAME => 'Cape Verde'],
        self::KY => [self::CODE => 'ky', self::NAME => 'Cayman Islands'],
        self::CL => [self::CODE => 'cl', self::NAME => 'Chile'],
        self::CN => [self::CODE => 'cn', self::NAME => 'China'],
        self::CO => [self::CODE => 'co', self::NAME => 'Colombia'],
        self::KM => [self::CODE => 'km', self::NAME => 'Comoros'],
        self::CR => [self::CODE => 'cr', self::NAME => 'Costa Rica'],
        self::CI => [self::CODE => 'ci', self::NAME => "Côte d'Ivoire"],
        self::HR => [self::CODE => 'hr', self::NAME => 'Croatia'],
        self::CU => [self::CODE => 'cu', self::NAME => 'Cuba'],
        self::CY => [self::CODE => 'cy', self::NAME => 'Cyprus'],
        self::CZ => [self::CODE => 'cz', self::NAME => 'Czech Republic'],
        self::DK => [self::CODE => 'dk', self::NAME => 'Denmark'],
        self::DJ => [self::CODE => 'dj', self::NAME => 'Djibouti'],
        self::DM => [self::CODE => 'dm', self::NAME => 'Dominica'],
        self::DO => [self::CODE => 'do', self::NAME => 'Dominican Republic'],
        self::CD => [self::CODE => 'cd', self::NAME => 'DR Congo'],
        self::EC => [self::CODE => 'ec', self::NAME => 'Ecuador'],
        self::EG => [self::CODE => 'eg', self::NAME => 'Egypt'],
        self::SV => [self::CODE => 'sv', self::NAME => 'El Salvador'],
        self::EE => [self::CODE => 'ee', self::NAME => 'Estonia'],
        self::ET => [self::CODE => 'et', self::NAME => 'Ethiopia'],
        self::FJ => [self::CODE => 'fj', self::NAME => 'Fiji'],
        self::FI => [self::CODE => 'fi', self::NAME => 'Finland'],
        self::FR => [self::CODE => 'fr', self::NAME => 'France'],
        self::PF => [self::CODE => 'pf', self::NAME => 'French Polynesia'],
        self::GA => [self::CODE => 'ga', self::NAME => 'Gabon'],
        self::GE => [self::CODE => 'ge', self::NAME => 'Georgia'],
        self::DE => [self::CODE => 'de', self::NAME => 'Germany'],
        self::GH => [self::CODE => 'gh', self::NAME => 'Ghana'],
        self::GR => [self::CODE => 'gr', self::NAME => 'Greece'],
        self::GT => [self::CODE => 'gt', self::NAME => 'Guatemala'],
        self::GN => [self::CODE => 'gn', self::NAME => 'Guinea'],
        self::HT => [self::CODE => 'ht', self::NAME => 'Haiti'],
        self::HN => [self::CODE => 'hn', self::NAME => 'Honduras'],
        self::HK => [self::CODE => 'hk', self::NAME => 'Hong Kong'],
        self::HU => [self::CODE => 'hu', self::NAME => 'Hungary'],
        self::IS => [self::CODE => 'is', self::NAME => 'Iceland'],
        self::IN => [self::CODE => 'in', self::NAME => 'India'],
        self::ID => [self::CODE => 'id', self::NAME => 'Indonesia'],
        self::IQ => [self::CODE => 'iq', self::NAME => 'Iraq'],
        self::IE => [self::CODE => 'ie', self::NAME => 'Ireland'],
        self::IL => [self::CODE => 'il', self::NAME => 'Israel'],
        self::IT => [self::CODE => 'it', self::NAME => 'Italy'],
        self::JM => [self::CODE => 'jm', self::NAME => 'Jamaica'],
        self::JP => [self::CODE => 'jp', self::NAME => 'Japan'],
        self::JO => [self::CODE => 'jo', self::NAME => 'Jordan'],
        self::KZ => [self::CODE => 'kz', self::NAME => 'Kazakhstan'],
        self::KE => [self::CODE => 'ke', self::NAME => 'Kenya'],
        self::KW => [self::CODE => 'kw', self::NAME => 'Kuwait'],
        self::KG => [self::CODE => 'kg', self::NAME => 'Kyrgyzstan'],
        self::LV => [self::CODE => 'lv', self::NAME => 'Latvia'],
        self::LB => [self::CODE => 'lb', self::NAME => 'Lebanon'],
        self::LY => [self::CODE => 'ly', self::NAME => 'Libya'],
        self::LT => [self::CODE => 'lt', self::NAME => 'Lithuania'],
        self::LU => [self::CODE => 'lu', self::NAME => 'Luxembourg'],
        self::MO => [self::CODE => 'mo', self::NAME => 'Macau'],
        self::MK => [self::CODE => 'mk', self::NAME => 'Macedonia'],
        self::MG => [self::CODE => 'mg', self::NAME => 'Madagascar'],
        self::MW => [self::CODE => 'mw', self::NAME => 'Malawi'],
        self::MY => [self::CODE => 'my', self::NAME => 'Malaysia'],
        self::MV => [self::CODE => 'mv', self::NAME => 'Maldives'],
        self::ML => [self::CODE => 'ml', self::NAME => 'Mali'],
        self::MT => [self::CODE => 'mt', self::NAME => 'Malta'],
        self::MR => [self::CODE => 'mr', self::NAME => 'Mauritania'],
        self::MX => [self::CODE => 'mx', self::NAME => 'Mexico'],
        self::MD => [self::CODE => 'md', self::NAME => 'Moldova'],
        self::MN => [self::CODE => 'mn', self::NAME => 'Mongolia'],
        self::ME => [self::CODE => 'me', self::NAME => 'Montenegro'],
        self::MA => [self::CODE => 'ma', self::NAME => 'Morocco'],
        self::MZ => [self::CODE => 'mz', self::NAME => 'Mozambique'],
        self::MM => [self::CODE => 'mm', self::NAME => 'Myanmar'],
        self::NA => [self::CODE => 'na', self::NAME => 'Namibia'],
        self::NP => [self::CODE => 'np', self::NAME => 'Nepal'],
        self::NL => [self::CODE => 'nl', self::NAME => 'Netherlands'],
        self::NZ => [self::CODE => 'nz', self::NAME => 'New Zealand'],
        self::NE => [self::CODE => 'ne', self::NAME => 'Niger'],
        self::NG => [self::CODE => 'ng', self::NAME => 'Nigeria'],
        self::KP => [self::CODE => 'kp', self::NAME => 'North Korea'],
        self::NO => [self::CODE => 'no', self::NAME => 'Norway'],
        self::OM => [self::CODE => 'om', self::NAME => 'Oman'],
        self::PK => [self::CODE => 'pk', self::NAME => 'Pakistan'],
        self::PA => [self::CODE => 'pa', self::NAME => 'Panama'],
        self::PY => [self::CODE => 'py', self::NAME => 'Paraguay'],
        self::PE => [self::CODE => 'pe', self::NAME => 'Peru'],
        self::PH => [self::CODE => 'ph', self::NAME => 'Philippines'],
        self::PL => [self::CODE => 'pl', self::NAME => 'Poland'],
        self::PT => [self::CODE => 'pt', self::NAME => 'Portugal'],
        self::PR => [self::CODE => 'pr', self::NAME => 'Puerto Rico'],
        self::RO => [self::CODE => 'ro', self::NAME => 'Romania'],
        self::RU => [self::CODE => 'ru', self::NAME => 'Russia'],
        self::RW => [self::CODE => 'rw', self::NAME => 'Rwanda'],
        self::WS => [self::CODE => 'ws', self::NAME => 'Samoa'],
        self::SM => [self::CODE => 'sm', self::NAME => 'San Marino'],
        self::SA => [self::CODE => 'sa', self::NAME => 'Saudi Arabia'],
        self::SN => [self::CODE => 'sn', self::NAME => 'Senegal'],
        self::RS => [self::CODE => 'rs', self::NAME => 'Serbia'],
        self::SG => [self::CODE => 'sg', self::NAME => 'Singapore'],
        self::SK => [self::CODE => 'sk', self::NAME => 'Slovakia'],
        self::SI => [self::CODE => 'si', self::NAME => 'Slovenia'],
        self::SB => [self::CODE => 'sb', self::NAME => 'Solomon Islands'],
        self::SO => [self::CODE => 'so', self::NAME => 'Somalia'],
        self::ZA => [self::CODE => 'za', self::NAME => 'South Africa'],
        self::KR => [self::CODE => 'kr', self::NAME => 'South Korea'],
        self::ES => [self::CODE => 'es', self::NAME => 'Spain'],
        self::LK => [self::CODE => 'lk', self::NAME => 'Sri Lanka'],
        self::SD => [self::CODE => 'sd', self::NAME => 'Sudan'],
        self::SE => [self::CODE => 'se', self::NAME => 'Sweden'],
        self::CH => [self::CODE => 'ch', self::NAME => 'Switzerland'],
        self::SY => [self::CODE => 'sy', self::NAME => 'Syria'],
        self::TW => [self::CODE => 'tw', self::NAME => 'Taiwan'],
        self::TJ => [self::CODE => 'tj', self::NAME => 'Tajikistan'],
        self::TZ => [self::CODE => 'tz', self::NAME => 'Tanzania'],
        self::TH => [self::CODE => 'th', self::NAME => 'Thailand'],
        self::TO => [self::CODE => 'to', self::NAME => 'Tonga'],
        self::TN => [self::CODE => 'tn', self::NAME => 'Tunisia'],
        self::TR => [self::CODE => 'tr', self::NAME => 'Turkey'],
        self::TM => [self::CODE => 'tm', self::NAME => 'Turkmenistan'],
        self::UG => [self::CODE => 'ug', self::NAME => 'Uganda'],
        self::UA => [self::CODE => 'ua', self::NAME => 'Ukraine'],
        self::GB => [self::CODE => 'gb', self::NAME => 'United Kingdom'],
        self::US => [self::CODE => 'us', self::NAME => 'United States'],
        self::UY => [self::CODE => 'uy', self::NAME => 'Uruguay'],
        self::UZ => [self::CODE => 'uz', self::NAME => 'Uzbekistan'],
        self::VE => [self::CODE => 've', self::NAME => 'Venezuela'],
        self::VI => [self::CODE => 'vi', self::NAME => 'Virgin Islands'],
        self::YE => [self::CODE => 'ye', self::NAME => 'Yemen'],
        self::ZM => [self::CODE => 'zm', self::NAME => 'Zambia'],
        self::ZW => [self::CODE => 'zw', self::NAME => 'Zimbabwe'],
    ];

    public const MODEL_KEY = 'country';
    public const MODEL_KEY_P = 'countries';
    public const MODEL = [
        parent::MODEL_CLASS => self::class,
        parent::GROUP => parent::NOTSET,
        parent::NAME => self::MODEL_KEY_P,
        parent::PRIMARY_KEY => parent::ID,
        parent::FOREIGN_KEY => self::MODEL_KEY . parent::ID_P,
        parent::ATTRIBUTES => [
            parent::ID => ['id'],
            self::CODE => ['string'],
            parent::NAME => ['string'],
            TimeProps::CREATED => ['timestamp', 'nullable'],
            TimeProps::UPDATED => ['timestamp', 'nullable'],
        ],
        parent::CONSTRAINTS => [],
        parent::RELATIONS => [
            // Direct Relations ...
            User::class => parent::ONE_TO_MANY,
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
        self::CODE,
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

    public function user()
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

    public static function defaultCountry()
    {
        return [
            Country::ID => null,
            Country::CODE => Country::GLOBAL,
            Country::NAME => ucFirst(Country::GLOBAL),
        ];
    }

    public static function authCountry()
    {
        $userContext = collect(auth()->user()->load([
            UserCountry::name() . parent::SP . self::name(),
        ]));

        $country = $userContext[UserCountry::MODEL_KEY][self::MODEL_KEY] ?? null;
        if (empty($country)){
            $country = self::defaultCountry();
        }

        return collect($country)->only([self::CODE, self::NAME]);
    }

    public static function allCountries()
    {
        return self::get([self::CODE, self::NAME]);
    }
}
