export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  githubUrl: string;
  image?: string;
  technologies: string[];
  gradient: string;
  delay: string; // Delay for animation
}
