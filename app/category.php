<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class category extends Model
{
  protected $hidden=[
      'category_id'
  ];

     public function items()
     {
         return $this ->hasMany(items::class);
     }


}
