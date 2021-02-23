<?php

namespace App\Http\Controllers;

use http\Exception\BadHeaderException;
use http\Exception\BadMessageException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\supplier;
use Illuminate\Http\Response;

class supplierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(["suppliers"=>supplier::all()]);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $New_supplier = new supplier;
        $New_supplier->address = $request->address;
        $New_supplier->phoneNumber = $request->phoneNumber;
        $New_supplier->email = $request->email;
        $New_supplier->name = $request->name;

        $Available = supplier::where('name', "=", $request->input('name'))->first();
        if ($Available) {
            return response()->json([
                "message" => "already in the database",
                "status" => "401"
            ], 401);
        } else {
            try {
                //saving to the database
                if ($New_supplier->save()) {
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
     * @return JsonResponse
     */
    public function show( int $id): JsonResponse
    {
        $wantedSupplier = supplier::find($id);
        if(($wantedSupplier)){
            return response()->json(["item"=>$wantedSupplier]);
        }
        else{
            return response()->json(["message"=>"item not found"],401);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $requestedSupplier = supplier::find($id);
        if(!$requestedSupplier){
            return  response()->json(["message"=>" item not found"],401);
        }
        else{

            $requestedSupplier->address= $request->address;
            $requestedSupplier->phoneNumber = $request->phoneNumber;
            $requestedSupplier->email = $request->email;
    }
        try {
            if ($requestedSupplier->save()){
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
     * @return JsonResponse
     */
    public function destroy( int $id): JsonResponse
    {
        $unwantedItem = supplier::find($id);
        if(is_null($unwantedItem)){
            return  response()->json(["message"=>"not found"],401);
        }
        if(!$unwantedItem){
            return response()->json(["message" => "no such item in the database"],401);
        }
        else{
            $unwantedItem->delete();
            return response()->json(["message"=>"items deleted successfully"],201);
        }

    }

}
