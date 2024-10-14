import { Link, Head } from '@inertiajs/react';
import AdminComponent from '@/Components/admin/admin';
import LoadingScreen from './loding';


export default function Admin(props){
    return(
         <div>
            <Head title='welcome to admin' />
            <LoadingScreen />
            <AdminComponent />
        </div>
    );
}
