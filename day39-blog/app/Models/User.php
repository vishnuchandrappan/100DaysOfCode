<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable  implements JWTSubject
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'salt'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'salt','created_at', 'updated_at'
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    /** Relations */
    public function blogPosts()
    {
        return $this->hasMany('App\Models\BlogPost');
    }

    public function comments()
    {
        return $this->hasMany('App\Models\Comment');
    }

    public function followers()
    {
        return $this->belongsToMany(
            'App\Models\User',
            'follows',
            'followed_id',
            'follower_id'
        )->withTimestamps();
    }

    public function follows()
    {
        return $this->belongsToMany(
            'App\Models\User',
            'follows',
            'follower_id',
            'followed_id'
        )->withTimestamps();
    }

    public function likes()
    {
        return $this->hasMany('App\Models\Like');
    }

    public function likedPosts()
    {
        return $this->likes()->select('likeable_id')->where('likeable_type', 'App\Models\BlogPost');
    }

    public function likedComments()
    {
        return $this->likes()->select('likeable_id')->where('likeable_type', 'App\Models\Comment');
    }
}
