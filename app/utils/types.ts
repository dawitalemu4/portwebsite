export interface IconRow {
    id: number;
    header: string;
    images: string[][];
};

export interface Project {
    element_id: string;
    header: string;
    paragraph: string;
    icons: string[];
    github: string;
    siteURL: string;
    image: string;
};