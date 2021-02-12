<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use \Illuminate\Database\Eloquent\Relations\HasOne;

class item extends Model
{
    protected $guarded =[
'id'
    ];

    protected $cast=[
        'quantity' => 'integer'
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
