import { motion, type Variants } from "framer-motion";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Markup",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "shadcn/ui",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "State Management",
      skills: ["Redux", "Redux Toolkit", "Zustand", "MobX", "Context API"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "APIs & Data Fetching",
      skills: [
        "RESTful APIs",
        "GraphQL",
        "React Query",
        "TanStack Query",
        "Axios",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Build Tools & Workflow",
      skills: [
        "Vite",
        "Webpack",
        "Babel",
        "npm",
        "yarn",
        "Git",
        "GitHub",
        "VS Code",
      ],
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Performance & UX",
      skills: [
        "Code Splitting",
        "Lazy Loading",
        "Accessibility (a11y)",
        "Animations",
        "PWA",
      ],
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index * 0.15}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="w-6 h-6 bg-white rounded-md"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    style={{
                      animationDelay: `${index * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.6}
        >
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "React – The Complete Guide (incl. React Router & Redux) - Udemy 2023",
              "JavaScript – The Complete Guide (Beginner + Advanced) - Udemy 2023",
              "Advanced CSS and Sass: Flexbox, Grid, Animations & More - Udemy 2023",
              "Build Responsive Real-World Websites with HTML and CSS - Udemy 2023",
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-purple-500/30 transition-all duration-300"
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0.7 + index * 0.1}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-white/90 text-sm">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
