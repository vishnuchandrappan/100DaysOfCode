<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use App\Models\User;
use \Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['create']]);
    }

    public function index()
    {
        return response()->json(User::all());
    }

    public function create(CreateUserRequest $request)
    {
        $data = $request->only([
            'name', 'email', 'password'
        ]);

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);
        $token = JWTAuth::fromUser($user);

        return $this->respondWithToken($token);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(User $user, UpdateUserRequest $request)
    {
        $data = array();
        if ($request->name) {
            $data['name'] = $request->name;
        }

        if ($request->password) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        return response()->json($user);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'status' => 'ok',
            'message' => 'user deleted successfully'
        ]);
    }


    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
