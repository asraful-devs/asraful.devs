import { Github, Mail, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import hero from '../../../public/json/hero.json';

interface HeroData {
    badge: string;
    name: string;
    title: string;
    highlightedWord: string;
    description: string;
    descriptionHighlight: string;
    location: string;
    status: string;
    expertise: string;
    email: string;
    image: string;
    imageAlt: string;
    cardInfo: {
        initials: string;
        fullName: string;
        badgeText: string;
        role: string;
        userCount: string;
    };
    socialLinks: Array<{
        icon: string;
        href: string;
        name: string;
        type: string;
    }>;
}

const Hero = async () => {
    const data: HeroData = hero;

    return (
        <section className='relative py-8 sm:py-6 lg:py-12 px-4 overflow-hidden'>
            {/* Animated Background Elements */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
                <div className='absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700'></div>
            </div>

            <div className='max-w-7xl mx-auto'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
                    {/* Left Side - Developer Info */}
                    <div className='order-2 lg:order-1 space-y-6'>
                        {/* Badge */}
                        <div className='inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full border border-blue-500/20 dark:border-blue-500/30'>
                            <Sparkles className='w-4 h-4 text-blue-600 dark:text-blue-400' />
                            <span className='text-sm font-semibold text-gray-700 dark:text-gray-300'>
                                {data.badge}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className='space-y-4'>
                            <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight'>
                                Hi, I&apos;m{' '}
                                <span className='text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-600'>
                                    {data.name}
                                </span>
                            </h1>

                            <h2 className='text-xl sm:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-gray-400'>
                                {data.title}
                            </h2>
                        </div>

                        {/* Quick Info */}
                        <div className='flex flex-wrap gap-3'>
                            <div className='flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700'>
                                <MapPin className='w-4 h-4 text-blue-600 dark:text-blue-400' />
                                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    {data.location}
                                </span>
                            </div>
                            <div className='flex items-center gap-2 px-4 py-2 bg-linear-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 rounded-lg border border-green-500/30'>
                                <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                                <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
                                    {data.status}
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-wrap gap-4 pt-4'>
                            <a
                                href='#contact'
                                className='group flex items-center gap-3 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'
                            >
                                <Mail className='w-5 h-5' />
                                <span className='font-semibold'>Hire Me</span>
                            </a>
                            <a
                                href={
                                    data.socialLinks.find(
                                        (link) => link.icon === 'Github'
                                    )?.href
                                }
                                target='_blank'
                                className='group flex items-center gap-3 px-8 py-3 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-slate-700'
                            >
                                <Github className='w-5 h-5' />
                                <span className='font-semibold'>GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Developer Photo */}
                    <div className='order-1 lg:order-2'>
                        <div className='relative'>
                            {/* Glow Effects */}
                            <div className='absolute -inset-8 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20 animate-pulse'></div>

                            {/* Main Image Container */}
                            <div className='relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-700 transform hover:scale-105 transition-transform duration-500'>
                                <Image
                                    src={data.image}
                                    alt={data.imageAlt}
                                    className='w-full h-100.5 sm:h-132.5 lg:h-142.5 object-cover'
                                    width={500}
                                    height={550}
                                    priority
                                />

                                {/* Gradient Overlay */}
                                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
