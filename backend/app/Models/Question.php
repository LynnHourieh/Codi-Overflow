<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;
    protected $fillable=["q_text","category_id"];
    public function answers(){
    return $this->hasMany(Answer::class);
    }
      public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
          public function systemUser()
    {
        return $this->belongsTo(SystemUser::class, 'system_user_id');
    }
}
