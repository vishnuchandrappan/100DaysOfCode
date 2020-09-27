<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['comment', 'user_id'];

    public function commentable()
    {
        return $this->morphTo();
    }

    public function replies()
    {
        return $this->morphMany(
            'App\Models\Comment',
            'commentable'
        );
    }

    public  function likes()
    {
        return $this->morphMany(
            'App\Models\Like',
            'likeable'
        );
    }
}
