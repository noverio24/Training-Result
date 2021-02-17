<?php


namespace App\Http\Controllers\Api\v1;


use App\Http\Controllers\Controller;
use App\Model\Dosen;
use App\Model\Mahasiswa;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validation = $request->validate([
            "email"    => "required",
            "password" => "required|min:6",

        ]);

        $loginType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? "email" : "username";

        $token = Auth::guard('jwt')->attempt([
            $loginType => $request->email,
            "password" => $request->password
        ]);

        if (!$token) {
            //gagal login
            return response()->json([
                "succes" => false,
                "pesan"  => "login failed"
            ], 404);

        }

        //berhasil login
        return response()->json([
            "succes"       => true,
            "access_token" => $token,
            "token_type"   => "Bearer",
            "expires_in"   => auth('jwt')->factory()->getTTL()
        ], 200);
    }

    public function check()
    {
        if (auth('jwt')->user()->level == "dosen") {
            $data = [
                "user" => auth("jwt")->user(),
                "data" => Dosen::find(auth("jwt")->user()->data_id)
            ];
        } elseif (auth('jwt')->user()->level == "mahasiswa") {
            $data = [
                "user" => auth("jwt")->user(),
                "data" => Mahasiswa::find(auth("jwt")->user()->data_id)
            ];
        }

        return response()->json([
            "succes" => true,
            "data"   => $data
        ], 200);
    }
}
