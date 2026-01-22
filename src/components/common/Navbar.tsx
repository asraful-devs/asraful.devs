'use client';

import {
    Award,
    Briefcase,
    Code,
    Contact,
    Home,
    Menu,
    User,
    X,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    // const [activeSection, setActiveSection] = useState('/');

    const navLinks = [
        { name: 'Home', href: '#home', icon: Home },
        { name: 'Projects', href: '#projects', icon: Briefcase },
        { name: 'About', href: '#about', icon: User },
        { name: 'Skills', href: '#skills', icon: Code },
        { name: 'Education', href: '#education', icon: User },
        { name: 'Certificates', href: '#certificates', icon: Award },
        { name: 'Contact', href: '#contact', icon: Contact },
    ];

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setIsOpen(false);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg shadow-blue-500/5'
                    : 'bg-transparent'
            }`}
        >
            <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center space-x-3 group relative'
                    >
                        {/* Icon Container with Glow Effect */}
                        <div className='relative'>
                            <div className='absolute inset-0 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                            <div className='relative w-10 h-10 bg-linear-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300'>
                                <Code className='w-5 h-5 text-white' />
                            </div>
                        </div>

                        {/* Name and Title */}
                        <div className='hidden sm:flex flex-col'>
                            <span className='text-lg font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-purple-500 transition-all duration-300'>
                                Md Asraful
                            </span>
                            <span className='text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>
                                Full Stack Developer
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center space-x-1'>
                        {navLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    key={index}
                                    href={link.href}
                                    onClick={(e) =>
                                        handleNavClick(e, link.href)
                                    }
                                    className='relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 group cursor-pointer'
                                >
                                    <span className='flex items-center space-x-2'>
                                        <Icon className='w-4 h-4 group-hover:scale-110 transition-transform' />
                                        <span>{link.name}</span>
                                    </span>
                                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300'></span>
                                </a>
                            );
                        })}
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center space-x-2'>
                        {/* Theme Toggle */}
                        <ModeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300'
                            aria-label='Toggle menu'
                        >
                            {isOpen ? (
                                <X className='w-5 h-5' />
                            ) : (
                                <Menu className='w-5 h-5' />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-500 ease-in-out ${
                    isOpen
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0 pointer-events-none'
                } overflow-hidden`}
            >
                <div className='px-4 pt-2 pb-4 space-y-2 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-gray-200 dark:border-slate-800 shadow-lg'>
                    {navLinks.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className='flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 group cursor-pointer'
                            >
                                <Icon className='w-5 h-5 group-hover:scale-110 group-hover:rotate-6 transition-transform' />
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
