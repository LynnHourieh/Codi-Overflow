<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
   
    public function index()
    {
        $new=DB::table('news')->orderBy('ne_date','asc')->get();
        return response()->json($new);
    }

   
    public function create()
    {
        //
    }

 
    public function store(Request $request)
    {
        $new= new News();
        $new->ne_title=$request->ne_title;
        $new->ne_description=$request->ne_description;
        $new->ne_date=$request->ne_date;
        $new->save();
        return $new;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(News $news)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function edit(News $news)
    {
        //
    }

  
    public function update(Request $request, $id)
    {
        $new=News::findorFail($id);
     
        $inputNew = $request->except(["_method"]);
        $new->update($inputNew);
        return $new;
        
    }

 
    public function destroy($id)
    {
        $new = News::findOrFail($id);
        $new->delete();
      return response()->json(["News Deleted !!"]);
    }
}
