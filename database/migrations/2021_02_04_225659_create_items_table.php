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
            $table->id()->autoIncrement();
            $table->string('name');
            $table->timestamps();
            $table->integer('quantity');
            $table->double('price')->after('name');
            $table->string('color')->nullable();
            $table->double('vat');
            $table->text('description')->nullable();
//            $table->boolean('stockable')->nullable();


//            foreign keys
            $table->integer('brandId')->nullable();
            $table->integer('categoryId')->nullable();
            $table->integer('supplierId')->nullable() ;;

            $table->foreign('brandId')
            ->references('id')
            ->on('brands')
            ->onDelete('CASCADE')
            ->onUpdate('CASCADE');


              $table->foreign('categoryId')
              ->references('id')
              ->on('categories')
              ->onDelete('CASCADE')
              ->onUpdate('CASCADE');

               $table->foreign('supplierId')
               ->references('id')
               ->on('suppliers')
               ->onDelete('CASCADE')
              ->onUpdate('CASCADE');

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
