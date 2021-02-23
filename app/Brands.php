<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class brands extends Model
{
    /**
     * @var mixed
     */
    protected $name;
    /**
     * @var mixed
     */
    protected $address;
    protected $fillable =[
        'name','address'
    ];

    public function item(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(item::class);
    }
}
