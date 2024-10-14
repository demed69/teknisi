import React, { useState } from 'react';

const TambahUser = () => {
 
  return (
    
    <div  >
        <div className="justify-content-center mb-2 text-center text-3xl">tambah pengguna</div>


        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">nama</span>
                </div>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>

        
        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Email</span>
                </div>
                <input type="text" placeholder="blabla@mail.com" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>

        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">No Tlp</span>
                </div>
                <input type="number" placeholder="0888888" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>


        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Tanggal Lahir</span>
                </div>
                <input type="date"  className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>


        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">alamat</span>
                </div>
                <input type="text" placeholder="0888888" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>


        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">gaji</span>
                </div>
                <input type="number" placeholder="contoh Rp. 2.000.000" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>


        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">password</span>
                </div>
                <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>


        <div>
                <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">ulangi Password</span>
                </div>
                <input type="password" placeholder="ulangi password" className="input input-bordered w-full max-w-xs" />
                <div className="label">
                </div>
                </label>
        </div>

        <div className="flex justify-end">
            <button className="btn btn-active btn-accent">Tambah Pengguna</button>
        </div>

    </div>
  );
};

export default TambahUser;
