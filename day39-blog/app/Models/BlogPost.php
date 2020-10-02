<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'body'];

    /** Relations */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }

    public function comments()
    {
        return $this->morphMany('App\Models\Comment', 'commentable');
    }

    public function commentsWithReplies()
    {
        return $this->comments()->with('replies');
    }

    public function likes()
    {
        return $this->morphMany(
            'App\Models\Like',
            'likeable'
        );
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag', 'blog_posts_tags')->withTimestamps();
    }
}
