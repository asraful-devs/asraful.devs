'use client';

import { motion } from 'framer-motion';
import { Award, Download, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import certificateData from '../../../public/json/certificate.json';

interface CertificateType {
    pdf: string;
    title: string;
}

const Certificate = () => {
    const certificates: CertificateType[] = certificateData;

    // Convert Google Drive link to thumbnail
    const getThumbnailUrl = (driveUrl: string) => {
        const fileIdMatch = driveUrl.match(/\/d\/(.+?)\//);
        if (fileIdMatch && fileIdMatch[1]) {
            return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w500`;
        }
        return '/icons/certificate-placeholder.png'; // Fallback image
    };

    // Convert to preview link
    const getPreviewUrl = (driveUrl: string) => {
        return driveUrl.replace('/view?usp=drive_link', '/preview');
    };

    return (
        <div className='container mx-auto px-4 py-16'>
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-center mb-12'
            >
                <div className='flex items-center justify-center gap-3 mb-4'>
                    <Award className='w-10 h-10 text-blue-600' />
                    <h2 className='text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent'>
                        Certificates & Achievements
                    </h2>
                </div>
            </motion.div>

            {/* Certificates Grid */}
            {certificates.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className='text-center py-20'
                >
                    <p className='text-gray-500 dark:text-gray-400'>
                        No certificates available at the moment.
                    </p>
                </motion.div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {certificates.map((certificate, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className='group bg-card border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
                        >
                            {/* Certificate Preview */}
                            <div className='relative w-full h-64 bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden'>
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <Image
                                        src={getThumbnailUrl(certificate.pdf)}
                                        alt={certificate.title}
                                        fill
                                        className='object-cover group-hover:scale-110 transition-transform duration-500'
                                        onError={(e) => {
                                            // Fallback to award icon if image fails
                                            const target =
                                                e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    {/* Overlay on hover */}
                                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center'>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            whileHover={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                        >
                                            <Award className='w-16 h-16 text-white' />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className='p-6'>
                                {/* Title */}
                                <h3 className='text-xl font-bold mb-4 text-gray-900 dark:text-white line-clamp-2 min-h-14'>
                                    {certificate.title}
                                </h3>

                                {/* Action Buttons */}
                                <div className='flex gap-3'>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={getPreviewUrl(certificate.pdf)}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg font-medium'
                                    >
                                        <ExternalLink size={18} />
                                        View
                                    </motion.a>
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href={certificate.pdf}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg font-medium'
                                    >
                                        <Download size={18} />
                                        Download
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Certificate;
