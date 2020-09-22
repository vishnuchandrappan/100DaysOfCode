<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'users'
], function ($router) {
    Route::get('/', 'UserController@index');
    Route::post('/', 'UserController@create');
    Route::get('/{user}', 'UserController@show');
    Route::put('/{user}', 'UserController@update');
    Route::delete('/{user}', 'UserController@destroy');
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'blog_posts'
], function ($router) {
    Route::get('/', 'BlogPostController@usersIndex');
    Route::get('/all', 'BlogPostController@index');
    Route::post('/', 'BlogPostController@create');
    Route::get('/{blog_post}', 'BlogPostController@show');
    Route::put('/{blog_post}', 'BlogPostController@update');
    Route::delete('/{blog_post}', 'BlogPostController@destroy');
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'posts/{post}/comments'
], function ($router) {
    Route::get('/', 'CommentController@index');
    Route::post('/', 'CommentController@create');
    Route::get('/{comment}', 'CommentController@show');
    Route::put('/{comment}', 'CommentController@update');
    Route::delete('/{comment}', 'CommentController@destroy');
});

Route::group([
    'middleware' => ['api', 'auth'],
    'prefix' => 'comments/{comment}/replies'
], function ($router) {
    Route::post('/', 'ReplyController@create');
    Route::put('/{reply}', 'ReplyController@update');
    Route::delete('/{reply}', 'ReplyController@destroy');
});
