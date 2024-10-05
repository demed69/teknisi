import { Link, Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import FileUploadForm from '@/Components/Hompage/FileUploadForm';


export default function Homepage(props) {
    return (
        <div className='min-h-screen bg-neutral-800'>
            <Head title='coba' />
            <Navbar />
            <div className='bg-base-200 p-4'>
                <div className='collapse-title text-xl font-bold'>
                    <h1>Judul Pekerjaan</h1>
                </div>
                <div className='flex justify-between items-center collapse-title frames-description-applicationbottom-3'>
                    <p>Deskripsi Pekerjaan</p>
                    {/* Tombol untuk membuka modal */}
                    <button 
                        className="btn" 
                        onClick={() => document.getElementById('my_modal_3').showModal()}
                    >
                        Open Modal
                    </button>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* Jika ada tombol dalam form, itu akan menutup modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                      <FileUploadForm />  
                    </div>
                </dialog>
            </div>
        </div>
    );
}