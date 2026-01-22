'use client';

import {
    ArrowUp,
    Briefcase,
    Code,
    Facebook,
    Github,
    Instagram,
    Link as LinkIcon,
    Linkedin,
    LucideIcon,
    Mail,
    MapPin,
    Phone,
    Send,
    User,
    Youtube,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import footerDataJson from '../../../public/json/footer.json';

const Footer = () => {
    const footerData = footerDataJson;
    const [email, setEmail] = useState('');
    // const [isScrolled, setIsScrolled] = useState(false);

    // Social icon mapping
    const iconMap: Record<string, LucideIcon> = {
        Linkedin: Linkedin,
        Github: Github,
        Facebook: Facebook,
        Instagram: Instagram,
        Youtube: Youtube,
    };

    const socialLinks = footerData.socialLinks.map((social) => ({
        ...social,
        icon: iconMap[social.icon] || LinkIcon,
    }));

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home', icon: User },
        { name: 'Project', href: '#projects', icon: Briefcase },
        { name: 'Skill', href: '#skills', icon: Code },
        { name: 'Education', href: '#education', icon: User },
        { name: 'About', href: '#about', icon: User },
    ];

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Subscribed successfully!');
        setEmail('');
    };

    return (
        <footer className='relative mt-20 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950'>
            {/* Animated Wave */}
            <div className='absolute top-0 left-0 w-full overflow-hidden leading-none -mt-1'>
                <svg
                    className='relative block w-full h-16 md:h-20'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1200 120'
                    preserveAspectRatio='none'
                >
                    <path
                        d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
                        className='fill-white dark:fill-slate-950 animate-[wave_10s_ease-in-out_infinite]'
                    ></path>
                </svg>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-6'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                    {/* Brand Section - Compact */}
                    <div className='lg:col-span-1'>
                        <div className='flex items-center space-x-2 mb-3 group'>
                            <div className='w-9 h-9 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300'>
                                <Code className='w-5 h-5 text-white animate-pulse' />
                            </div>
                            <h3 className='text-lg font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                                {footerData.name}
                            </h3>
                        </div>
                        <p className='text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed'>
                            Crafting digital experiences with passion and
                            precision.
                        </p>
                        <div className='space-y-2'>
                            <a
                                href={`mailto:${footerData.email}`}
                                className='flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group'
                            >
                                <Mail className='w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform' />
                                <span className='truncate'>
                                    {footerData.email}
                                </span>
                            </a>
                            <a
                                href={`tel:${footerData.phone}`}
                                className='flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group'
                            >
                                <Phone className='w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:rotate-12 transition-transform' />
                                <span>{footerData.phone}</span>
                            </a>
                            <div className='flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 group'>
                                <MapPin className='w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform' />
                                <span>{footerData.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links - Compact */}
                    <div>
                        <h4 className='text-sm font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
                            <div className='w-1 h-4 bg-linear-to-b from-blue-500 to-indigo-600 rounded-full mr-2'></div>
                            Quick Links
                        </h4>
                        <ul className='space-y-2'>
                            {quickLinks.map((link, index) => {
                                const Icon = link.icon;
                                return (
                                    <li
                                        key={index}
                                        className='transform hover:translate-x-2 transition-transform duration-300'
                                    >
                                        <Link
                                            href={link.href}
                                            className='flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200 group'
                                        >
                                            <Icon className='w-3.5 h-3.5 group-hover:rotate-12 transition-transform' />
                                            <span>{link.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Newsletter - Compact */}
                    <div className='lg:col-span-2'>
                        <h4 className='text-sm font-bold mb-4 text-gray-900 dark:text-white flex items-center'>
                            <div className='w-1 h-4 bg-linear-to-b from-blue-500 to-indigo-600 rounded-full mr-2'></div>
                            Stay Updated
                        </h4>
                        <p className='text-xs text-gray-600 dark:text-gray-400 mb-3'>
                            Get the latest updates and news.
                        </p>
                        <form onSubmit={handleSubscribe} className='flex gap-2'>
                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter email'
                                className='flex-1 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300'
                                required
                            />
                            <button
                                type='submit'
                                className='bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 text-white p-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group'
                                aria-label='Subscribe'
                            >
                                <Send className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section - Compact */}
                <div className='border-t border-gray-300 dark:border-slate-700 pt-6'>
                    <div className='flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0'>
                        {/* Social Links */}
                        <div className='flex flex-wrap gap-2'>
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='group w-9 h-9 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-linear-to-br hover:from-blue-500 hover:via-indigo-500 hover:to-purple-600 transition-all duration-300 hover:scale-110 hover:rotate-6 shadow-md hover:shadow-xl'
                                        aria-label={social.name}
                                    >
                                        <Icon className='w-4 h-4 text-gray-700 dark:text-gray-400 group-hover:text-white transition-colors' />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Copyright */}
                        <p className='text-xs text-gray-600 dark:text-gray-400'>
                            © {currentYear} {footerData.name}. All rights
                            reserved.
                        </p>

                        {/* Scroll to Top */}
                        <button
                            onClick={scrollToTop}
                            className='group w-9 h-9 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl'
                            aria-label='Scroll to top'
                        >
                            <ArrowUp className='w-4 h-4 text-white group-hover:-translate-y-1 transition-transform' />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
