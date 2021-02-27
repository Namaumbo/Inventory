<?php

namespace App;

use Illuminate\Database\Eloquent\Model;



/**
 * @property mixed categoryName
 * @property mixed description
 */

class category extends Model
{
  protected $hidden=[
      'id'
  ];

    protected $fillable=[
        "description",
        "categoryName"
    ];


    public function items(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
         return $this ->hasMany(item::class);
     }


}
