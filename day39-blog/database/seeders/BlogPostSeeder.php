<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class BlogPostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1, 50) as $index) {
            DB::table('blog_posts')->insert([
                'title' => $faker->text,
                'body' => $faker->paragraph,
                'user_id' => (int)(($index - 1) / 5) + 1
            ]);
        }
    }
}
