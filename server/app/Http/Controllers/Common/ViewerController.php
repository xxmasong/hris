<?php

namespace App\Http\Controllers\Common;

use App\Http\Controllers\Controller;
use App\Http\Gates;
use App\Http\Routes;
use App\Http\Models;
use App\Http\Messages;
use App\Traits\Responser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ViewerController extends Controller
{
    use Responser;

    private const VIEWER = 'jsonviewer';
    private const DATABASE = 'database';

    public const VIEW_TELESCOPE = 'telescopeRedirect';
    public function telescopeRedirect()
    {
        if (App::environment('local')) {
            return $this->redirect('telescope');
        }

        return $this->view('welcome', config('app.name'), []);
    }

    public const VIEW_MODELS = 'modelsViewer';
    public function modelsViewer(Request $request)
    {
        if (config('common.viewer')) {
            if ($request['key'] === config('common.key')) {
                return $this->view(self::VIEWER, Models::TABLE, collect(Models::getModelTable())->toJson());
            }
        }

        return $this->forbidden();
    }

    public const VIEW_ROUTES = 'routesViewer';
    public function routesViewer(Request $request)
    {
        if (config('common.viewer')) {
            if ($request['key'] === config('common.key')) {
                return $this->view(self::VIEWER, Routes::TABLE, collect(Routes::getRouteTable())->toJson());
            }
        }

        return $this->forbidden();
    }

    public const VIEW_MESSAGES = 'messagesViewer';
    public function messagesViewer(Request $request)
    {
        if (config('common.viewer')) {
            if ($request['key'] === config('common.key')) {
                return $this->view(self::VIEWER, Messages::TABLE, collect(Messages::getMessageTable())->toJson());
            }
        }

        return $this->forbidden();
    }

    public const VIEW_DATABASE = 'dbViewer';
    public function dbViewer(Request $request)
    {
        if (config('common.viewer')) {
            $connection = config('database.connections.' . config('database.default'));
            if ($request['key'] === config('common.key')) {
                if ($request->isMethod(Routes::GET)) {
                    return $this->view(self::DATABASE, strtoupper($connection['database']), [
                        'query' => '',
                        'message' => '',
                        'resultset' => [],
                    ]);
                }
                if ($request->isMethod(Routes::POST)) {
                    $conn = new \mysqli($connection['host'], $connection['username'], $connection['password'], $connection['database'], $connection['port'], null);
                    if ($conn->connect_error) {
                        $error = 'Connect failed: [' . $conn->connect_errno . '] ' . $conn->connect_error;
                    }
                    $msc = microtime(true);
                    $result = $conn->query($request['rawDBQuery']);
                    $tdiff = microtime(true) - $msc;
                    if (!$conn->errno) {
                        if (gettype($result) === 'boolean' && $result === TRUE) {
                            $success = 'Query OK, successfull! (' . $tdiff . ' sec)';
                        } else {
                            $success = 'Query OK, ' . $result->num_rows . ' row(s) in set and / or affected (' . number_format(1000 * $tdiff, 2) . ' ms).';
                            $resultset = $result->fetch_all(MYSQLI_ASSOC);
                            $result->free_result();
                        }
                    } else {
                        $error = 'SQL ERROR [' . $conn->errno . ']: ' . mysqli_error($conn);
                    }
                    $conn->close();
                    if (isset($error)) {
                        return $this->view(self::DATABASE, strtoupper($connection['database']), [
                            'query' => $request['rawDBQuery'],
                            'message' => $error,
                            'resultset' => [],
                        ]);
                    }

                    return $this->view(self::DATABASE, strtoupper($connection['database']), [
                        'query' => $request['rawDBQuery'],
                        'message' => $success,
                        'resultset' => $resultset ?? [],
                    ]);
                }
            }
        }

        return $this->forbidden();
    }
}
