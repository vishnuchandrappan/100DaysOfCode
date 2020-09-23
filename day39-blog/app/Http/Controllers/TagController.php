<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTagRequest;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{

    public function index()
    {
        return response()->json(Tag::all());
    }

    public function create(CreateTagRequest $request)
    {
        $tag = Tag::create($request->only([
            'name'
        ]));
        return response()->json($tag);
    }

    public function show(Tag $tag)
    {
        return response()->json($tag);
    }

    public function update(Tag $tag, CreateTagRequest $request)
    {
        $tag->update($request->only(['name']));
        return response()->json($tag);
    }

    public function destroy(Tag $tag)
    {
        $tag->delete();
        return response()->json([
            'status' => 'ok',
            'message' => 'tag deleted successfully'
        ]);
    }
}
