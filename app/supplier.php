<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class supplier extends Model
{
    public function item(){
        return $this->hasMany(item::class);
    }
}
