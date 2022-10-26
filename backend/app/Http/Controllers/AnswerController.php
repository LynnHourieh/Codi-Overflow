<?php

namespace App\Http\Controllers;

use App\Models\Answer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnswerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $answer = Answer::with('system_user',"question")->orderBy('id', 'desc')->get();
        return response()->json($answer);
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
        $answer = new Answer();
        if ($request->hasFile('a_image')) {
            $getImage = $request->a_image;
            $imageName = $getImage->getClientOriginalName();
            $imagePath = public_path() . '/pictures';
            $getImage->move($imagePath, $imageName);
            $answer->a_image = $imageName;
        }

        $answer->a_text = $request->a_text;
        $answer->a_date = $request->a_date;
        $answer->question_id= $request->question_id;
        $answer->user_id = $request->user_id;

        $answer->save();
        return $answer;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function show(Answer $answer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function edit(Answer $answer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = Answer::findorFail($id);
        if ($request->a_image) {
            $imagePath = public_path() . "/pictures/";
            //remove old file
            if ($user->a_image = null && $user->a_image = "") {
                $file_old = $imagePath . $user->a_image;
                unlink($file_old);
            }
            //upload new file
            $file = $request->a_image;
            $ext = $file->getClientOriginalExtension();
            $filename = time() . "." . $ext;
            $file->move($imagePath, $filename);
            //for update in table           
            $user->a_image = $filename;
        }

        $inputuser = $request->except(['_method', 'token', 'a_image']);
        $user->update($inputuser);
        // return response()->json($request->picture);
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Answer  $answer
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Answer::findOrFail($id);
        $task->delete();
        return "Deleted ";
    }
}
