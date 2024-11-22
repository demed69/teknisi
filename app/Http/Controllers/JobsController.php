<?php

namespace App\Http\Controllers;

use App\Models\Jobs; // Pastikan Anda memiliki model Job
use Illuminate\Http\Request;

class JobController extends Controller
{
    // Mendapatkan semua pekerjaan
    public function index()
    {
        $jobs = Jobs::all();
        return response()->json($jobs);
    }

    // Menambahkan pekerjaan baru
    public function store(Request $request)
    {
        $job = Jobs::create($request->all());
        return response()->json($job, 201);
    }

    // Tambahkan metode lain sesuai kebutuhan
}
