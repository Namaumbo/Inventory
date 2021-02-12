<?php

namespace App\Http\Controllers;

use App\item;
use http\Exception\BadMessageException;
use Illuminate\Http\Request;

class itemsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return response()->json(["items"=>item::all()]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        $Newitem = new item;
        $Newitem->name = $request->name;
        $Newitem->quantity = $request->quantity;
        $Newitem->price = $request->price;
        $Newitem-> color= $request->color;
        $Newitem-> vat= $request->vat;
        $Newitem->  description= $request-> description;
        $Newitem->stockable= $request->  stockable;

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
        if ($Newitem->save()) {
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
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
