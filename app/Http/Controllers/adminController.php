<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class adminController extends Controller
{
    public function index()
    {
        $jobs = Job::all();
        return response()->json($jobs);
    }

    public function create()
    {
        // Logika untuk menampilkan form pembuatan admin
    }

    public function store(Request $request)
    {
        // Logika untuk menyimpan data admin baru
    }

    public function edit($id)
    {
        // Logika untuk menampilkan form edit admin
    }

    public function update(Request $request, $id)
    {
        // Logika untuk memperbarui data admin
    }

    public function destroy($id)
    {
        // Logika untuk menghapus data admin
    }
}
