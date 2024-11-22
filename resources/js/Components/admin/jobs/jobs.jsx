import React, { useState } from 'react';
import Tambah_Jobs from './tambah_jobs';
z 
const Jobs = () => {
    const [selectedWorker, setSelectedWorker] = useState('');

    return (
        <div>
            <div className='mb-2'>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button 
                    className="btn btn-success" 
                    onClick={() => document.getElementById('my_modal_2').showModal()}
                >
                    tambah kegiatan
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <Tambah_Jobs />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
                {/*pemisah*/}
                <button className='btn btn-error ml-2'>hapus</button>
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
                        <option value="">semua</option>
                        <option value="azriel">azriel</option>
                        <option value="waluyo">waluyo</option>
                        <option value="suradi">suradi</option>
                    </select>
                </label>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>no</th>
                            <th>Name</th>
                            <th>tugas</th>
                            <th>description</th>
                            <th>deadline</th>
                            <th>status</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='text-black'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>description</td>
                            <td>date</td>
                            <td>Blue</td>
                            <td>
                                <button className='btn btn-success text-white'>edit</button>
                                <button className='btn btn-error text-white ml-2'>hapus</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Jobs;