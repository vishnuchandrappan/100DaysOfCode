<?php

namespace App\Http\Controllers;

use App\Models\BlogPost;
use App\Models\Comment;
use Exception;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    private $user;

    public function __construct()
    {
        $this->user = auth()->user();
    }

    public function likeBlogPost(BlogPost $blog_post)
    {
        try {
            $blog_post->likes()->create([
                'user_id' => $this->user->id
            ]);
        } catch (Exception  $e) {
            $blog_post->likes()->where('user_id', auth()->user()->id)->delete();
            return response()->json([
                'status' => 'ok',
                'message' => 'unlike successful',
                'id' => $blog_post->id,
                'deleted' => true
            ]);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'blogPost liked successfully',
            'id' => $blog_post->id,
            'deleted' => false
        ]);
    }

    public function unlikeBlogPost(BlogPost $blog_post)
    {
        try {
            $blog_post->likes()->where('user_id', auth()->user()->id)->delete();
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'unlike cannot be completed'
            ], 400);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'unlike successful'
        ]);
    }

    public function likeComment(Comment $comment)
    {
        $comment->likes()->create([
            'user_id' => $this->user->id
        ]);

        return response()->json([
            'status' => 'ok',
            'message' => 'Comment liked successfully'
        ]);
    }

    public function unlikeComment(Comment $comment)
    {
        try {
            $comment->likes()->where('user_id', $this->user->id)->delete();
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'unlike cannot be completed'
            ]);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'unlike successful'
        ]);
    }
}
