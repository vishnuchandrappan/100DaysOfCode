<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use Illuminate\Http\Request;
use App\Models\User;
use \Illuminate\Support\Facades\Hash;

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

        return response()->json($user);
    }

    public function show(User $user)
    {
        return response()->json($user);
    }

    public function update(User $user, UpdateUserRequest $request)
    {
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
}
