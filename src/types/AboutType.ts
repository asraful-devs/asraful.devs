export interface Highlight {
    title: string;
    description: string;
    icon: string;
}

export interface AboutData {
    title: string;
    subtitle: string;
    description: string;
    highlight: string;
    highlights: Highlight[];
    imageUrl: string;
    resumeUrl: string;
    resumeFileName: string;
}
