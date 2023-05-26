<?php

namespace App\Http\Controllers;

use App\Http\Messages;
use App\Http\Props\TimeProps;
use App\Http\Routes;
use App\Traits\Responser;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Symfony\Component\HttpFoundation\Response;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Responser;

    /**
     * Transfer data from request for creating or updating resource in storage.
     *
     * @param  object  $model
     * @param  array  $validData
     * @param  array|null  $exceptKeys
     * @param  array|null  $onlyKeys
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function dto(object $model, array $validData, array $exceptKeys = [], array $onlyKeys = [])
    {
        foreach ($validData as $key => $data) {
            if (!empty($onlyKeys)) {
                if (!collect($onlyKeys)->contains($key)) {
                    continue;
                }
            }
            if (!empty($exceptKeys)) {
                if (collect($exceptKeys)->contains($key)) {
                    continue;
                }
            }
            $model[$key] = $data;
        }

        return $model;
    }

    /**
     * Blocks resource from executing request.
     *
     * @return \Illuminate\Http\Response
     */
    public function blockedResource()
    {
        return $this->forbidden();
    }

    /**
     * Display a listing of either all or specific resource.
     *
     * @param  object  $model
     * @param  array|null  $view
     * @param  array  $props
     * @param  bool  $index
     * @return \Illuminate\Http\Response
     */
    public function displayResource(object $model, array $view, array $props, bool $index = true)
    {
        if (collect($model)->isEmpty()) {
            return $this->success($props, [
                Messages::REASON => ['#res:no-content'],
            ])->setStatusCode(Response::HTTP_RESET_CONTENT);
        }
        if ($index) {
            $model_key = collect($model)->first();
            return $this->success($props, [
                $model_key::MODEL_KEY_P => $model,
            ],  Routes::INDEX);
        }

        return $this->success($props, [
            $model::MODEL_KEY => $model,
        ],  Routes::SHOW);
    }

    /**
     * Saves the specified resource in storage.
     *
     * @param  object  $model
     * @param  array  $save
     * @param  array  $props
     * @param  bool  $new
     * @param  bool  $skipEmpty
     * @param  bool  $skipExist
     * @return \Illuminate\Http\Response
     */
    private function saveResource(object $model, array $save, array $props, bool $new = true, bool $skipEmpty = false, bool $skipExist = false)
    {
        unset($save[TimeProps::CREATED]);
        unset($save[TimeProps::UPDATED]);

        if (!$skipEmpty) {
            if (empty($save)) {
                return $this->error($props, [
                    Messages::REASON => ['#res:no-request'],
                ], Routes::UPDATE)->setStatusCode(Response::HTTP_UNPROCESSABLE_ENTITY);
            }
        }
        if (!$skipExist) {
            $exists = $model::when(
                collect($model)->has($model::ID),
                function ($query) use ($model) {
                    $query->whereNotIn($model::ID, [$model[$model::ID]]);
                },
            )->where(function ($query) use ($model, $save) {
                foreach ($save as $key => $data) {
                    if ($key !== $model::ID && !collect([TimeProps::CREATED, TimeProps::UPDATED, TimeProps::VERIFIED])->contains($key)) {
                        $query->where($key, $data);
                    }
                }
            })->get()->toArray();
            if (!empty($exists)) {
                $model[$model::ID] = collect($exists)->first()[$model::ID];
                return $this->error($props, [
                    Messages::REASON => ['#res:existed'],
                ], Routes::UPDATE)->setStatusCode(Response::HTTP_CONFLICT);
            }
        }
        $this->dto($model, $save)->save();
        if ($new) {
            return $this->success($props, [
                Messages::REASON => ['#res:created'],
                $model::MODEL_KEY => $model,
            ], Routes::STORE)->setStatusCode(Response::HTTP_CREATED);
        }

        return $this->success($props, [
            Messages::REASON => ['#res:updated'],
            $model::MODEL_KEY => $model,
        ], Routes::UPDATE);
    }

    /**
     * Test saving the specified resource in storage.
     *
     * @param  object  $model
     * @param  array  $test
     * @param  array  $props
     * @param  bool  $new
     * @return int
     */
    public function testResource(object $model, array $test, bool $new = true)
    {
        if (empty($test)) {
            return Response::HTTP_UNPROCESSABLE_ENTITY;
        }
        $exists = $model::when(
            collect($model)->has($model::ID),
            function ($query) use ($model) {
                $query->whereNotIn($model::ID, [$model[$model::ID]]);
            },
        )->where(function ($query) use ($model, $test) {
            foreach ($test as $key => $data) {
                if ($model::ID !== $key) {
                    $query->where($key, $data);
                }
            }
        })->get()->toArray();
        if (!empty($exists)) {
            $model[$model::ID] = collect($exists)->first()[$model::ID];
            return Response::HTTP_CONFLICT;
        }
        if ($new) {
            return Response::HTTP_CREATED;
        }

        return Response::HTTP_OK;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  object  $model
     * @param  array  $store
     * @param  array  $props
     * @param  bool  $skipEmpty
     * @param  bool  $skipExist
     * @return \Illuminate\Http\Response
     */
    public function newResource(object $model, array $store, array $props, bool $skipEmpty = false, bool $skipExist = false)
    {
        return $this->saveResource($model, $store, $props, true, $skipEmpty, $skipExist);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  object  $model
     * @param  array  $update
     * @param  array  $props
     * @param  bool  $skipEmpty
     * @param  bool  $skipExist
     * @return \Illuminate\Http\Response
     */
    public function updateResource(object $model, array $update, array $props, bool $skipEmpty = false, bool $skipExist = false)
    {
        return $this->saveResource($model, $update, $props, false, $skipEmpty, $skipExist);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  object  $query
     * @param  array  $delete
     * @param  array  $props
     * @param  bool  $skipExclude
     * @return \Illuminate\Http\Response
     */
    public function removeResource(object $query, array $delete, array $props, bool $skipExclude = false)
    {
        $model = $query->get();
        if (empty($model->toArray())) {
            return $this->error($props, [
                Messages::REASON => ['#res:nondeletable'],
            ], Routes::DESTROY)->setStatusCode(Response::HTTP_NOT_FOUND);
        }
        $model_instance = collect($model)->first();
        if (!$skipExclude) {
            $exclude = array_values(array_diff($delete, $model->pluck($model_instance::ID)->toArray()));
            if (!empty($exclude)) {
                return $this->error($props, [
                    Messages::REASON => ['#res:not-acceptable'],
                ], Routes::DESTROY)->setStatusCode(Response::HTTP_NOT_ACCEPTABLE);
            }
        }
        $query->delete();

        return $this->success($props, [
            Messages::REASON => ['#res:deleted'],
        ], Routes::DESTROY);
    }
}
