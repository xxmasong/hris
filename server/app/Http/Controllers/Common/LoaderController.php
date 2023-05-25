<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Http\Gates;
use App\Http\Routes;
use App\Http\Models;
use App\Http\Messages;
use App\Traits\Responser;
use Illuminate\Http\Request;

class LoaderController extends Controller
{
    use Responser;

    public const LOAD_PROPS = 'propsLoader';
    public function propsLoader(Request $request)
    {
        if (config('common.loader')) {
            if ($request['key'] === config('common.key')) {
                if ($request->isMethod(Routes::GET)) {
                    $token = $request->input('_token') ?: $request->header('X-CSRF-TOKEN');
                    if (!$token && $header = $request->header('X-XSRF-TOKEN')) {
                        $token = $this->encrypter->decrypt($header);
                    }

                    return $this->dump(empty($token) ? csrf_token() : $token);
                }
                if ($request->isMethod(Routes::POST)) {
                    return $this->dump([
                        Models::TABLE => Models::getModelTable(),
                        Routes::TABLE => Routes::getRouteTable(),
                        Messages::TABLE => Messages::getMessageTable(),
                    ]);
                }
            }
        }

        return $this->forbidden();
    }
}
