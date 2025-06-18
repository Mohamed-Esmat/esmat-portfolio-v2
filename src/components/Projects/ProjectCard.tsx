// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import { fadeUpVariant } from "./variants";
// import type { Project } from "./types";

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// const ProjectCard = ({ project, index }: ProjectCardProps) => {
//   return (
//     <motion.div
//       key={project.title}
//       className="max-w-120 mx-auto group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden flex flex-col justify-between min-h-[420px]"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeUpVariant}
//       custom={index}
//     >
//       {/* Project Header */}
//       <div
//         className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden cursor-pointer`}
//       >
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover rounded-lg transition-opacity duration-600 shadow-lg shadow-purple-500/20 opacity-0 group-hover:opacity-100"
//         />
//         <div className="text-white text-2xl font-bold opacity-80 absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
//           {project.title.split(" ").slice(0, 2).join(" ")}
//         </div>
//       </div>

//       {/* Project Content */}
//       <div className="flex flex-col flex-grow justify-between mb-6">
//         <div>
//           <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
//             {project.title}
//           </h3>

//           {/* Fixed Description - No Height Changes */}
//           <div className="relative">
//             <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3">
//               {project.description}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Technologies */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.technologies.map((tech) => (
//           <span
//             key={tech}
//             className="px-2 py-1 bg-white/10 text-white/90 rounded-md text-xs border border-white/20"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-4 mt-4">
//         <a
//           className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200 cursor-pointer"
//           href={project.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <ExternalLink className="w-4 h-4" />
//           Live Demo
//         </a>
//         <a
//           className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer"
//           href={project.githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Github className="w-4 h-4" />
//           Code
//         </a>
//       </div>

//       {/* Hover Overlay for Full Description */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-purple-900/90 to-gray-800/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center p-6 z-10 rounded-2xl">
//         <div className="text-center">
//           <h3 className="text-2xl font-bold text-white mb-4">
//             {project.title}
//           </h3>

//           {/* Full Description on Hover */}
//           <div className="max-h-48 overflow-y-auto mb-6 custom-scrollbar">
//             <p className="text-gray-200 leading-relaxed text-sm whitespace-pre-wrap">
//               {project.description}
//             </p>
//           </div>

//           {/* All Technologies on Hover */}
//           <div className="flex flex-wrap gap-2 justify-center mb-6">
//             {project.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-xs bg-purple-500/30 text-purple-200 rounded-full border border-purple-400/40"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>

