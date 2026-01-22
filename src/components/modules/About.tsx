import {
    Award,
    Briefcase,
    Code2,
    Download,
    Heart,
    Target,
    Trophy,
    Users,
    Zap,
} from 'lucide-react';
import Image from 'next/image';
import aboutData from '../../../public/json/about.json';
import hero from '../../../public/json/hero.json';

interface Stat {
    number: string;
    label: string;
    icon: string;
}

interface Highlight {
    title: string;
    description: string;
    icon: string;
}

interface AboutData {
    title: string;
    subtitle: string;
    description: string;
    highlight: string;
    stats: Stat[];
    highlights: Highlight[];
    imageUrl: string;
    resumeUrl: string;
    resumeFileName: string;
}

const About = () => {
    const data: AboutData = aboutData;
    const heroData = hero;

    const getIcon = (iconName: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const icons: { [key: string]: any } = {
            Trophy,
            Briefcase,
            Users,
            Award,
            Code2,
            Zap,
            Heart,
            Target,
        };
        return icons[iconName] || Code2;
    };

    return (
        <section className='relative py-20 px-4 overflow-hidden bg-linear-to-b from-transparent via-blue-50/30 to-transparent dark:via-slate-900/30'>
            {/* Background Elements */}
            <div className='absolute inset-0 -z-10'>
                <div className='absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
                <div className='absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>
            </div>

            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4'>
                        {data.title}
                    </h2>
                    <p className='text-xl text-gray-600 dark:text-gray-400'>
                        {data.subtitle}
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12'>
                    {/* Left Side - Image */}
                    <div className='relative flex justify-center'>
                        <div className='absolute inset-0 bg-linear-to-br from-orange-400 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse'></div>
                        <div className='relative w-112.5 h-112.5 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-slate-700 ring-4 ring-orange-500/30'>
                            <Image
                                src={data.imageUrl}
                                alt={heroData.imageAlt}
                                className='w-full h-full object-cover'
                                width={450}
                                height={450}
                            />
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className='space-y-6'>
                        {/* Description */}
                        <div className='space-y-4'>
                            <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                                {data.description}
                            </p>
                            <p className='text-lg font-medium text-gray-900 dark:text-white bg-linear-to-r from-orange-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-4 rounded-xl border-l-4 border-orange-500'>
                                {data.highlight}
                            </p>
                        </div>

                        {/* Resume Download Button */}
                        <div className='pt-4'>
                            <a
                                href={data.resumeUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg'
                            >
                                <Download className='w-5 h-5' />
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Highlights Grid - Full Width Below */}
                <div className='grid md:grid-cols-2 gap-6'>
                    {data.highlights.map((highlight, index) => {
                        const Icon = getIcon(highlight.icon);
                        return (
                            <div
                                key={index}
                                className='flex gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300'
                            >
                                <div className='shrink-0'>
                                    <div className='w-12 h-12 bg-linear-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center'>
                                        <Icon className='w-6 h-6 text-white' />
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                                        {highlight.title}
                                    </h3>
                                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                                        {highlight.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
