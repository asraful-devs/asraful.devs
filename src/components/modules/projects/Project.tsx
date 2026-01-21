'use client';
import { ProjectType } from '@/types/projectType';
import { motion } from 'framer-motion';
import { useState } from 'react';
import data from '../../../../public/json/project.json';
import Pagination from '../../common/Pagination';
import ProjectCard from './ProjectCard';

const ITEMS_PER_PAGE = 6;

const Projects = () => {
    const allProjectData: ProjectType[] = data;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate pagination
    const totalPages = Math.ceil(allProjectData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentProjects = allProjectData.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='container mx-auto px-4 py-8'>
            <motion.h1
                initial={{ opacity: 0, y: -50, fontSize: '2rem' }}
                animate={{ opacity: 1, y: 0, fontSize: '2.25rem' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='text-4xl font-jetbrains font-bold mb-12 text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
            >
                All Projects
            </motion.h1>

            {allProjectData.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='text-center mt-5 py-20'
                >
                    <p className='text-2xl text-gray-500 dark:text-gray-400'>
                        No projects available at the moment.
                    </p>
                    <p className='text-gray-400 dark:text-gray-500 mt-2'>
                        Check back later for updates!
                    </p>
                </motion.div>
            ) : (
                <>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
                        {currentProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Show pagination only if more than 6 projects */}
                    {allProjectData.length > ITEMS_PER_PAGE && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Projects;
