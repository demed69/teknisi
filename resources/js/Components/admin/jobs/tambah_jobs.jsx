import React, { useState } from 'react';

const Tambah_Jobs = () => {
    const [selectedWorker, setSelectedWorker] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateLine, setDateLine] = useState('');

    return (
        <div>
            <div className="justify-content-center mb-2 text-center text-3xl">Tambah Jobs</div>

            <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">pilih pekerja</span>
                    </div>
                    <select 
                        placeholder="pilih pekerja" 
                        className="input input-bordered w-full max-w-xs" 
                        value={selectedWorker} 
                        onChange={(e) => setSelectedWorker(e.target.value)}
                    >
                        <option value="">-- Pilih Pekerja --</option>
                        <option value="azriel">azriel</option>
                        <option value="waluyo">waluyo</option>
                        <option value="suradi">suradi</option>
                    </select>
                </label>
            </div>

            <div>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Judul Pekerjaan</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Type here" 
                        className="input input-bordered w-full max-w-xs" 
                        value={jobTitle} 
                        onChange={(e) => setJobTitle(e.target.value)} 
                    />
                </label>
            </div>

            <div>
                <div>
                    <span className='label-text'>Description</span>
                </div>
                <textarea 
                    className="textarea textarea-accent" 
                    placeholder="isi penjelasan yang di perbaiki" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>

            <div>
                <label className="form-control w-full max-w-xs mb-6">
                    <div className="label">
                        <span className="label-text">Date Line</span>
                    </div>
                    <input 
                        type="date" 
                        className="input input-bordered w-full max-w-xs" 
                        value={dateLine} 
                        onChange={(e) => setDateLine(e.target.value)} 
                    />
                </label>
            </div>

        <div className="flex justify-end">
            <button className="btn btn-active btn-accent">Tambah Pengguna</button>
        </div>

        </div>
    );
}

export default Tambah_Jobs;