//           {/* Enhanced Action Buttons */}
//           <div className="flex gap-3 justify-center">
//             <a
//               href={project.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
//             >
//               <ExternalLink className="w-4 h-4" />
//               Live Demo
//             </a>
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-6 py-3 bg-gray-700/80 hover:bg-gray-600 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 border border-gray-600"
//             >
//               <Github className="w-4 h-4" />
//               View Code
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 2px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(147, 51, 234, 0.5);
//           border-radius: 2px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(147, 51, 234, 0.7);
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// // export default ProjectCard;
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { fadeUpVariant } from "./variants";
import type { Project } from "./types";
import { useState, useRef } from "react";
import { TooltipPortal } from "./TooltipPortal";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);
  const [tooltipPos, setTooltipPos] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleMouseEnter = () => {
    if (descRef.current) {
      const rect = descRef.current.getBoundingClientRect();
      setTooltipPos({
        top: rect.bottom + window.scrollY + 8, // 8px offset
        left: rect.left + window.scrollX,
      });
    }
    setIsDescriptionHovered(true);
  };
  const handleMouseLeave = () => {
    setIsDescriptionHovered(false);
    setTooltipPos(null);
  };

  return (
    <motion.div
      key={project.title}
      className="max-w-120 mx-auto group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-visible flex flex-col justify-between"
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
          {/* Description with hover tooltip */}
          <div
            className="relative z-30"
            ref={descRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3 cursor-pointer hover:text-white/90 transition-colors duration-200">
              {project.description}
            </p>
            {isDescriptionHovered && tooltipPos && (
              <TooltipPortal position={tooltipPos}>
                <div className="w-72 max-w-[90vw] bg-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-xl p-4 shadow-2xl shadow-purple-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-gray-900/95 border-l border-t border-purple-500/30 rotate-45"></div>
                  <div className="relative z-10">
                    <h4 className="text-white font-semibold mb-2 text-sm">
                      {project.title} - Full Description
                    </h4>
                    <div className="max-h-48 overflow-y-auto custom-scrollbar">
                      <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </TooltipPortal>
            )}
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

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(147, 51, 234, 0.5);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(147, 51, 234, 0.7);
        }

        @keyframes animate-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: animate-in 0.3s ease-out;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;

//////////////////////////////////////////////////////////////////////////

// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import { fadeUpVariant } from "./variants";
// import type { Project } from "./types";
// import { useState } from "react";

// interface ProjectCardProps {
//   project: Project;
//   index: number;
// }

// const ProjectCard = ({ project, index }: ProjectCardProps) => {
//   const [isDescriptionHovered, setIsDescriptionHovered] = useState(false);

//   return (
//     <motion.div
//       key={project.title}
//       className="max-w-120 mx-auto group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-visible flex flex-col justify-between"
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={fadeUpVariant}
//       custom={index}
//     >
//       {/* Project Header */}
//       <div
//         className={`w-full h-32 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden cursor-pointer`}
//       >
//         <img
//           src={project.image}
//           alt={project.title}
//           className="w-full h-full object-cover rounded-lg transition-opacity duration-600 shadow-lg shadow-purple-500/20 opacity-0 group-hover:opacity-100"
//         />
//         <div className="text-white text-2xl font-bold opacity-80 absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
//           {project.title.split(" ").slice(0, 2).join(" ")}
//         </div>
//       </div>

//       {/* Project Content */}
//       <div className="flex flex-col flex-grow justify-between mb-6">
//         <div>
//           <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
//             {project.title}
//           </h3>

//           {/* Description with hover tooltip */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsDescriptionHovered(true)}
//             onMouseLeave={() => setIsDescriptionHovered(false)}
//           >
//             <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-3 cursor-pointer hover:text-white/90 transition-colors duration-200">
//               {project.description}
//             </p>

//             {/* Floating Description Tooltip */}
//             {isDescriptionHovered && (
//               <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-w-[90vw] max-h-[70vh] bg-gray-900/95 backdrop-blur-lg border border-purple-500/30 rounded-xl p-4 shadow-2xl shadow-purple-500/20 z-[9999] animate-in fade-in slide-in-from-top-2 duration-300">
//                 {/* Close hint */}
//                 <div className="absolute top-2 right-2 text-white/50 text-xs">
//                   Move mouse away to close
//                 </div>

//                 {/* Full description content */}
//                 <div className="relative z-10">
//                   <h4 className="text-white font-semibold mb-3 text-sm pr-6">
//                     {project.title} - Full Description
//                   </h4>
//                   <div className="max-h-80 overflow-y-auto custom-scrollbar">
//                     <p className="text-white/90 text-sm leading-relaxed whitespace-pre-wrap">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Technologies */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         {project.technologies.map((tech) => (
//           <span
//             key={tech}
//             className="px-2 py-1 bg-white/10 text-white/90 rounded-md text-xs border border-white/20"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       {/* Action Buttons */}
//       <div className="flex gap-4 mt-4">
//         <a
//           className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:scale-105 transition-all duration-200 cursor-pointer"
//           href={project.url}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <ExternalLink className="w-4 h-4" />
//           Live Demo
//         </a>
//         <a
//           className="flex items-center gap-2 px-4 py-2 border border-white/30 text-white rounded-lg text-sm font-medium hover:bg-white/10 transition-all duration-200 cursor-pointer"
//           href={project.githubUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Github className="w-4 h-4" />
//           Code
//         </a>
//       </div>

//       {/* Custom Scrollbar Styles */}
//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 4px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 2px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(147, 51, 234, 0.5);
//           border-radius: 2px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(147, 51, 234, 0.7);
//         }

//         @keyframes animate-in {
//           from {
//             opacity: 0;
//             transform: translateY(-8px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         .animate-in {
//           animation: animate-in 0.3s ease-out;
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default ProjectCard;
