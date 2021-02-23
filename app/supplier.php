<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class supplier extends Model
{
    /**
     * @var mixed
     */
    private $address;
    /**
     * @var mixed
     */
    private $phoneNumber;
    /**
     * @var mixed
     */
    private $email;
    /**
     * @var mixed
     */
    private $name;

    public function item(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(item::class);
    }
}
