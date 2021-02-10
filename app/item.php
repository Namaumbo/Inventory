<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class item extends Model
{
    protected $guarded =[
'id'
    ];
    /**
     * @var mixed
     */
    private $description;
    /**
     * @var mixed
     */
    private $stockable;
    /**
     * @var mixed
     */
    private $vat;
    /**
     * @var mixed
     */
    private $color;
    /**
     * @var mixed
     */
    private $price;
    /**
     * @var mixed
     */
    private $quantity;
    /**
     * @var mixed
     */
    private $name;


    public function brand(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(brands::class);
    }
    public function supplier(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(supplier::class);
    }
    public function category(): \Illuminate\Database\Eloquent\Relations\HasOne
    {
        return $this->hasOne(categories::class);
    }
}
