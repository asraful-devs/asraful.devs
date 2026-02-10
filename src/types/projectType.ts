export interface ProjectType {
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
