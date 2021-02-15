<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
       $All_users = User::all();
    return   response()->json(["users"=>$All_users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {

        $newUser = new User();
        $newUser->password = $request->password;
        $newUser->First_name = $request->First_name;
        $newUser->last_name = $request->last_name;
        $newUser->email = $request->email;
        $newUser->phone_number = $request->phone_number;
        $newUser->isAdmin = $request->isAdmin;
        $newUser->user_name = $request->user_name;


        $userInDatabase = user::where('email', '=', $request->input('email'))->first();
        if($userInDatabase){
            return response()->json(["message"=>"user in database"]);
        }
//
        //        dataValidation
//        $request->validate([
//            'email' => 'required',
//            'first_name' => 'required',
//            'last_name' => 'required' ,
//            'isAdmin' => 'required',
//            'password' => 'required'
//        ]);

        if($newUser->save()){
            return response()->json(
                ["message"=>"user created",
                  "status"=>"ok"
            ],201);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show(int $id): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, int $id): Response
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(int $id): Response
    {
        //
    }
}
