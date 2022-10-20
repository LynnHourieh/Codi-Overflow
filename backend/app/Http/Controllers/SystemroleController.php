<?php

namespace App\Http\Controllers;

use App\Models\Systemrole;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SystemroleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sysrole = DB::table('systemroles')->get();
        return response()->json($sysrole);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Systemrole  $systemrole
     * @return \Illuminate\Http\Response
     */
    public function show(Systemrole $systemrole)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Systemrole  $systemrole
     * @return \Illuminate\Http\Response
     */
    public function edit(Systemrole $systemrole)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Systemrole  $systemrole
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Systemrole $systemrole)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Systemrole  $systemrole
     * @return \Illuminate\Http\Response
     */
    public function destroy(Systemrole $systemrole)
    {
        //
    }
}
