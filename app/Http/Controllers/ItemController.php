<?php

namespace App\Http\Controllers;
use App\item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function addItem(Request $request){

        $item = new item;
        $item->name = $request->name;
        $item->quantity = $request->quantity;
        $item->price = $request->price;
        $item-> color= $request->color;
        $item-> vat= $request->vat;
        $item->  description= $request-> description;
        $item->stockable= $request->  stockable;
        if($item  === item){
            return ["we have it in database"];
        }

        if($item->save()){
            return response()->json(
                [
                    "message"=>"item saved",
                     "status"=> 'ok'
                ],201
            );

              }

    }
}
