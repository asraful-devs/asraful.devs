'use client';

import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-white dark:bg-gray-950 px-4'>
            <div className='text-center max-w-md'>
                {/* Clean 404 */}
                <h1 className='text-8xl md:text-9xl font-bold text-gray-900 dark:text-white mb-4'>
                    404
                </h1>

                {/* Simple message */}
                <h2 className='text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                    Page Not Found
                </h2>

                <p className='text-gray-500 dark:text-gray-400 mb-8'>
                    The page you&apos;re looking for doesn&apos;t exist.
                </p>

                {/* Minimal buttons */}
                <div className='flex flex-col sm:flex-row gap-3 justify-center'>
                    <Link
                        href='/'
                        className='px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200'
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className='px-6 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200'
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
