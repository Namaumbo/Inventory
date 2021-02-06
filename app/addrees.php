<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class addrees extends Model
{
    protected $guarded =[
'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
