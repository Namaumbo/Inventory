<?php

namespace App;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed brandName
 * @property mixed address
 */

class brands extends Model
{
    protected $primaryKey = 'brandName';
    public $incrementing = false;

    protected $fillable =[
        'brandName','address'
    ];


    public function item(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(item::class);
    }
}
