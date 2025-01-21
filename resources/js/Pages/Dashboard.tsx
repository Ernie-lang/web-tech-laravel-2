import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            
        >
            <Head title="Dashboard" />

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            This is just a page to let you know that you have logged in successfully.
                            You are welcome to stay on this page, but all the fun stuff is on the Features page!
                            
                        </div>
                    </div>
        </AuthenticatedLayout>
    );
}
