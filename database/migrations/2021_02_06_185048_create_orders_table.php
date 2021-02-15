<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {

            $table->id()->autoIncrement();
            $table->string('orderName');

            $table->date('orderDate');
            $table->float('price');


//            foreign keys
            $table->integer('user_id');
            $table->integer('item_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE')->onUpdate('CASCADE');

            $table->foreign('item_id')->references('id')->on('items')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
