<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * @property mixed password
 * @property mixed lastName
 * @property mixed email
 * @property mixed phoneNumber
 * @property mixed middleName
 *@property mixed firstName
 * @property mixed userName
 * @property mixed Role
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
         'firstName',
         'lastName',
        'Role'

    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'email_verified_at','rememberToken'
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
