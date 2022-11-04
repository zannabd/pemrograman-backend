<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public $hewan = ["Kambing", "Sapi", "Kuda", "Kelinci"];

    public function index()
    {
        echo "Menampilkan Data Animal :</br>";
        $hewan = $this->hewan;
        foreach($hewan as $hwn){
            echo $hwn."<br/>";
        }
    }

    public function store(Request $request)
    {
        echo "Menambahkan Data Animal - </br>";
        echo "Nama Hewan:</br>";
        $nama = $this->hewan;
        array_push($nama, $request->nama);
        print_r($nama);
    }
    public function update(Request $request, $id)
    {
        echo "Mengubah Data Animal id $id - ";
        echo "Nama Hewan:";
        $nama = $this->hewan;
        array_splice($nama, $id, 1, [$request->nama]);
        print_r($nama);
    }

    public function destroy($id)
    {
        echo "Menghapus Data Animal id $id";
        $nama = $this->hewan;
        unset($nama[$id]);
        print_r($nama);
    }
}
