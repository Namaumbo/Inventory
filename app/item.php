<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property mixed name
 * @property mixed quantity
 * @property mixed price
 * @property mixed color
 * @property mixed vat
 * @property mixed description
 * @property mixed stockable
 * @property mixed brandName
 * @property mixed categoryName
 * @property mixed supplierName
 */
class item extends Model
{
    protected $guarded =[
        'id',

    ];
    protected $fillable=[
        'description',
        'vat',
        'price',
        'quantity',
        'name',
        'brandName',
        'supplierName',
        'categoryName'
    ];

    protected $casts=[
        'quantity' => 'integer',
        'price' => 'double',
        'vat'=>'double',
            ];



    public function brand(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(brands::class);
    }
    public function supplier(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(supplier::class);
    }
    public function category(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(category::class);
    }
}
