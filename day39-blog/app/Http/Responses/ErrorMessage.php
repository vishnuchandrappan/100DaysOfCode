<?php

namespace App\Http\Responses;

use Illuminate\Contracts\Support\Responsable;

class ErrorMessage implements Responsable
{

  protected $msg, $error_code;

  public function __construct($msg, $error_code = 400)
  {
    if (is_array($msg)) {
      $this->msg = $msg;
    } else {
      $this->msg = array($msg);
    }
    $this->error_code = $error_code;
  }

  public function toResponse($request)
  {
    return response()->json([
      'status' => 'error',
      'message' => $this->msg
    ], $this->error_code);
  }
}
