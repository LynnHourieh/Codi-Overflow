<?php

namespace App\Http\Controllers;

use App\Models\SystemUser;
use App\Models\Cycle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SystemUserController extends Controller
{
   
    public function index()
    {
        $systemUser = SystemUser::with('status', 'sysrole', "cycle.branch", "questions")->get();
        return response()->json($systemUser);
    }
    public function get(){
        $systemuser = DB::table('system_users')->get();
        return response()->json($systemuser);
    }


    public function getfilter()
    {
        $student = SystemUser::with('status', 'sysrole', "cycle.branch", "questions")->where('systemroles_id', 1)->get();
        $mentor = SystemUser::with('status', 'sysrole', "cycle.branch", "questions")->where('systemroles_id', 2)->get();
        return response()->json([$student,$mentor]);
    }
    public function search(Request $request)
    {

        $name = $request['name'];
        if ($name) {
            $task = DB::table('system_users')->where('name', 'Like', '%' . $name . '%')->get();
            return $task;
        } else {
            $task = SystemUser::all();
            return $task;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $sys_user = new SystemUser();
        if ($request->hasFile('picture')) {
            $getImage = $request->picture;
            $imageName = $getImage->getClientOriginalName();
            $imagePath = public_path() . '/pictures';
            $getImage->move($imagePath, $imageName);
            $sys_user->picture = $imageName;
        }

        $sys_user->name = $request->name;
        $sys_user->username = $request->username;
        $sys_user->email = $request->email;
        $sys_user->systemroles_id = $request->systemroles_id;
        $sys_user->status_id = $request->status_id;
        $sys_user->cycle_id = $request->cycle_id;
        $sys_user->save();
        return $sys_user;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SystemUser  $systemUser
     * @return \Illuminate\Http\Response
     */
    public function getuserbyid($id)
   {

        $task = SystemUser::where("id",$id)->with('status', 'sysrole', "cycle.branch", "questions")->get();
     
        return $task; 
    }
 
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SystemUser  $systemUser
     * @return \Illuminate\Http\Response
     */
    public function edit(SystemUser $systemUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SystemUser  $systemUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $user = SystemUser::findorFail($id);
        if ($request->picture) {
            $imagePath = public_path() . "/pictures/";
            //remove old file
            if ($user->picture = null && $user->picture = "") {
                $file_old = $imagePath . $user->au_logo;
                unlink($file_old);
            }
            //upload new file
            $file = $request->picture;
            $ext = $file->getClientOriginalExtension();
            $filename = time() . "." . $ext;
            $file->move($imagePath, $filename);
            //for update in table           
            $user->picture = $filename;
        }

        $inputuser = $request->except(['_method', 'token', 'picture']);
        $user->update($inputuser);
        // return response()->json($request->picture);
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SystemUser  $systemUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(SystemUser $systemUser)
    {
        //
    }
}
