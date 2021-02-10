<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class supplier extends Model
{
    public function item(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(item::class);
    }
}
