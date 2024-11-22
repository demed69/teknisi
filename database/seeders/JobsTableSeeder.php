<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class JobsTableSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 10) as $index) {
            DB::table('jobs')->insert([
                'nama' => $faker->jobTitle,
                'tugas' => $faker->sentence,
                'description' => $faker->paragraph,
                'start_tugas' => $faker->dateTimeBetween('-1 month', 'now')->format('Y-m-d'),
                'date_line' => $faker->dateTimeBetween('now', '+1 month')->format('Y-m-d'),
                'status' => $faker->randomElement(['Belum Dikerjakan', 'Sedang Dikerjakan', 'Selesai']),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
