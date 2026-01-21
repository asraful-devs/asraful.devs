'use client';
import { ProjectType } from '@/types/projectType';
import { motion } from 'framer-motion';
import { ExternalLink, FileText, Github, Video } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectDetailsProps {
    project: ProjectType;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
    const [imageError, setImageError] = useState(false);
    const fallbackImage = 'https://i.ibb.co.com/Qj9JV75V/59273.jpg';

    return (
        <div className='container mx-auto px-4 py-8 max-w-5xl'>
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    href='/projects'
                    className='inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6'
                >
                    ← Back to Projects
                </Link>
            </motion.div>

            {/* Project Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='text-4xl font-bold mb-6'
            >
                {project.title}
            </motion.h1>

            {/* Project Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='relative w-full h-96 mb-8 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800'
            >
                <Image
                    src={
                        imageError
                            ? fallbackImage
                            : project.image || fallbackImage
                    }
                    alt={project.title}
                    fill
                    className='object-cover'
                    onError={() => setImageError(true)}
                />
            </motion.div>

            {/* Description */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='mb-8'
            >
                <h2 className='text-2xl font-bold mb-4'>Description</h2>
                <p className='text-gray-700 dark:text-gray-300 text-lg leading-relaxed'>
                    {project.description}
                </p>
            </motion.div>

            {/* Technologies */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='mb-8'
            >
                <h2 className='text-2xl font-bold mb-4'>Technologies Used</h2>
                <div className='flex flex-wrap gap-3'>
                    {project.technologies.map((tech, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.3,
                                delay: 0.6 + index * 0.1,
                            }}
                            className='bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full font-medium'
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Features */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='mb-8'
            >
                <h2 className='text-2xl font-bold mb-4'>Key Features</h2>
                <ul className='list-disc list-inside space-y-2'>
                    {project.featured.map((feature, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.4,
                                delay: 0.8 + index * 0.1,
                            }}
                            className='text-gray-700 dark:text-gray-300 text-lg'
                        >
                            {feature}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            {/* Links */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='mb-8'
            >
                <h2 className='text-2xl font-bold mb-4'>Project Links</h2>
                <div className='flex flex-wrap gap-4'>
                    {project.githubLink && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors'
                        >
                            <Github size={20} />
                            GitHub Repository
                        </motion.a>
                    )}
                    {project.liveLink && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors'
                        >
                            <ExternalLink size={20} />
                            Live Demo
                        </motion.a>
                    )}
                    {project.videoLink && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.videoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors'
                        >
                            <Video size={20} />
                            Watch Video
                        </motion.a>
                    )}
                    {project.slideLinks && (
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.slideLinks}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors'
                        >
                            <FileText size={20} />
                            View Slides
                        </motion.a>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
