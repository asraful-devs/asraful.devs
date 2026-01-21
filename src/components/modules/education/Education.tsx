'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';
import data from '../../../../public/json/education.json';
import { EducationType } from '../../../types/educationType';

const Education = () => {
    const allEducationData: EducationType[] = data;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9] as const,
            },
        },
    };

    return (
        <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4'>
                        Education
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 text-lg'>
                        My academic journey
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    className='relative'
                >
                    {/* Timeline line - Center on large, left on mobile */}
                    <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 md:transform md:-translate-x-1/2'></div>

                    {allEducationData.map((edu, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <motion.div
                                key={edu.id + index}
                                variants={itemVariants}
                                className='relative pb-12 last:pb-0'
                            >
                                {/* Timeline dot - Left on mobile, center on large */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        delay: index * 0.2,
                                        type: 'spring',
                                        stiffness: 200,
                                    }}
                                    className='absolute left-6 md:left-1/2 top-6 w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-purple-500 border-4 border-white dark:border-gray-950 md:transform md:-translate-x-1/2 z-10'
                                ></motion.div>

                                {/* Content Card - Single side on mobile, alternating on large */}
                                <div
                                    className={`flex pl-20 md:pl-0 ${isLeft ? 'md:justify-start md:pr-[52%]' : 'md:justify-end md:pl-[52%]'}`}
                                >
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: -50,
                                        }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.2,
                                            duration: 0.5,
                                        }}
                                        whileHover={{ scale: 1.03 }}
                                        className='w-full bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border-l-4 border-blue-500'
                                    >
                                        {/* Icon */}
                                        <motion.div
                                            initial={{
                                                rotate: -180,
                                                opacity: 0,
                                            }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            transition={{
                                                delay: index * 0.2 + 0.3,
                                            }}
                                            className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-4'
                                        >
                                            <GraduationCap className='w-6 h-6 text-blue-600 dark:text-blue-400' />
                                        </motion.div>

                                        {/* Degree */}
                                        <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-2'>
                                            {edu.Degree}
                                        </h3>

                                        {/* Institution */}
                                        <p className='text-gray-700 dark:text-gray-300 font-medium mb-3'>
                                            {edu.InstitutionName}
                                        </p>

                                        {/* Duration */}
                                        <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
                                            <Calendar className='w-4 h-4 text-purple-500' />
                                            <span className='text-sm'>
                                                {edu.StartYear} - {edu.EndYear}
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Education;
