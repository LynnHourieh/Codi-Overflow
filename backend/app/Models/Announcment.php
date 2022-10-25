<?php

namespace App\Models;

use App\Models\SystemUser;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Announcment extends Model
{
    use HasFactory;
    protected $fillable = ["ne_title", "ne_description", "ne_date","user_id"];

    public function user()
    {
        return $this->belongsTo(SystemUser::class, 'user_id');
        
    }
}
