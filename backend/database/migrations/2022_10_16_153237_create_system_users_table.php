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
         Schema::create('system_users', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("username")->nullable();
            $table->string("password")->nullable();
            $table->string("email")->nullable();
            $table->string("picture")->nullable();
            $table->string("biography")->nullable();
            $table->string("levels")->nullable();
            $table->foreignId('systemroles_id')->constrained('systemroles');
            $table->foreignId('status_id')->nullable()->constrained('statuses');
            $table->foreignId('cycle_id')->constrained('cycles');

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
        Schema::dropIfExists('system_users');
    }
};
