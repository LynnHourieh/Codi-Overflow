<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\SystemRoleController;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//-----------------News------------------//
//----get-----add----update----delete----//
Route::get('/news', [NewsController::class, 'index']);
Route::post('/addnews', [NewsController::class, 'store']);
Route::put('/updatenews/{id}', [NewsController::class, 'update']);
Route::delete('/deletenews/{id}', [NewsController::class, 'destroy']);
//-----------------News------------------//

//-----------------Category------------------//
Route::get("/category",[CategoryController::class,'index']);
//-----------------Category------------------//

//-----------------SystemRole------------------//
Route::get("/sysrole",[SystemRoleController::class,'index']);
//-----------------SystemRole------------------//

//-----------------Status------------------//
Route::get("/status",[StatusController::class,'index']);

//-----------------Status------------------//