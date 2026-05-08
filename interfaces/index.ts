
export type ProjectCategory = "Backend" | "Fullstack";

export interface Project {
  id: string;
  name: {
    en: string;
    es: string;
  };
  description: {
    en: string;
    es: string;
  };
  stack: string[];
  category: ProjectCategory;
  featured?: boolean;
  repoUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: {
    en: string;
    es: string;
  };
  period: {
    en: string;
    es: string;
  };
  startYear: number;
  endYear: number | null;
  description: {
    en: string;
    es: string;
  };
  achievements: {
    en: string[];
    es: string[];
  };
  technologies: string[];
}

export type TechCategory = "Language" | "Framework" | "Database" | "Architecture" | "Tools";

export interface TechItem {
  name: string;
  category: TechCategory;
  level: number;
}
