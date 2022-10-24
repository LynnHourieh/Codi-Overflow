<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $question = Question::with("category", "systemUser.sysrole")->orderBy('q_date', 'desc')->get();
        // return response()->json($question);
        $question = Question::orderBy("q_date", "ASC")->with("category", "systemUser.sysrole")->get();
        return response()->json($question);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $question = new Question();
        if ($request->hasFile('q_image')) {
            $getImage = $request->q_image;
            $imageName = $getImage->getClientOriginalName();
            $imagePath = public_path() . '/pictures';
            $getImage->move($imagePath, $imageName);
            $question->q_image = $imageName;
        }

        $question->q_text = $request->q_text;
        $question->q_date = $request->q_date;
        $question->system_user_id = $request->system_user_id;
        $question->category_id = $request->category_id;

        $question->save();
        return $question;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $user = Question::findorFail($id);
        if ($request->q_image) {
            $imagePath = public_path() . "/pictures/";
            //remove old file
            if ($user->q_image = null && $user->q_image = "") {
                $file_old = $imagePath . $user->q_image;
                unlink($file_old);
            }
            //upload new file
            $file = $request->q_image;
            $ext = $file->getClientOriginalExtension();
            $filename = time() . "." . $ext;
            $file->move($imagePath, $filename);
            //for update in table           
            $user->q_image = $filename;
        }

        $inputuser = $request->except(['_method', 'token', 'q_image']);
        $user->update($inputuser);
        // return response()->json($request->picture);
        return $user;
    }
    public function check(Request $request ,Answer $answer)
    {

        $task = $answer->where('question_id', $request->question_check_id)->get();
        return ["status" => $task];

        // $question_check_id = $request->input("question_id_check");
        // $task = DB::table("answers")->where("question_id", $question_check_id);

        // return ["status"=>$task->get()];
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
    $task=Question::findOrFail($id);
    $task->delete();
    return "Deleted ";
    }
   
}
