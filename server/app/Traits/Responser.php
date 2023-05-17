<?php

namespace App\Traits;

use App\Http\Routes;
use App\Http\Messages;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/*
|--------------------------------------------------------------------------
| Responser Trait
|--------------------------------------------------------------------------
|
| This trait will be used for any response we sent to clients.
|
*/

trait Responser
{
    /**
     * Return a generic JSON response.
     *
     * @param  string $message
     * @param  mixed $data
     * @param  array $headers
     * @param  int $status
     * @return \Illuminate\Http\JsonResponse
     */
    private function respond(string $message, mixed $data, array $headers, int $status)
    {
        $responseData = [];
        if (!empty($message)) {
            $responseData += ['message' => $message];
        }
        if (!empty($data)) {
            $responseData += $data;
        }
        $responseStatus = $status;
        $responseHeaders = ['Content-Type' => 'application/json'];
        foreach ($headers as $header => $value) {
            $responseHeaders += [$header => $value];
        }
        $responseOptions = JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES;

        return response()->json($responseData, $responseStatus, $responseHeaders, $responseOptions);
    }

    /**
     * Return validated outgoing data.
     *
     * @param  array $props
     * @param  mixed $data
     * @param  string $responseType
     * @param  string $resourceMethod
     * @return \Illuminate\Http\JsonResponse
     */
    private function validateThenRespond(array $props, mixed $data, string $responseType, string $resourceMethod)
    {
        $fnValidation = function() use ($props, &$data, $responseType, $resourceMethod) {
            $violations = [];
            $attributes = $props[Routes::ATTRIBUTES][Routes::RESPONSE];
            if ($props[Routes::METHOD] === Routes::RESOURCE) {
                if (!empty($resourceMethod) && collect($attributes)->has($resourceMethod)) {
                    $attributes = $attributes[$resourceMethod];
                }
            }
            foreach (collect($attributes)->keys() as $field) {
                $subject = (function() use ($data, $field) {
                    $value = collect($data)->has($field) ? $data[$field] : null;
                    return (gettype($value) !== 'array' || sizeof($value) !== 1) ? $value : collect($value)->first();
                })();
                $fnIsOfType = function($var_type) use ($subject) {
                    return gettype($subject) === $var_type;
                };
                $fnHasRule = function($rule) use ($attributes, $field) {
                    return collect($attributes[$field])->contains($rule);
                };
                $fnTypeMismatched = function(&$dataType) use ($fnIsOfType, $attributes, $field) {
                    $dataTypes = ['boolean', 'integer', 'double', 'string', 'array', 'object', 'resource', 'mixed', 'NULL', 'unknown type'];
                    $dataType = collect(array_diff($dataTypes, array_diff($dataTypes, $attributes[$field])))->values()->toArray();
                    if (!empty($dataType)) {
                        foreach ($dataType as $type) {
                            if ($fnIsOfType($type)) {
                                return false;
                            }
                        }
                        return true;
                    }
                    return false;
                };
                $fnIsMessageButInvalid = function() use ($fnIsOfType, $fnHasRule, $subject, &$data, $field) {
                    if ($fnIsOfType('string') && $fnHasRule('message')) {
                        $message = Messages::get($subject);
                        if (!empty($message)) {
                            $data[$field] = [$message];
                        } else {
                            return true;
                        }
                    }
                    return false;
                };
                $fnResponseTypeInvalid = function(&$ruleResponseType) use ($responseType, $attributes, $field) {
                    $responseTypes = ['error', 'invalid', 'success', 'valid'];
                    $ruleResponseType = array_intersect($responseTypes, $attributes[$field]);
                    if (collect($ruleResponseType)->count() === 0) {
                        return false;
                    }
                    if (collect($ruleResponseType)->contains($responseType)) {
                        return false;
                    }

                    $ruleResponseType = collect($ruleResponseType)->first();
                    return true;
                };
                $fnWriteViolation = function($extension, $violation) use ($field, &$violations) {
                    $violations += [$field . '.' . $extension => [$violation]];
                };
                if (empty($subject)) {
                    if ($fnHasRule('required')) {
                        $fnWriteViolation('required', Messages::get('#rsp:required'));
                    }
                } else {
                    $dataType = [];
                    if ($fnTypeMismatched($dataType)) {
                        $types = implode("|", $dataType);
                        $fnWriteViolation($types, Messages::get('#rsp:type', [':type' => $types]));
                    }
                    if ($fnIsMessageButInvalid()) {
                        $fnWriteViolation('message', Messages::get('#rsp:transform', [':field' => $field]));
                    }
                    $ruleResponseType = $responseType;
                    if ($fnResponseTypeInvalid($ruleResponseType)) {
                        $fnWriteViolation($ruleResponseType, Messages::get('#rsp:status', [':field' => $field]));
                    }
                }
            }
            $messages = $props[Routes::MESSAGES][Routes::RESPONSE];
            if (!empty($violations)) {
                foreach (collect($violations)->keys() as $field) {
                    if (collect($messages)->has($field)) {
                        $violations[$field] = [$messages[$field]];
                    }
                }
            }
            return $violations;
        };

        switch ($responseType) {
            case 'error':
                $messageKey = '#msg:error';
                $dataField = 'errors';
                $status =  Response::HTTP_BAD_REQUEST;
                break;
            case 'invalid':
                $messageKey = '#msg:invalid';
                $dataField = 'errors';
                $status =  Response::HTTP_BAD_REQUEST;
                break;
            case 'success':
                $messageKey = '#msg:success';
                $dataField = 'data';
                $status = Response::HTTP_OK;
                break;
            case 'valid':
                $messageKey = '#msg:valid';
                $dataField = 'data';
                $status = Response::HTTP_OK;
                break;
            default:
                $messageKey = '';
                $dataField = 'data';
                $status = Response::HTTP_FORBIDDEN;
                break;
        }

        if (!empty($props)) {
            $violations = $fnValidation();
            if (!empty($violations)) {
                return $this->respond(Messages::get('#rsp:violations'), ['errors' => $violations], [], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        }

        return $this->respond(Messages::get($messageKey), [$dataField => $data], [], $status);
    }

    /**
     * Return a forbidden JSON response.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function forbidden()
    {
        return $this->respond(Messages::get('#msg:forbidden'), null, [], Response::HTTP_FORBIDDEN);
    }

    /**
     * Throws a not-found-resource exception.
     *
     * @param  mixed|null $resource
     * @return \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    protected function resourceNotFound(mixed $resource = null)
    {
        throw new NotFoundHttpException(Messages::get('#msg:not-found'), null, Response::HTTP_NOT_FOUND, []);
    }

    /**
     * Return an error JSON response.
     *
     * @param  array $props
     * @param  mixed|null $data
     * @param  string $resourceMethod
     * @return \Illuminate\Http\JsonResponse
     */
    protected function error(array $props = [], mixed $data = null, string $resourceMethod = '')
    {
        return $this->validateThenRespond($props, $data, 'error', $resourceMethod);
    }

    /**
     * Return an invalid JSON response.
     *
     * @param  array $props
     * @param  mixed|null $data
     * @param  string $resourceMethod
     * @return \Illuminate\Http\JsonResponse
     */
    protected function invalid(array $props = [], mixed $data = null, string $resourceMethod = '')
    {
        return $this->validateThenRespond($props, $data, 'invalid', $resourceMethod);
    }

    /**
     * Return a success JSON response.
     *
     * @param  array $props
     * @param  mixed|null $data
     * @param  string $resourceMethod
     * @return \Illuminate\Http\JsonResponse
     */
    protected function success(array $props = [], mixed $data = null, string $resourceMethod = '')
    {
        return $this->validateThenRespond($props, $data, 'success', $resourceMethod);
    }

    /**
     * Return a valid JSON response.
     *
     * @param  array $props
     * @param  mixed|null $data
     * @param  string $resourceMethod
     * @return \Illuminate\Http\JsonResponse
     */
    protected function valid(array $props = [], mixed $data = null, string $resourceMethod = '')
    {
        return $this->validateThenRespond($props, $data, 'valid', $resourceMethod);
    }

    /**
     * Return a dump JSON response.
     *
     * @param  mixed|null $data
     * @return \Illuminate\Http\JsonResponse
     */
    protected function dump(mixed $data)
    {
        return $this->respond('', ['data' => $data], [], Response::HTTP_OK);
    }

    /**
     * Return a view with JSON response.
     *
     * @param  string|array $view
     * @param  string $title
     * @param  mixed $data
     * @return \Illuminate\Http\Response
     */
    protected function view(string|array $view, string $title, mixed $data)
    {
        return response()->view($view, [
            'title' => $title,
            'data' => $data,
            Response::HTTP_OK, ['Content-Type' => 'text/html; charset=UTF-8',]
        ]);
    }

    /**
     * Return a redirect route response.
     *
     * @param  string $route
     * @param  mixed $parameters
     * @param  int $status
     * @param  array $headers
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function redirect(string $route, mixed $parameters = [], int $status = 302, array $headers = [])
    {
        return redirect()->route($route, $parameters, $status, $headers);
    }
}
