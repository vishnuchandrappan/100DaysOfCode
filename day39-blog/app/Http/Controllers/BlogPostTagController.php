<?php

namespace App\Http\Controllers;

use App\Http\Requests\AssignTagsRequest;
use App\Http\Requests\RemoveTagsRequest;
use App\Models\BlogPost;
use App\Models\Tag;
use Exception;
use Illuminate\Http\Request;

class BlogPostTagController extends Controller
{

    public function assignTags(BlogPost $blog_post, AssignTagsRequest $request)
    {
        $tags = $request->tags;
        $blog_post->insert($tags);

        return response()->json([
            'status' => 'ok',
            'message' => 'tags assigned successfully'
        ]);
    }

    public function removeTag(BlogPost $blog_post, Tag $tag)
    {
        try {
            $blog_post->tags()->where('tag_id', $tag->id);
        } catch (Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'tag cannot be removed'
            ], 400);
        }

        return response()->json([
            'status' => 'ok',
            'message' => 'tag removed successfully'
        ]);
    }

    public function getBlogPostsByTag(Tag $tag)
    {
        return response()->json($tag->blog_posts()->get());
    }
}
