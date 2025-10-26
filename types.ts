
export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  date: string;
  role: string;
  company: string;
  description: string;
  tasks: string[];
  tech: string[];
  link?: string;
}

export interface EducationItem {
    date: string;
    degree: string;
    specialization?: string;
    institution: string;
}

export interface ProjectItem {
  title: string;
  date: string;
  description: string;
  details: string[];
  tech: string[];
  link?: string;
}
