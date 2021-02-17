<?php


namespace App\Model;


use Illuminate\Database\Eloquent\Model;

class Dosen extends Model
{
    protected $table = "dosen";

    protected $fillable = [
        "name",
        "nid",
        "address",
        "phone",
        "bio",
        "photo",
    ];

}