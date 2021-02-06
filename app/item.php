<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class item extends Model
{
    protected $guarded =[
'id'
    ];
    

    public function brand(){
        return $this->hasOne(brands::class);
    }
    public function supplier(){
        return $this->hasOne(supplier::class);
    }
    public function category(){
        return $this->hasOne(categories::class);
    }
}
