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
 */
class item extends Model
{
    protected $guarded =[
        'id',
        'branch_id',
        'supplier_id',
        'category_id',
    ];
    protected $fillable=[
        'description',
        'vat',
        'price',
        'quantity',
        'name',

        ];

    protected $casts=[
        'quantity' => 'integer',
        'price' => 'double',
        'vat'=>'double',
            ];
    /**
     * @var mixed
     */
    private $brand_id;
    /**
     * @var mixed
     */
    private $category_id;
    /**
     * @var mixed
     */
    private $supplier_id;


    public function brand(): HasOne
    {
        return $this->hasOne(brands::class);
    }
    public function supplier(): HasOne
    {
        return $this->hasOne(supplier::class);
    }
    public function category(): HasOne
    {
        return $this->hasOne(category::class);
    }
}
