<?php


namespace App\Http\Controllers\Api\v1;


use App\Http\Controllers\Controller;
use App\Model\Mahasiswa;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class MahasiswaController extends Controller
{
    public function register(Request $request)
    {
        $validation = $request->validate([
            "name"     => "required",
            "email"    => "required|unique:users,email",
            "username" => "required|unique:users,username",
            "password" => "required|min:6",
            "nid"      => "required",
            "address"  => "required",
            "phone"    => "required",
            "bio"      => "required",
            "photo"    => "mimes:jpeg,png,jpg|max:5120"

        ]);

        if ($request->has("photo")) {
            $photo = date("YmdHis") . Str::random(10) . "." . $request->photo->extension();
            $request->photo->move(public_path("mahasiswa"), $photo);

            $photo = "mahasiswa/{$photo}";
        } else {
            $photo = "mahasiswa/default.png";
        }

        $dataMahasiswa = [
            "name"    => $request->post("name"),
            "nid"     => $request->post("nid"),
            "address" => $request->post("address"),
            "phone"   => $request->post("phone"),
            "bio"     => $request->post("bio"),
            "photo"   => $photo,
        ];

        $simpan = Mahasiswa::create($dataMahasiswa);

        if ($simpan) {
            $dataUser = [
                "name"     => $request->post("name"),
                "email"    => $request->post("email"),
                "username" => $request->post("username"),
                "password" => Hash::make($request->post("password")),
                "level" => "mahasiswa",
                "data_id" => $simpan->id
                ];

                $simpan = User::create($dataUser);

                return response()->json(["success" => true, "pesan" => "Data Mahasiswa Berhasil di simpan", "data" => $simpan], 200);
            } else {
            return response()->json(["success" => false, "pesan" => "Data Mahasiswa gagal di simpan"], 500);
        }
    }
}
