<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property mixed first_name
 * @property mixed name
 * @property mixed password
 * @property mixed last_name
 * @property mixed email
 * @property mixed phone_number
 * @property mixed isAdmin
 */
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
         'email',
         'password',
         'first_name',
         'last_name',

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function address(): \Illuminate\Database\Eloquent\Relations\HasOne
{
    return $this->hasOne(addrees::class);
}
public function order(): HasMany
{
return $this->hasMany(orders::class);
}

}
