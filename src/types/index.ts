export interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface Project {
  title: string;
  type: string;
  description: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  demoUrl: string;
}