<?php

use App\Http\Controllers\AnswerController;
use App\Models\SystemUser;
use Illuminate\Http\Request;
use App\Http\Controllers\Login;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\CycleController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\count;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\SystemRoleController;
use App\Http\Controllers\SystemUserController;

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

//-----------------Question------------------//
Route::get("/question", [QuestionController::class, 'index']);
Route::POST("/addquestion", [QuestionController::class, 'store']);
Route::PUT("/editquestion/{id}", [QuestionController::class, 'update']);
Route::get("/checkquestion",[QuestionController::class, 'check']);
Route::delete("/deletequestion/{id}",[QuestionController::class,"destroy"]);
//-----------------Question------------------//


//-----------------Answer------------------//
Route::get("/answer", [AnswerController::class, 'index']);
Route::POST("/addanswer",[AnswerController::class,"store"]);
Route::PUT("/editanswer/{id}",[AnswerController::class,'update']);
Route::delete("/deleteanswer/{id}",[AnswerController::class,'destroy']);


//-----------------Answer------------------//

//-----------------Count------------------//
Route::get("/count/{question_id_check}", [count::class, 'index']);
//-----------------Count------------------//

//-----------------SystemRole------------------//
Route::get("/sysrole",[SystemRoleController::class,'index']);
//-----------------SystemRole------------------//

//-----------------Status------------------//
Route::get("/status",[StatusController::class,'index']);

//-----------------Status------------------//

//-----------------Branch------------------//
Route::get("/branch", [BranchController::class, 'index']);

//-----------------Branch------------------//

//-----------------System_user------------------//
Route::get("/getsysuser",[SystemUser::class,"get"]);
Route::get("/sysuser", [SystemUserController::class, 'index']);
Route::POST("/addsysuser", [SystemUserController::class, 'store']);
Route::PUT("/updatesysuser/{id}", [SystemUserController::class, 'update']);
Route::get("/sysuser/{id}", [SystemUserController::class, 'getuserbyid']);
Route::get("/sysfilter",[SystemUserController::class, 'getfilter']);
Route::get("/search/{id}", [SystemUserController::class, 'search']);
//-----------------System_user------------------//

//-----------------Cycle------------------//

Route::get("/cycle", [CycleController::class, 'index']);
//-----------------Cycle------------------//


//-------------------Login---------------//
Route::resource('/role', Login::class);

//-------------------Login---------------//