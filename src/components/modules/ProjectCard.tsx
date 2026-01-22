'use client';

import { motion } from 'framer-motion';
import { ExternalLink, FileText, Github, Video } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectType {
    id: number;
    title: string;
    description: string;
    image: string;
    featured: string[];
    technologies: string[];
    githubLink: string;
    liveLink: string;
    videoLink?: string;
    slideLinks?: string;
}

interface ProjectCardProps {
    project: ProjectType;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const [imageError, setImageError] = useState(false);
    const fallbackImage = 'https://i.ibb.co.com/Qj9JV75V/59273.jpg';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: 'easeOut',
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            className='border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-card h-112.5 flex flex-col cursor-pointer'
        >
            {/* Image */}
            <div className='relative w-full h-48 bg-gray-200 dark:bg-gray-800'>
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
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col flex-1'>
                {/* Title */}
                <h2 className='text-2xl font-bold mb-3 line-clamp-1'>
                    {project.title}
                </h2>

                {/* Description - 2 lines only */}
                <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-2'>
                    {project.description}
                </p>

                {/* Technologies */}
                <div className='mb-6'>
                    <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className='bg-linear-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Spacer to push icons to bottom */}
            <div className='flex-1'></div>

            {/* Links with Icons */}
            <div className='p-6 pt-0'>
                <div className='grid grid-cols-4 gap-4'>
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 rounded-full bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center justify-center'
                            title='GitHub'
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors flex items-center justify-center'
                            title='Live Demo'
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                    {project.videoLink && (
                        <a
                            href={project.videoLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors flex items-center justify-center'
                            title='Video'
                        >
                            <Video size={20} />
                        </a>
                    )}
                    {project.slideLinks && (
                        <a
                            href={project.slideLinks}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-2 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors flex items-center justify-center'
                            title='Slides'
                        >
                            <FileText size={20} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
