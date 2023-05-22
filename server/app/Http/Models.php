<?php

namespace App\Http;

use App\Http\Tables\ModelsTable;
use Database\Factories\ModelsFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Models extends ModelsTable
{
    private static ?array $modelTable = null;

    /**
     * Create new models instance.
     *
     * @return void
     */
    public function __construct()
    {
        $table = (new \ReflectionClass(self::class))->getConstant('TABLE');
        $table = (new \ReflectionClass(self::class))->getConstant($table);
        self::$modelTable = array();
        foreach ($table as $props) {
            self::$modelTable += [$props[parent::GROUP] . (!empty($props[parent::GROUP]) ? parent::SP : parent::NOTSET) . $props[parent::NAME] => $props];
        }
    }

    /**
     * Returns the model table or listing.
     *
     * @param  array  $exclude
     * @return array
     */
    public static function getModelTable(array $exclude = [])
    {
        if (!empty($exclude)) {
            $modifiedTable = self::$modelTable;
            foreach ($modifiedTable as &$props) {
                $excludes = array_intersect(array_keys($props), $exclude);
                foreach ($excludes as $reject) {
                    unset($props[$reject]);
                }
            }
            return $modifiedTable;
        }

        return self::$modelTable;
    }

    /**
     * Registers the column or attributes of a model table with attribute parameters.
     *
     * @param  \Illuminate\Database\Schema\Blueprint  $table
     * @param  array  $attributes
     * @param  array  $parameters
     */
    private static function registerColumns(Blueprint &$table, array $attributes, array $parameters)
    {
        foreach (collect($attributes)->keys() as $field) {
            $typeMethod = collect(array_intersect($attributes[$field], array_keys(parent::COLUMN_TYPES)))->first();
            $optionMethods = array_intersect($attributes[$field], array_keys(parent::COLUMN_MODIFIERS));
            $fnTransformArgs = function (string $method, array $definedArgs) use ($parameters, $field) {
                $args = array();
                if (collect($definedArgs)->first() === 'column') {
                    $args += [$field];
                }
                if (collect($parameters)->has($field . parent::SP . $method)) {
                    $args += $parameters[$field . parent::SP . $method];
                }
                return $args;
            };
            $fnDefineArgs = function (string &$method) use ($fnTransformArgs, $typeMethod, $optionMethods) {
                $arguments = array();
                if ($typeMethod === $method) {
                    $arguments = $fnTransformArgs($method, parent::COLUMN_TYPES[$method]);
                } else if (collect($optionMethods)->contains($method)) {
                    $arguments = $fnTransformArgs($method, parent::COLUMN_MODIFIERS[$method]);
                } else {
                    $method = parent::NOTSET;
                }
                return $arguments;
            };
            $fnDefineColumn = function (mixed $accessor, mixed $method, mixed $arguments) {
                if (!empty($method)) {
                    if (!empty($arguments)) {
                        return $accessor->{$method}(...$arguments);
                    }
                    return $accessor->{$method}();
                }
                return $accessor;
            };
            $accessor = $table;
            $arguments = $fnDefineArgs($typeMethod);
            $accessor = $fnDefineColumn($accessor, $typeMethod, $arguments);
            foreach ($optionMethods as &$method) {
                $arguments = $fnDefineArgs($method);
                $accessor = $fnDefineColumn($accessor, $method, $arguments);
            }
        }
    }

    /**
     * Creates new table in database.
     *
     * @param  array  $model
     * @param  bool  $dropIfExists
     */
    public static function createTable(array $model, bool $dropIfExists = false)
    {
        if (!empty($model)) {
            $name = $model[parent::NAME];
            if (Schema::hasTable($name) && $dropIfExists) {
                Schema::dropIfExists($name);
            }
            if (!Schema::hasTable($name)) {
                Schema::create($name, function (Blueprint $table) use ($model) {
                    self::registerColumns($table, $model[parent::ATTRIBUTES], $model[parent::PARAMETERS]);
                });
            }
        }
    }

    /**
     * Deletes foreign key contraints in the model table.
     *
     * @param  array  $model
     */
    public static function destroyTable(array $model)
    {
        if (!empty($model)) {
            Schema::dropIfExists($model[parent::NAME]);
        }
    }

    /**
     * Adds foreign key contraints in the model table.
     *
     * @param  array  $model
     */
    public static function addConstrains(array $model)
    {
        if (!empty($model)) {
            $name = $model[parent::NAME];
            if (Schema::hasTable($name)) {
                $constraints = $model[parent::CONSTRAINTS];
                Schema::enableForeignKeyConstraints();
                Schema::table($name, function (Blueprint $table) use ($name, $constraints) {
                    foreach (collect($constraints)->keys() as $field) {
                        $constraint = $constraints[$field];
                        $foreignTable = collect($constraint[parent::REFERENCES])->keys()->first();
                        $referenceId = $constraint[parent::REFERENCES][$foreignTable];
                        $column = $table->foreign($field, $name . '_' . $field)->references($referenceId)->on($foreignTable);
                        foreach ($constraint[parent::ACTIONS] as $action) {
                            switch ($action) {
                                case parent::CASCADE_ON_UPDATE:
                                    $column->cascadeOnUpdate();
                                    break;
                                case parent::CASCADE_ON_DELETE:
                                    $column->cascadeOnDelete();
                                    break;
                                case parent::RESTRICT_ON_UPDATE:
                                    $column->restrictOnUpdate();
                                    break;
                                case parent::RESTRICT_ON_DELETE:
                                    $column->restrictOnDelete();
                                    break;
                                case parent::NULL_ON_DELETE:
                                    $column->nullOnDelete();
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            }
        }
    }

    /**
     * Deletes foreign key contraints in the model table.
     *
     * @param  array  $model
     */
    public static function removeConstrains(array $model)
    {
        if (!empty($model)) {
            $name = $model[parent::NAME];
            if (Schema::hasTable($name)) {
                $constraints = $model[parent::CONSTRAINTS];
                Schema::table($name, function (Blueprint $table) use ($name, $constraints) {
                    foreach (collect($constraints)->keys() as $field) {
                        $table->dropForeign($name . '_' . $field);
                    }
                });
            }
        }
    }

    /**
     * Establishes relation from one model table to another.
     *
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @param  string  $methodNamedModelClass
     * @param  string  $referenceId
     */
    public static function establishRelation(Model &$model, string $methodNamedModelClass, string $referenceId = null)
    {
        if (!empty($model)) {
            if (!str_contains($methodNamedModelClass, parent::PATH)) {
                $methodNamedModelClass = parent::PATH . ucFirst($methodNamedModelClass);
            }
            $registeredRelations = ((new \ReflectionClass($model))->getConstant(parent::CONST_MODEL))[parent::RELATIONS];
            if (collect($registeredRelations)->has($methodNamedModelClass)) {
                $relationship = $registeredRelations[$methodNamedModelClass];
                switch ($relationship) {
                    case parent::ONE_TO_ONE:
                        return $model->hasOne($methodNamedModelClass, $referenceId ?? (new \ReflectionClass($model))->getConstant(parent::CONST_FOREIGN_ID));
                    case parent::ONE_TO_MANY:
                        return $model->hasMany($methodNamedModelClass, $referenceId ?? (new \ReflectionClass($model))->getConstant(parent::CONST_FOREIGN_ID));
                    case parent::ONE_TO_ONE_INVERSE:
                    case parent::ONE_TO_MANY_INVERSE:
                        return $model->belongsTo($methodNamedModelClass, $referenceId ?? (new \ReflectionClass($methodNamedModelClass))->getConstant(parent::CONST_FOREIGN_ID));
                    case parent::MANY_TO_MANY:
                        return $model->belongsToMany($methodNamedModelClass);
                    default:
                        break;
                }
            }
        }

        return $model;
    }

    /**
     * Generates factory data / sample entries for a model table.
     *
     * @param  array  $model
     */
    public static function seedTable(array $model)
    {
        if (!empty($model)) {
            $modelFactory = (new \ReflectionClass($model[parent::MODEL_CLASS]))->getMethod(parent::FACTORY)->invoke(null);
            (new \ReflectionClass($modelFactory))->getMethod(ModelsFactory::BUILD)->invoke($modelFactory, $modelFactory);
        }
    }
}
