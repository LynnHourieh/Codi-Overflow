<?php

namespace App\Models;

use App\Models\Cycle;
use App\Models\Status;
use App\Models\Question;
use App\Models\Systemrole;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SystemUser extends Model
{
    use HasFactory;
    protected $fillable = ["name", "username", "password","email","systemroles_id","status_id","cycle_id"];
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function cycle()
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
    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
