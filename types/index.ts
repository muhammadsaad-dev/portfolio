export interface Project {
  name: string;
  desc: string;
  tech: string[];
  live?: string;
  github?: string;
}

export interface SkillItem {
  name: string;
  hot?: boolean; 
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  responsibilities: string[];
}