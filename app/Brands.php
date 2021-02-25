<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

class brands extends Model
{


    protected $hidden=[
        'id'
    ];
    /**
     * @var mixed
     */
    protected $address;
    protected $fillable =[
        'brandName','address'
    ];
    /**
     * @var mixed
     */
    private $brandName;

    public function item(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(item::class);
    }
}
