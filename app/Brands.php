<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brands extends Model
{
    public function item()
    {
        return $this->hasMany(items::class);
    }
}
