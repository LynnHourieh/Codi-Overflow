<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('announcments', function (Blueprint $table) {
            $table->id();
            $table->string('ne_title');
            $table->string('ne_description');
            $table->string('ne_date');
            $table->foreignId('user_id')->constrained('system_users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('announcments');
    }
};
