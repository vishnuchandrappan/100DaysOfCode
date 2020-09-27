<?php

namespace App\Exceptions;

use App\Http\Responses\ErrorMessage;
use Exception;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use JWTAuth;

use Throwable;
use Illuminate\Support\Arr;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     */
    // public function report(Exception $exception)
    // {
    //     parent::report($exception);
    // }
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Throwable $exception)
    {
        if ($exception instanceof ValidationException) {
            return new ErrorMessage(Arr::collapse($exception->errors()), 422);
        }

        if ($exception instanceof ModelNotFoundException) {
            return new ErrorMessage("Please check your inputs");
        }

        if ($exception instanceof MethodNotAllowedHttpException) {
            return new ErrorMessage("Method not allowed");
        }

        if ($exception instanceof NotFoundHttpException) {
            return new ErrorMessage("API URL not found");
        }

        if ($exception instanceof UnauthorizedHttpException) {
            try {
                $user = JWTAuth::parseToken()->authenticate();
            } catch (Exception $e) {
                if ($e instanceof TokenInvalidException) {
                    return response()->json([
                        'status' => 'error',
                        'status_code' => 'invalid_token',
                        'message' => 'Unauthorized request. Please try again'
                    ], 401);
                } else if ($e instanceof TokenExpiredException) {
                    try {
                        return response()->json([
                            'status' => 'error',
                            'status_code' => 'token_expired',
                            'message' => 'Token has expired',
                            'token' => auth("api")->refresh()
                        ], 401);
                    } catch (\Exception $e) {
                        return response()->json([
                            'status' => 'error',
                            'status_code' => 'token_blacklisted',
                            'message' => 'Token has expired. Please log in and try again.'
                        ], 401);
                    }
                } else {
                    return response()->json([
                        'status' => 'error',
                        'status_code' => 'token_not_found',
                        'message' => 'Authorization token missing from your request'
                    ], 401);
                }
            }
        }

        return new ErrorMessage($exception->getMessage());
    }
}
