<?php

namespace App\Http\Controllers;

use App\item;
use http\Env\Response;
use http\Exception\BadHeaderException;
use http\Exception\BadMessageException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class itemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index():JsonResponse
    {
      return response()->json(["items"=>item::all()]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {

        $New_Item = new item;
        $New_Item->name = $request->name;
        $New_Item->quantity = $request->quantity;
        $New_Item->price = $request->price;
        $New_Item-> color= $request->color;
        $New_Item-> vat= $request->vat;
        $New_Item->  description= $request-> description;
        $New_Item->stockable= $request->  stockable;

// checking if the product is in the database
        $Available  = item::where('name',"=", $request->input('name'))->first();
        if($Available){
          return  response()->json([
                "message"=>"already in the database",
                "status"=>"401"
            ],401);
        }
else {
    try {
        //saving to the database
        if ($New_Item->save()) {
            return response()->json([
                "message" => "success",
                "status" => "ok"
            ], 201);
        }
    } catch (BadMessageException $ex) {

    };
}

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }
    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, int $id)
    {
        //entering the fields which needs to be edited
        $requestedItem = item::find($id);
        if($requestedItem){
            $requestedItem->name = $request->name;
            $requestedItem->quantity = $request->quantity;
            $requestedItem->quantity = $request->quantity;
            $requestedItem->price = $request->price;
            $requestedItem-> color= $request->color;
            $requestedItem-> vat= $request->vat;
            $requestedItem->  description= $request-> description;
            $requestedItem->stockable= $request-> stockable;
        }
            try {
                if ($requestedItem->save()){
                    return response()->json([
                        "message" => "change done",
                        "status" => "complete"
                    ],201);
                }
            }catch(BadHeaderException $evt){};


            }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
