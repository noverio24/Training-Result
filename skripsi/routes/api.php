<?php

use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::name("api.v1.")->prefix("v1")->namespace('Api\v1')->group(function (){

    //ROUTE LOGIN
    Route::post("login","AuthController@login")->name("login");

    //ROUTE CHECK LOGIN
    Route::get("check","AuthController@check")->name("check");


    //Route Dosen
    Route::name("dosen.")->prefix("dosen")->group(function (){
       //register Dosen
        Route::post("register","DosenController@register")->name("register");
    });

    //Route Mahasiswa
    Route::name("mahasiswa.")->prefix("mahasiswa")->group(function (){
        //registermahasiswa
        Route::post("register","MahasiswaController@register")->name("register");
    });
});

















Route::get("/coba",function(){
    $data = [
        "firstName" => "Rio"
    ];
      return response()->json($data);
});

Route::get("/ambil/{link}",function ($link){
    return"hello {$link} " .\request()->get("data");
});
Route::post("/kirim",function(Request $request){

    $nama = $request->post("nama");
    $umur = $request->post("umur");

    return "Nama : {$nama} <br> Umur : {$umur}";
});

