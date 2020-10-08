<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBlogPostRequest;
use App\Http\Requests\UpdateBlogPostRequest;
use Illuminate\Http\Request;
use App\Models\BlogPost;
use App\Models\User;

class BlogPostController extends Controller
{

    public function usersIndex()
    {
        return response()->json(auth()->user()->blogPosts);
    }

    public function index()
    {
        return response()->json(BlogPost::withCount('likes')->withCount('comments')->with('user')->get());
    }

    public function create(CreateBlogPostRequest $request)
    {
        $blogPost = auth()->user()->blogPosts()->create($request->all());
        return response()->json($blogPost);
    }

    public function show(BlogPost $blog_post)
    {
        return response()->json($blog_post);
    }

    public function update(BlogPost $blog_post, UpdateBlogPostRequest $request)
    {
        $blog_post->update($request->all());
        return response()->json($blog_post);
    }

    public function destroy(BlogPost $blog_post)
    {
        $blog_post->delete();
        return response()->json([
            'status' => 'ok',
            'message' => 'blog post deleted successfully'
        ]);
    }
}
