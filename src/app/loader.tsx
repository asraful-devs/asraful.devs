import Image from 'next/image';

const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-white dark:bg-gray-950'>
            <div className='flex flex-col items-center gap-4'>
                {/* Animated GIF */}
                <Image
                    src='/Loading.gif'
                    alt='Loading...'
                    width={120}
                    height={120}
                    unoptimized
                />

                {/* Minimal text */}
                <p className='text-sm text-gray-600 dark:text-gray-400 font-medium'>
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loader;
