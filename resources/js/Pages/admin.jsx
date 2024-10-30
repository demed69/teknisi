import { Link, Head } from '@inertiajs/react';
import AdminComponent from '@/Components/admin/admin';
import LoadingScreen from '@/Pages/loding';
import '@/Pages/css/admin.css'; // Import CSS untuk styling responsif

export default function Admin(props){
    return(
         <div className="admin-container justify-content-center">
            <Head title='welcome to admin' />
            <LoadingScreen />
            <AdminComponent />
        </div>
    );
}
