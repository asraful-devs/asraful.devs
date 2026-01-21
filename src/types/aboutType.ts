export interface AboutData {
    badge: string;
    name: string;
    title: string;
    highlightedWord: string;
    description: string;
    descriptionHighlight: string;
    location: string;
    status: string;
    expertise: string;
    email: string;
    image: string;
    imageAlt: string;
    cardInfo: {
        initials: string;
        fullName: string;
        badgeText: string;
        role: string;
        userCount: string;
    };
    socialLinks: Array<{
        icon: string;
        href: string;
        name: string;
        type: string;
    }>;
}
