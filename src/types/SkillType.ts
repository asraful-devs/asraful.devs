export interface Skill {
    name: string;
    icon: string;
    color: string;
}

export interface SkillCategory {
    id: number;
    category: string;
    icon: string;
    skills: Skill[];
}
