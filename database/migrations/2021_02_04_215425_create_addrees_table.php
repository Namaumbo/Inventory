<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddreesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addrees', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('village');
            $table->string('T/A');
            $table->string('district');
            $table->string('country');
            $table->foreignId('user_id')->reference('id')->constrained();
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
        Schema::dropIfExists('addrees');
    }
}
