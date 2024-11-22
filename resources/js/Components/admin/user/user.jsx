import React from 'react';
import TambahUser from './Tambah_user';

const UserList = () => {
  return (
    <>
    <div className='flex flex-row '>
     {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-success" onClick={()=>document.getElementById('my_modal_2').showModal()}>Tambah Pengguna</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <TambahUser />
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
      <div className="ml-2 mb-2"> {/* Tambahkan margin kiri */}
        <button className="btn btn-error">Hapus</button>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Gaji</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-black">Hart Hagerty</div>
                  <div className="text-sm text-black opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Rp. 200.000.000</td>
            <th>
              <button className="btn btn-success text-black">edit</button>
              <button className="btn btn-error text-black ml-1">Hapus</button>
           
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default UserList;
