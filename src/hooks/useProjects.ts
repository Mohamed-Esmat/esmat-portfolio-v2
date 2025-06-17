import { useEffect, useState } from "react";
import { createClient } from "contentful";
import type { Project } from "../components/Projects/types";

const gradients = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-purple-500 to-pink-600",
  "from-orange-500 to-red-600",
  "from-violet-500 to-purple-600",
  "from-teal-500 to-cyan-600",
  "from-indigo-500 to-blue-600",
  "from-pink-500 to-rose-600",
  "from-yellow-500 to-orange-600",
];

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await client.getEntries({
          content_type: "projects",
        });
        if (response.items) {
          const mappedProjects: Project[] = response.items.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (item: any, index: number) => {
              return {
                id: item.sys.id,
                title: item.fields.title,
                description: item.fields.description,
                technologies: item.fields.technologies || [],
                url: item.fields.url || "",
                githubUrl: item.fields.githubUrl || "",
                image: item.fields.image?.fields.file.url || "",
                gradient: gradients[index % gradients.length],
                delay: `${index * 100}ms`, // Delay for animation
              };
            }
          );
          setProjects(mappedProjects);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const showMoreProjects = () => {
    setVisibleCount((prevCount) => {
      const newCount = prevCount + 3;
      return newCount > projects.length ? projects.length : newCount;
    });
  };

  // Limit the number of visible projects
  const projectsToShow = projects.slice(
    0,
    Math.min(visibleCount, projects.length)
  );

  return {
    projects: projectsToShow,
    loading,
    error,
    showMoreProjects,
    hasMore: visibleCount < projects.length,
  };
};
