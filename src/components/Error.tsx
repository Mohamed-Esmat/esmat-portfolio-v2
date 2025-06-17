import { AlertTriangle, Github } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-24 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="bg-gradient-to-br from-red-500 to orange-500 p-4 rounded-full shadow-lg mb-6">
        <AlertTriangle className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-white text-2xl font-bold mb-3">
        {message || "Something went wrong!"}
      </h2>
      <p className="text-white/70 max-w-md mb-6">
        Sorry, we couldn't load the projects from the CMS right now. Please try
        again later or explore my code repositories directly on GitHub.
      </p>
      <a
        href="https://github.com/Mohamed-Esmat"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
      >
        <Github className="w-5 h-5" />
        Visit My GitHub
      </a>
    </motion.div>
  );
};
export default Error;
