<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->increments('id')->first();
            $table->timestamp('created_at');
            $table->integer('quantity');
            $table->double('price')->after('name');
            $table->string('color')->nullable();
            $table->double('vat');
            $table->text('description')->nullable();
            $table->string('name')->after('id');
            $table->boolean('stockable');
            $table->timestamp('item_added_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
