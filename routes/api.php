<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::apiResource('brands','brandsController');
Route::apiResource('items','itemsController');
Route::apiResource('users','userController');
Route::apiResource('categories','categoryController');
Route::apiResource('suppliers','supplierController');
Route::apiResource('brands','brandsController');
