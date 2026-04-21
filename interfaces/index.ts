export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  startYear: number;
  endYear: number | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  challenge: string;
  solution: string;
  stack: string[];
  category: ProjectCategory;
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export type ProjectCategory = "Backend" | "Fullstack" | "Integrations";

export interface TechItem {
  name: string;
  category: TechCategory;
  icon?: string;
}

export type TechCategory =
  | "Language"
  | "Framework"
  | "Database"
  | "Cloud"
  | "Architecture"
  | "DevOps";

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}
