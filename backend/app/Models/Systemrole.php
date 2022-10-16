<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Systemrole extends Model
{
    use HasFactory;
    public function system_user()
    {
        return $this->hasMany(SystemUser::class);
    }
}
