<?php

namespace App\Http\Controllers;

use http\Exception\BadHeaderException;
use http\Exception\BadMessageException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\brands;

class brandsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(brands::all());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $New_brand = new brands();
        $New_brand->brandName = $request->brandName;
        $New_brand->address = $request->address;

        $Available  = brands::where('brandName',"=", $request->input('brandName'))->first();
        if($Available){
            return  response()->json([
                "message"=>"already in the database",
                "status"=>"401"
            ],401);
        }
        else {
            try {
                //saving to the database
                if ($New_brand->save()) {
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
    public function show(int $id): JsonResponse
    {
        $wantedBrand = brands::find($id);
        if(($wantedBrand)){
            return response()->json(["brand"=>$wantedBrand]);

        }
        else{

            return response()->json(["message"=>"brand not found"],401);
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
        $requestedBrand = brands::find($id);
        if(!$requestedBrand){
            return  response()->json(["message"=>" item not found"],401);
        }
        else{

            $requestedBrand->brandName = $request->name;
            $requestedBrand->address = $request->address;

        }
        try {
            if ($requestedBrand->save()){
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
        $unwantedBrand = brands::find($id);
        if(is_null($unwantedBrand)){
            return  response()->json(["message"=>"not found"],401);
        }
        if(!$unwantedBrand){
            return response()->json(["message" => "no such item in the database"],401);
        }
        else{
            $unwantedBrand->delete();
            return response()->json(["message"=>"items deleted successfully"],201);
        }

    }
}
