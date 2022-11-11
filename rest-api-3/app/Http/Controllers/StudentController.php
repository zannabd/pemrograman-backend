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

        if($students) {
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
        else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }

    }

    #-----------menambahkan resource student-----------------
    #--------------membuat method store----------------------
    public function store(Request $request)
    {
        # validasi data
        $validatedData = $request->validate([
            # kolom => rules|rules
            'nama' => 'required',
            'nim' => 'numeric|required',
            'email' => 'email|required',
            'jurusan' => 'required'
        ]);
        # menggunakan Student untuk insert data
        $student = Student::create($validatedData);

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
        $student = Student::find($id);

        if($student)
        {
        # menangkap data
        $input = [
            'nama'=> $request->nama ?? $student->nama,
            'nim' => $request->nim ?? $student->nim,
            'email' => $request->email ?? $student->email,
            'jurusan' => $request->jurusan ?? $student->jurusan,
        ];

        $student->update($input);

        $data = [
            'message' => 'Resource student updated',
            'data' => $student
        ];

        return response()->json($data, 200);
        }else{
            $data = [
                'message'=>'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    #---------------------menghapus resource student---------------------
    #---------------------------method delete----------------------------
    public function destroy($id)
    {
        $student = Student::find($id);

        if($student) {

        $student->delete($id);
       
        $data = [
            'message' => 'Student is deleted',
        ];

        return response()->json($data, 200);
        }
        else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    # mendapatkan detai resouce
    # method show
    public function show($id)
    {
        # cari data student
        $student = Student::find($id);

        if($student)
        {
        $data = [
            'message'=>'Get detail student',
            'data'=>$student,
        ];

        # mengembalikan data json status code 200
        return response()->json($data, 200);
        }else{
            $data = [
                'message'=>'Student not found',
            ];

            return response()->json($data, 404);
        }

    }
    
}
