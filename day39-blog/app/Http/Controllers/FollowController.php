<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function followUser(User $user)
    {
        auth()->user()->follows()->save($user);

        return response()->json([
            'status' => 'ok',
            'message' => 'You are following ' . $user->name . ' now'
        ]);
    }

    public function unFollowUser(User $user)
    {
        try {
            auth()->user()->follows()->detach($user);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'failed to delete record'
            ], 400);
        }
        return response()->json([
            'status' => 'ok',
            'message' => 'unfollowed '.$user->name
        ]);
    }

    public function followers(User $user)
    {
        $followers = $user->followers()->get();
        return response()->json([
            'status' => 'ok',
            'data' => $followers
        ]);
    }

    public function followed(User $user)
    {
        $followed = $user->follows()->get();
        return response()->json([
            'status' => 'ok',
            'data' => $followed
        ]);
    }
}
