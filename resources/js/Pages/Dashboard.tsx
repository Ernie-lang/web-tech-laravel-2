import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />
            {/* Adding a container div with background image styling */}
            <div className="min-h-screen bg-cover bg-center bg-no-repeat" 
                 style={{ 
                     backgroundImage: `url('https://www.escapefromtarkov.com/themes/eft/images/preorder-eft/art/desktopbanner.png')` 
                 }}>
                <div className="overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm sm:rounded-lg dark:bg-gray-800/80 mx-4 mt-4 text-center">
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <h1 className='text-xl'>Welcome to Escape From Tarkov.</h1>
                        <p>To see our new game features please go to Features page.</p> <br />
                        <p className='text-base text-red-600'>Happy Hunting!</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}