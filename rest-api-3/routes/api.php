<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/animals', [AnimalController::class, 'index']);

Route::post('/animals', [AnimalController::class, 'store']);

Route::put('/animals/{id}', [AnimalController::class, 'update']);

Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);

# get all resource student
# method get
Route::get('/student', [StudentController::class, 'index']);

# create data resource student
# method post
Route::post('/student', [StudentController::class, 'store']);

# edit data resource student
# method put
Route::put('/student/{id}', [StudentController::class, 'update']);

# hapus data resource student
# method delete
Route::delete('/student/{id}', [StudentController::class, 'destroy']);

# mendapatkan detail student
Route::get('/student/{id}', [StudentController::class, 'show']);

