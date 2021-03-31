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
            $table->string('brandName',30);
            $table->string('categoryName',50);
            $table->string('supplierName',50) ;

            $table->foreign('brandName')
            ->references('brandName')
            ->on('brands')
            ->onDelete('NO ACTION')
            ->onUpdate('CASCADE');


              $table->foreign('categoryName')
              ->references('categoryName')
              ->on('categories')
              ->onDelete('NO ACTION')
              ->onUpdate('CASCADE');

               $table->foreign('supplierName')
               ->references('supplierName')
               ->on('suppliers')
               ->onDelete('NO ACTION')
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
