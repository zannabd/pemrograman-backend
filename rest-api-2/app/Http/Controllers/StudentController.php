<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    #-----------method index - get all resource---------------
    public function index()
    {
        # menggunakan model student untuk select data
        $students = Student::all();

        $data = [
            'message'=>'Get All Students',
            'data'=> $students,
        ];

        # menggunakan response json laravel
        # otomatis set header content type json
        #otomatis mengubah data array ke JSON
        # mengatur status code
        return response()->json($data, 200);
    }

    #-----------menambahkan resource student-----------------
    #--------------membuat method store----------------------
    public function store(Request $request)
    {
        # menangkap data
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        # menggunakan Student untuk insert data
        $student = Student::create($input);

        $data = [
            'message' => 'Data student created succesfully',
            'data' => $student,
        ];

        #mengembalikan data json
        return response()->json($data, 201);
    }

    #----------mengedit resource student----------------------
    #-------------methode update-----------------------------
    public function update(Request $request, $id)
    {
        # menangkap data
        $input = [
            'nama'=> $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $student = Student::find($id);
        $student->update($input);

        $data = [
            'message' => 'Data student '.$id. ' updated succesfully',
            'data' => $student
        ];

        return response()->json($data, 200);
    }

    #---------------------menghapus resource student---------------------
    #---------------------------method delete----------------------------
    public function destroy($id)
    {
        
        $student = Student::destroy($id);
       
        $data = [
            'message' => 'Data student ID = '.$id.' deleted succesfully',
            'data' => $student
        ];

        return response()->json($data, 200);
    }
    
}
