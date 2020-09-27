<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use Illuminate\Http\Request;
use App\Models\Comment;
use App\Models\BlogPost;
use CreateCommentsTable;

class CommentController extends Controller
{

    public function index(BlogPost $blog_post)
    {
        return response()->json($blog_post->comments);
    }

    public function create(BlogPost $blog_post, CreateCommentRequest $request)
    {
        $comment = auth()->user()->comments()->create($request->all());
        $blog_post->comments()->save($comment);

        return response()->json($comment);
    }

    public function show(BlogPost $blog_post, Comment $comment)
    {
        return response()->json($comment);
    }

    public function update(BlogPost $blog_post, Comment $comment, UpdateCommentRequest $request)
    {
        $comment->update($request->all());
        return response()->json($comment);
    }

    public function destroy(BlogPost $blog_post, Comment $comment)
    {
        $comment->delete();
        return response()->json([
            'status' => 'ok',
            'message' => 'comment deleted successfully'
        ]);
    }
}
