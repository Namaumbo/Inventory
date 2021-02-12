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
      return response()->json([item::all()]);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {

        $item = new item;
        $item->name = $request->name;
        $item->quantity = $request->quantity;
        $item->price = $request->price;
        $item-> color= $request->color;
        $item-> vat= $request->vat;
        $item->  description= $request-> description;
        $item->stockable= $request->  stockable;

        try {
            if ($item->save()){
             return response()->json([
                 "message"=>"success",
                 "status" => "ok"
             ],201)  ;
            }
        }catch(BadMessageException $ex){

        };


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
