export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  images: string[];
  description: string;
  deliverables: string[];
  projectUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: string;
  items: SkillItem[];
}
