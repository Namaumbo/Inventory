<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
public function user(){
    return $this->belongsTo(User::class);
}
public function item(){
    return $this->belongsTo(items::class);
}
}
