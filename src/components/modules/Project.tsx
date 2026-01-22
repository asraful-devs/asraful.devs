'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import data from '../../../public/json/project.json';
import { ProjectType } from '../../types/projectType';
import Pagination from '../common/Pagination';
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
        // Smooth scroll to projects section
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div className='container mx-auto px-4 py-8'>
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-center mb-12'
            >
                <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                    All Projects
                </h2>
            </motion.div>

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
                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {currentProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {/* Show pagination if more than 6 projects */}
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
