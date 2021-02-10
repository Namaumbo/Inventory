<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class orders extends Model
{
public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
{
    return $this->belongsTo(User::class);
}
public function item(): \Illuminate\Database\Eloquent\Relations\BelongsTo
{
    return $this->belongsTo(items::class);
}
}
