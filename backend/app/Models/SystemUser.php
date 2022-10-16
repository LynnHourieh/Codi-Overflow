<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SystemUser extends Model
{
    use HasFactory;
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function category()
    {
        return $this->belongsTo(Cycle::class, 'cycle_id');
    }
    public function status()
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
    public function sysrole()
    {
        return $this->belongsTo(Systemrole::class, 'systemroles_id');
    }
}
