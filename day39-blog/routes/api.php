<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/** Controllers */

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\BlogPostTagController;
use App\Http\Controllers\FollowController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\TagController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::get('me', [AuthController::class, 'me']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'users'
], function () {
    Route::get('/', [UserController::class, 'index']);
    Route::post('/', [UserController::class, 'create']);
    Route::get('/{user}', [UserController::class, 'show']);
    Route::put('/{user}', [UserController::class, 'update']);
    Route::delete('/{user}', [UserController::class, 'destroy']);
});

Route::get('blog_posts/all', [BlogPostController::class, 'index']);

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'blog_posts'
], function () {
    Route::get('/', [BlogPostController::class, 'usersIndex']);
    Route::post('/', [BlogPostController::class, 'create']);
    Route::get('/{blog_post}', [BlogPostController::class, 'show']);
    Route::put('/{blog_post}', [BlogPostController::class, 'update']);
    Route::delete('/{blog_post}', [BlogPostController::class, 'destroy']);
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'blog_posts/{blog_post}/comments'
], function () {
    Route::get('/', [CommentController::class, 'index']);
    Route::post('/', [CommentController::class, 'create']);
    Route::get('/{comment}', [CommentController::class, 'show']);
    Route::put('/{comment}', [CommentController::class, 'update']);
    Route::delete('/{comment}', [CommentController::class, 'destroy']);
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'comments/{comment}/replies'
], function () {
    Route::post('/', [ReplyController::class, 'create']);
    Route::put('/{reply}', [ReplyController::class, 'update']);
    Route::delete('/{reply}', [ReplyController::class, 'destroy']);
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'users/{user}'
], function () {
    Route::get('/followers', [FollowController::class, 'followers']);
    Route::get('/followed', [FollowController::class, 'followed']);
    Route::post('/follow', [FollowController::class, 'followUser']);
    Route::delete('/follow', [FollowController::class, 'unFollowUser']);
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'like'
], function () {
    Route::post('/blog_posts/{blog_post}', [LikeController::class, 'likeBlogPost']);
    Route::post('/comments/{comment}', [LikeController::class, 'likeComment']);
    Route::delete('/blog_posts/{blog_post}', [LikeController::class, 'unlikeBlogPost']);
    Route::delete('/comments/{comment}', [LikeController::class, 'unlikeComment']);
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'blog_posts'
], function () {
    Route::post('/{blog_post}/tags', [BlogPostTagController::class, 'assignTags']);
    Route::delete('/{blog_post}/tags/{tag}', [BlogPostTagController::class, 'removeTag']);
    Route::get('/tags/{tag}', [BlogPostTagController::class, 'getBlogPostsByTag']);
});


Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'tags'
], function () {
    Route::get('/',[TagController::class, 'index']);
    Route::post('/',[TagController::class, 'create']);
    Route::get('/{tag}', [TagController::class, 'show']);
    Route::put('/{tag}',[TagController::class, 'update']);
    Route::delete('/{tag}', [TagController::class, 'destroy']);
});