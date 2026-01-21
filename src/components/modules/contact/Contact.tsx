'use client';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
    Github,
    Globe,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import contactData from '../../../../public/json/contact.json';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            toast.error('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // EmailJS configuration
            // Replace these with your actual EmailJS credentials
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
            const templateParams = {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                time: new Date().toLocaleString(),
            };

            await emailjs.send(
                serviceId as string,
                templateId as string,
                templateParams,
                publicKey as string
            );

            toast.success(
                'Message sent successfully! I will get back to you soon.'
            );

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Email send error:', error);
            toast.error(
                'Failed to send message. Please try again or email me directly.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            label: 'Location',
            value: contactData.location,
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Mail,
            label: 'Email',
            value: contactData.email,
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: contactData.phone,
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: Globe,
            label: 'Website',
            value: contactData.website,
            color: 'from-orange-500 to-red-500',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: contactData.gitHub,
            color: 'from-gray-700 to-gray-900',
            link: contactData.gitHub,
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: contactData.linkedIn,
            color: 'from-blue-600 to-blue-800',
            link: contactData.linkedIn,
        },
    ];

    return (
        <div className='container mx-auto px-4 py-8 max-w-6xl'>
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-4xl md:text-5xl font-bold mb-4 text-center bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
            >
                Get In Touch
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-center text-gray-600 dark:text-gray-400 mb-12 text-lg'
            >
                Have a question or want to work together? Feel free to reach
                out!
            </motion.p>

            {/* Two Column Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* Left Side - Contact Info Cards */}
                <section>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className='text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100'
                    >
                        Contact Information
                    </motion.h2>
                    <div className='space-y-4'>
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.4 + index * 0.1,
                                    }}
                                    whileHover={{ x: 8, scale: 1.02 }}
                                    className='bg-white dark:bg-slate-800 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700'
                                >
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='flex items-center gap-4'
                                        >
                                            <div
                                                className={`w-14 h-14 rounded-lg bg-linear-to-r ${info.color} flex items-center justify-center shrink-0`}
                                            >
                                                <Icon className='w-7 h-7 text-white' />
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-1'>
                                                    {info.label}
                                                </h3>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 wrap-break-word hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors'>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </a>
                                    ) : (
                                        <div className='flex items-center gap-4'>
                                            <div
                                                className={`w-14 h-14 rounded-lg bg-linear-to-r ${info.color} flex items-center justify-center shrink-0`}
                                            >
                                                <Icon className='w-7 h-7 text-white' />
                                            </div>
                                            <div>
                                                <h3 className='font-semibold text-gray-900 dark:text-gray-100 mb-1'>
                                                    {info.label}
                                                </h3>
                                                <p className='text-sm text-gray-600 dark:text-gray-400 wrap-break-word'>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* Right Side - Contact Form */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className='bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700 h-full'
                    >
                        <h2 className='text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
                            Send Me a Message
                        </h2>

                        <form
                            onSubmit={handleSubmit}
                            className='space-y-4 sm:space-y-6'
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <label
                                    htmlFor='name'
                                    className='block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Full Name
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='John Doe'
                                    // required
                                    className='w-full px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-700 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all duration-200'
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.9 }}
                            >
                                <label
                                    htmlFor='email'
                                    className='block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Email Address
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='john@example.com'
                                    // required
                                    className='w-full px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-700 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all duration-200'
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.0 }}
                            >
                                <label
                                    htmlFor='subject'
                                    className='block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Subject
                                </label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder='Project Inquiry / Collaboration / General Question'
                                    className='w-full px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-700 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all duration-200'
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 1.1 }}
                            >
                                <label
                                    htmlFor='message'
                                    className='block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Tell me about your project or just say hello...'
                                    rows={5}
                                    // required
                                    className='w-full px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base border-2 border-gray-200 dark:border-slate-700 rounded-lg sm:rounded-xl bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-600 dark:focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none transition-all duration-200 resize-none'
                                />
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1.2 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type='submit'
                                disabled={isSubmitting}
                                className='w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed'
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className='w-4 h-4 sm:w-5 sm:h-5' />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
