'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Wrench } from 'lucide-react';
import Image from 'next/image';
import { JSX, useState } from 'react';
import data from '../../../../public/json/skill.json';
import { SkillCategory } from '../../../types/skillType';

const Skill = () => {
    const skillsData: SkillCategory[] = data;
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const getCategoryIcon = (iconName: string) => {
        const icons: Record<string, JSX.Element> = {
            code: <Code2 className='w-6 h-6' />,
            database: <Database className='w-6 h-6' />,
            wrench: <Wrench className='w-6 h-6' />,
        };
        return icons[iconName] || <Code2 className='w-6 h-6' />;
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9] as const,
            },
        },
    };

    return (
        <div className='min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <motion.div
                    variants={headerVariants}
                    initial='hidden'
                    animate='visible'
                    className='text-center mb-20'
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            delay: 0.2,
                        }}
                        className='inline-block mb-4'
                    >
                        <span className='px-4 py-2 bg-linear-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-500/20'>
                            Tech Stack
                        </span>
                    </motion.div>
                    <h2 className='text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight'>
                        Skills & Technologies
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto'>
                        Modern tools and frameworks I use to build exceptional
                        digital experiences
                    </p>
                </motion.div>

                {/* Bento Grid Layout */}
                <motion.div
                    variants={containerVariants}
                    initial='hidden'
                    animate='visible'
                    className='space-y-8'
                >
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{
                                opacity: 0,
                                x: categoryIndex % 2 === 0 ? -100 : 100,
                            }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.7,
                                delay: categoryIndex * 0.2,
                                ease: [0.6, 0.05, 0.01, 0.9],
                            }}
                            className='relative group'
                        >
                            {/* Category Card */}
                            <div className='bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-500'>
                                {/* Gradient Background Effect */}
                                <div className='absolute inset-0 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                                {/* Category Header */}
                                <div className='relative flex items-center gap-4 mb-8 pb-6 border-b border-gray-200 dark:border-gray-800'>
                                    <motion.div
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className='p-4 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl text-white shadow-lg'
                                    >
                                        {getCategoryIcon(category.icon)}
                                    </motion.div>
                                    <div>
                                        <h3 className='text-3xl font-bold text-gray-900 dark:text-white'>
                                            {category.category}
                                        </h3>
                                        <p className='text-sm text-gray-500 dark:text-gray-400'>
                                            {category.skills.length}{' '}
                                            technologies
                                        </p>
                                    </div>
                                </div>

                                {/* Skills Bento Grid */}
                                <div className='relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4'>
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0,
                                                    rotateY: -180,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                    rotateY: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        categoryIndex * 0.2 +
                                                        skillIndex * 0.05,
                                                    duration: 0.5,
                                                    type: 'spring',
                                                    stiffness: 200,
                                                }}
                                                whileHover={{
                                                    scale: 1.15,
                                                    y: -8,
                                                    zIndex: 10,
                                                }}
                                                onHoverStart={() =>
                                                    setHoveredSkill(skill.name)
                                                }
                                                onHoverEnd={() =>
                                                    setHoveredSkill(null)
                                                }
                                                className='relative aspect-square'
                                            >
                                                <div className='w-full h-full bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-blue-500/50 group/item'>
                                                    {/* Icon */}
                                                    <div className='relative w-12 h-12 flex items-center justify-center'>
                                                        <Image
                                                            src={skill.icon}
                                                            alt={skill.name}
                                                            width={48}
                                                            height={48}
                                                            className='object-contain transition-transform duration-300 group-hover/item:scale-110'
                                                            onError={(e) => {
                                                                // Fallback to colored placeholder
                                                                const target =
                                                                    e.target as HTMLImageElement;
                                                                target.style.display =
                                                                    'none';
                                                                target.nextElementSibling?.classList.remove(
                                                                    'hidden'
                                                                );
                                                            }}
                                                        />
                                                        <div
                                                            className='hidden w-12 h-12 rounded-lg items-center justify-center text-white font-bold text-xs'
                                                            style={{
                                                                backgroundColor:
                                                                    skill.color,
                                                            }}
                                                        >
                                                            {skill.name
                                                                .slice(0, 2)
                                                                .toUpperCase()}
                                                        </div>
                                                    </div>

                                                    {/* Skill Name - Show on hover */}
                                                    <motion.p
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity:
                                                                hoveredSkill ===
                                                                skill.name
                                                                    ? 1
                                                                    : 0,
                                                            height:
                                                                hoveredSkill ===
                                                                skill.name
                                                                    ? 'auto'
                                                                    : 0,
                                                        }}
                                                        className='text-[10px] text-center font-semibold text-gray-800 dark:text-gray-200 leading-tight overflow-hidden'
                                                    >
                                                        {skill.name}
                                                    </motion.p>
                                                </div>

                                                {/* Tooltip */}
                                                {hoveredSkill ===
                                                    skill.name && (
                                                    <motion.div
                                                        initial={{
                                                            opacity: 0,
                                                            y: 10,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                        }}
                                                        className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg z-20'
                                                    >
                                                        {skill.name}
                                                        <div className='absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45'></div>
                                                    </motion.div>
                                                )}
                                            </motion.div>
                                        )
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Skill;
