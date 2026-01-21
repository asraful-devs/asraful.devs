import ProjectDetails from '@/components/modules/projects/ProjectDetails';
import { ProjectType } from '@/types/projectType';
import { notFound } from 'next/navigation';
import data from '../../../../public/json/project.json';

interface ProjectDetailsPageProps {
    params: Promise<{ projectDetails: string }>;
}

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
    const { projectDetails } = await params;
    const projectId = parseInt(projectDetails);
    const project: ProjectType | undefined = data.find(
        (p) => p.id === projectId
    );

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
