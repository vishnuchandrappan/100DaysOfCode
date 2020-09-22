<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCommentRequest;
use App\Http\Requests\UpdateCommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class ReplyController extends Controller
{

    public function create(Comment $comment, CreateCommentRequest $request)
    {
        $reply = $comment->replies()->create($request->all());
        return response()->json($reply);
    }

    public function update(Comment $comment, Comment $reply, UpdateCommentRequest $request)
    {
        $reply->update($request->all());
        return response()->json($reply);
    }

    public function destroy(Comment $comment, Comment $reply)
    {
        $reply->delete();
        return response()->json([
            'status' => 'ok',
            'message' => 'reply deleted successfully'
        ]);
    }
}
