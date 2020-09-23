<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function followUser(User $user)
    {
        auth()->user()->follows()->create([
            'follower_id' => $user->id
        ]);

        return response()->json([
            'status' => 'ok',
            'message' => 'followed' . $user->name . 'successfully'
        ]);
    }

    public function unFollowUser(User $user)
    {
        try {
            auth()->user()->follows()->where('followed_id', $user->id)->delete();
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'failed to delete record'
            ], 400);
        }
        return response()->json([
            'status' => 'ok',
            'message' => 'record deleted successfully'
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
