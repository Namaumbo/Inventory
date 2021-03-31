<?php

namespace App\Http\Controllers;
use App\User;
use http\Exception\BadHeaderException;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class UserController extends Controller
{
    private $status_code = 200;

    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $All_users = User::all();
        return response()->json(["users" => $All_users]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {


        $userInDatabase = user::where('email', '=', $request->input('email'))->first();
        if ($userInDatabase) {
            return response()->json(["message" => "user in database"]);
        }

        //        dataValidation

        $request->validate([
            'email' => 'required|email',
            'firstName' => 'required',
            'lastName' => 'required',
            'Role' => 'required',
            'password' => 'required'
        ]);

        $newUser = new User();

        $newUser->firstName = $request->get("firstName");
        $newUser->middleName = $request->get("middleName");
        $newUser->lastName = $request->get("lastName");
        $newUser->password = $request->get("password");
        $newUser->email = $request->get("email");
        $newUser->phoneNumber = $request->get("phoneNumber");
        $newUser->Role = $request->get("Role");
        $newUser->userName = $request->get("userName");


//

        if ($newUser->save()) {
            return response()->json(
                ["message" => "user created",
                    "status" => "ok"
                ], 201);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show(int $id): JsonResponse
    {
        $singleUser = User::find($id);

        if ($singleUser) {
            return response()->json(["user" => $singleUser]);
        }
        if (is_null($singleUser)) {
            return response()->json(["message" => "no user found"]);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $req
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $req, int $id): JsonResponse
    {
        $wantedUser = User::find($id);
        /// checking the legit user id input
        if (is_null($wantedUser) || !$wantedUser) {
            return response()->json(["message" => "no such user"], 401);
            /////////
        } else {
            $wantedUser->password = $req->get("password");
            $wantedUser->First_name = $req->get("firstName");
            $wantedUser->last_name = $req->get("lastName");
            $wantedUser->email = $req->get("email");
            $wantedUser->phone_number = $req->get("phoneNumber");
            $wantedUser->Role = $req->get("Role");
            $wantedUser->user_name = $req->get("userName");
            try {
                if ($wantedUser->save()) {
                    return response()->json([
                        "message" => "change done",
                        "status" => "complete"
                    ], 201);
                }
            } catch (BadHeaderException $evt) {
            };
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $unwantedUser = User::find($id);
        if (is_null($unwantedUser)) {
            return response()->json(["message" => "no such user "]);
        } else {
            $unwantedUser->delete();
            return response()->json(["message" => "successfully deleted"], 201);
        }
    }

//    user login

    public function userLogin(Request $request): JsonResponse
    {
             ///// validate
        $validator = Validator::make($request->all(),
            [
                "email" => "required|email",
                "password" => "required"
            ]
        );
        if ($validator->fails()) {
            return response()->json(["status" => "failed", "validation_error" => $validator->errors()]);
        }
        // check if entered email exists in db


        $userEmail =User::where("email", $request->get("email") )->first();
        if(!is_null($userEmail)) {
            $userPassword=User::where("email", $request->get("email"))->where("password",$request->get("password"))->first();

            if(!is_null($userPassword)) {
                $user=$this->userDetail($request->get("email"));

                return response()->json([
                    "success" => true,
                    "message" => "You have logged in successfully",
                    "data" => $user],200);
            }
            else {
                return response()->json([
                    "status" => "failed",
                    "success" => false,
                    "message" => "Unable to login. Incorrect password."],422);
            }
        }
        else {
            return response()->json([
                "status" => "failed",
                "success" => false,
                "message" => "Unable to login. Email doesn't exist."],404);
        }
    }

//        returning user details
        public function userDetail($email) {
        $user=array();
        if($email!="") {
            $user=User::where("email", $email)->first();
            return $user;
        }
    }

}
