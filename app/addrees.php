<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class addrees extends Model
{
    protected $guarded =[
'user_id'
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
