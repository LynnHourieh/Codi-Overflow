<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Branch;
use App\Models\Category;
use App\Models\Cycle;
use App\Models\News;
use App\Models\Question;
use App\Models\Status;
use App\Models\Systemrole;
use App\Models\SystemUser;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        Branch::create([
            "br_name"=>"Zahle"
        ]);
        Branch::create([
            "br_name" => "Beruit"
        ]);
        Branch::create([
            "br_name" => "Tripoli"
        ]);
        Cycle::create([
            "cy_name"=>"Z01",
            "branch_id"=>1
        ]);
          Cycle::create([
            "cy_name"=>"B01",
            "branch_id"=>2
          ]);
            Cycle::create([
            "cy_name"=>"T01",
            "branch_id"=>3
            ]);
        Cycle::create([
            "cy_name" => "B02",
            "branch_id" => 2
        ]);
        Cycle::create([
            "cy_name" => "T02",
            "branch_id" => 3
        ]);
        Systemrole::create([
            "sys_name"=>"Student",
       
        ]);
         Systemrole::create([
            "sys_name"=>"Mentor"
         ]);
         Status::create([
            "st_name"=>"ungraduated",
            
         ]);
        Status::create([
            "st_name" => "alumni",

        ]);

        News::create([
            "ne_title"=>"Job Opportunity",
            "ne_description"=>"Frontend web developer needed in Tripoli",
            "ne_date"=>"3/3/2021",
        ]);
        Category::create([
            "cat_name"=>"Frontend"
        ]);
        Category::create([
            "cat_name" => "Backednd"
        ]);
        Category::create([
            "cat_name" => "Database"
        ]);
        SystemUser::create([
            "username"=>"lynn.h",
            "name"=>"lynn hourieh",
            "email"=>"lynn.h@hotmail.com",
            "password"=>"0000",
            "picture"=>"man.jpg",
            "cycle_id"=>1,
            "status_id"=>1,
            "systemroles_id"=>1,
        ]);
        SystemUser::create([
            "username" => "esa",
            "name" => "essam Sh",
            "email" => "esa.sh@hotmail.com",
            "password" => "0000",
            "picture" => "man.jpg",
            "cycle_id" => 2,
            "systemroles_id" => 2,
        ]);
        Question::create([
            "q_date"=>"4/4/2022",
            "q_text"=>"error 500",
            "q_image"=>"man.jpg",
            "system_user_id"=>1,
            "category_id"=>2,
        ]);
        Question::create([
            "q_date" => "4/4/2022",
            "q_text" => "image error",
            
            "system_user_id" => 1,
            "category_id" => 1,
        ]);
        Question::create([
            "q_date" => "4/4/2022",
            "q_text" => "relational",
            "q_image" => "man.jpg",
            "system_user_id" => 1,
            "category_id" => 3,
        ]);

    }
}
