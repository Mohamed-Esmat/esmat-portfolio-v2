import { motion, type Variants } from "framer-motion";
import { Github } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hooks/useProjects";
import Loading from "../Loading";
import Error from "../Error";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom / 1000, // Convert ms to seconds
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const Projects = () => {
  const {
    projects,
    loading: isLoading,
    error,
    hasMore,
    showMoreProjects,
  } = useProjects();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message="Failed to load projects." />;
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          No Projects Found
        </h2>
        <p className="text-white/70">Check back later for updates!</p>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Explore over 100+ code repositories on my GitHub, including
            experiments, mini-apps, and full React projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <motion.button
            className="mt-12 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300 text-align-center mx-auto block cursor-pointer hover:bg-purple-700"
            onClick={showMoreProjects}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={0.5}
          >
            Show More Projects
          </motion.button>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.7}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-white/80 mb-6">
              Explore over 100+ code repositories on my GitHub, including
              experiments, mini-apps, and full React projects.
            </p>
            <a
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3 mx-auto  max-w-fit justify-center cursor-pointer"
              href="https://github.com/Mohamed-Esmat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              Visit My GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
