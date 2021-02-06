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
            $table->increments('item_id')->first();
            $table->timestamp('created_at');
            $table->integer('quantity');
            $table->double('price')->after('name');
            $table->string('color')->nullable();
            $table->double('vat');
            $table->text('description')->nullable();
            $table->string('name')->after('id');
            $table->boolean('stockable');
            $table->timestamp('item_added_at')->nullable();
            $table->integer('brand_id');
            $table->integer('category_id');
            $table->integer('supplier_id');
            
            $table->foreign('brand_id')
            ->references('brand_id')
            ->on('brands')
            ->onDelete('CASCADE')
            ->onUpdate('CASCADE');

              $table->foreign('category_id')
              ->references('category_id')
              ->on('categories')
              ->onDelete('CASCADE')
              ->onUpdate('CASCADE');

               $table->foreign('supplier_id')
               ->references('supplier_id')
               ->on('suppliers')
               ->onDelete('CASCADE')
              ->onUpdate('CASCADE')
               ;
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
