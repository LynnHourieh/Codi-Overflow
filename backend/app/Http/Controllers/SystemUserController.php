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


    public function getfilter()
    {
        $student = SystemUser::with('status', 'sysrole', "cycle.branch", "questions")->where('systemroles_id', 1)->get();
        $mentor = SystemUser::with('status', 'sysrole', "cycle.branch", "questions")->where('systemroles_id', 2)->get();
        return response()->json([$student,$mentor]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SystemUser  $systemUser
     * @return \Illuminate\Http\Response
     */
    public function show($id)
   {

        $task = SystemUser::findorFail($id);
        $task->get();
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
    public function update(Request $request, SystemUser $systemUser)
    {
        //
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
