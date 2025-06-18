import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fadeUpVariant } from "./variants";
import type { Project } from "./types";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      key={project.title}
      className="max-w-120  mx-auto group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden flex flex-col justify-between"
      // style={{ animationDelay: project.delay }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariant}
      custom={index}
    >
      {/* Project Header */}
      <div
        className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden cursor-pointer`}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg transition-opacity duration-600 shadow-lg shadow-purple-500/20 opacity-0 group-hover:opacity-100"
        />
        <div className="text-white text-2xl font-bold opacity-80 absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
          {project.title.split(" ").slice(0, 2).join(" ")}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
            {project.title}
          </h3>
          {/* Description with hover effect */}
          <div
            className="relative cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`transition-all duration-700 ease-in-out ${
                isHovered ? "max-h-[12rem]" : "max-h-[4.5rem]"
              } overflow-hidden`}
            >
              <p
                className={`text-white/80 text-sm leading-relaxed mb-4 whitespace-pre-wrap ${
                  !isHovered ? "line-clamp-3" : ""
                }`}
              >
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-white/10 text-white/90 rounded-md text-xs border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
      {/* Action Buttons */}
      <div className="flex gap-4 mt-4">
        <a
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200 cursor-pointer"
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
        <a
          className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
