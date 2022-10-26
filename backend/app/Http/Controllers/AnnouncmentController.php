<?php

namespace App\Http\Controllers;

use App\Models\Announcment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnnouncmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $new = Announcment::with("user")->orderBy('id', 'desc')->get();
        return response()->json($new);
    }
    public function latest()
    {
        $new = Announcment::with("user")->orderBy('id', 'desc')->limit(4)->get();
        return response()->json($new);
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
        $new = new Announcment();
        $new->ne_title = $request->ne_title;
        $new->ne_description = $request->ne_description;
        $new->ne_date = $request->ne_date;
        $new->user_id=$request->user_id;
        $new->save();
        return $new;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Announcment  $announcment
     * @return \Illuminate\Http\Response
     */
    public function show(Announcment $announcment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Announcment  $announcment
     * @return \Illuminate\Http\Response
     */
    public function edit(Announcment $announcment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Announcment  $announcment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        $new = Announcment::findorFail($id);
        $inputNew = $request->except(["_method"]);
        $new->update($inputNew);
        return $new;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Announcment  $announcment
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $new = Announcment::findOrFail($id);
        $new->delete();
        return response()->json(["News Deleted !!"]);
    }
}
