<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
//  protected $hidden=[
//      'id'
//  ];
  /**
       * @var mixed
     */
    private $description;
    /**
     * @var mixed
     */
    private $categoryName;

    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
         return $this ->hasMany(item::class);
     }


}
