<?php

namespace App\Http\Props;

interface ModelPropsInterface
{
    public const NOTSET = '';
    public const SP = '.';
    public const ID = 'id';
    public const ID_P = '_id';

    public const MODEL_CLASS = 'class';
    public const GROUP = 'group';
    public const NAME = 'name';
    public const PRIMARY_KEY = 'primary_key';
    public const FOREIGN_KEY = 'foreign_key';
    public const ATTRIBUTES = 'attributes';
    public const CONSTRAINTS = 'constraints';
    public const RELATIONS = 'relations';
    public const RELATIONSHIP = 'relationship';
    public const PARAMETERS = 'parameters';

    public const CONST_MODEL = 'MODEL';
    public const CONST_FOREIGN_ID = 'FOREIGN_ID';
    public const CONST_FOREIGN_NAME = 'FOREIGN_NAME';

    public const REFERENCES = 'references';
    public const ACTIONS = 'actions';
    public const CASCADE_ON_UPDATE = 'onUpdate:cascade';
    public const CASCADE_ON_DELETE = 'onDelete:cascade';
    public const RESTRICT_ON_UPDATE = 'onUpdate:restrict';
    public const RESTRICT_ON_DELETE = 'onDelete:restrict';
    public const NULL_ON_DELETE = 'onDelete:set null';
    public const NULL_ON_UPDATE = 'onUpdate:set null';

    public const ONE_TO_ONE = '1:1';
    public const ONE_TO_MANY = '1:M';
    public const ONE_TO_ONE_INVERSE = '1::1';
    public const ONE_TO_MANY_INVERSE = '1::M';
    public const MANY_TO_MANY = 'M::N';

    public const PK_TYPE = 'int';

    public const COLUMN_TYPES = [
        'bigIncrements' => ['column'],
        'bigInteger' => ['column', '?autoIncrement', '?unsigned'],
        'binary' => ['column'],
        'boolean' => ['column'],
        'char' => ['column', '?length'],
        'date' => ['column'],
        'dateTime' => ['column', '?precision'],
        'decimal' => ['column', '?total', '?places', '?unsigned'],
        'double' => ['column', '?total', '?places'],
        'enum' => ['column', 'allowed'],
        'float' => ['column', '?total', '?places', '?unsigned'],
        'foreignId' => ['column'],
        'foreignIdFor' => ['model', '?column'],
        'foreignUuid' => ['column'],
        'id' => ['?column'],
        'increments' => ['column'],
        'integer' => ['column', '?autoIncrement', '?unsigned'],
        'ipAddress' => ['column'],
        'json' => ['column'],
        'jsonb' => ['column'],
        'longText' => ['column'],
        'macAddress' => ['column'],
        'mediumInteger' => ['column', '?autoIncrement', '?unsigned'],
        'mediumText' => ['column'],
        'morphs' => ['name', '?indexName'],
        'nullableTimestamps' => ['?precision'],
        'smallInteger' => ['column', '?autoIncrement', '?unsigned'],
        'tinyInteger' => ['column', '?autoIncrement', '?unsigned'],
        'set' => ['column', 'allowed'],
        'softDeletes' => ['?column', '?precision'],
        'string' => ['column', '?length'],
        'text' => ['column'],
        'time' => ['column', '?precision'],
        'timestamp' => ['column', '?precision'],
        'timestamps' => ['?precision'],
        'rememberToken' => [],
        'uuid' => ['column'],
        'year' => ['column'],
    ];

    public const COLUMN_MODIFIERS = [
        'after' => ['column', '?callback'],
        'always' => [],
        'autoIncrement' => [],
        'change' => [],
        'charset' => ['charset'],
        'collation' => ['collation'],
        'constrained' => ['?table', '?column'],
        'create' => [],
        'comment' => ['comment'],
        'default' => ['value'],
        'deferrable' => ['value'],
        'drop' => [],
        'dropConstrainedForeignId' => ['column'],
        'dropForeign' => ['index'],
        'dropIfExists' => [],
        'dropIndex' => ['index'],
        'dropColumn' => ['columns'],
        'dropMorphs' => ['name', '?indexName'],
        'dropPrimary' => ['?index'],
        'dropRememberToken' => [],
        'dropSoftDeletes' => ['?column'],
        'dropSpatialIndex' => ['index'],
        'dropTimestamps' => [],
        'dropUnique' => ['index'],
        'first' => [],
        'foreign' => ['columns', '?name'],
        'generatedAs' => ['?expression'],
        'index' => ['columns', '?name', '?algorithm'],
        'initiallyImmediate' => ['value'],
        'nullable' => ['?value'],
        'on' => ['table'],
        'onDelete' => ['action'],
        'onUpdate' => ['action'],
        'persisted' => [],
        'primary' => ['columns', '?name', '?algorithm'],
        'references' => ['columns'],
        'renameColumn' => ['from', 'to'],
        'renameIndex' => ['from', 'to'],
        'rename' => ['to'],
        'spatialIndex' => [],
        'startingValue' => ['startingValue'],
        'storedAs' => ['expression'],
        'temporary' => [],
        'type' => ['type'],
        'unique' => ['columns', '?name', '?algorithm'],
        'unsigned' => [],
        'useCurrent' => [],
        'useCurrentOnUpdate' => [],
        'virtualAs' => ['expression'],
    ];

    public const TABLE = 'MODEL_TABLE';
    public const FACTORY = 'factory';

    public const PATH = "App\\Models\\";
}
