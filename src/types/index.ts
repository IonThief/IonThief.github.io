export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  tech: string[];
  description: string;
  image: string;
  link: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  date: string;
  location: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  date: string;
  grade: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: string;
  doi: string;
  link: string;
  image: string;
}
