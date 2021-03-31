<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed address
 * @property mixed phoneNumber
 * @property mixed email
 * @property mixed supplierName
 */
class supplier extends Model
{

     protected $primaryKey = 'supplierName';
     public $incrementing = false;

    protected $fillable = [
        'address',
        'phoneNumber',
        'email',
        'supplerName'
    ];
    public function item(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(item::class);
    }
}
