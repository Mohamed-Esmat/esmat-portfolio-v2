import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom / 1000,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const Contact = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={0.1}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work
            together to create amazing user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              custom={0.2}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:msmt0452@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.3}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-white/70">msmt0452@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="tel:+201100108798"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.4}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-white/70">+201100108798</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.4}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-white/70">Giza, Egypt</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              custom={0.5}
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.a
                  href="https://github.com/Mohamed-Esmat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.6}
                >
                  <Github className="w-5 h-5 text-white group-hover:text-purple-400 transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    GitHub
                  </span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mohamed-esmat-abdalhafiz-frontend-developer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.7}
                >
                  <ExternalLink className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    LinkedIn
                  </span>
                </motion.a>
                <motion.a
                  href="https://mohamedesmat.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.8}
                >
                  <ExternalLink className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    Portfolio
                  </span>
                </motion.a>
                <motion.a
                  href="https://medium.com/@msmt0452"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUpVariant}
                  custom={0.9}
                >
                  <ExternalLink className="w-5 h-5 text-white group-hover:text-orange-400 transition-colors" />
                  <span className="text-white/80 group-hover:text-white transition-colors">
                    Medium
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Availability Status */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            custom={1.0}
          >
            <motion.div
              className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-emerald-500/20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              custom={1.1}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">
                  Available for Work
                </h3>
              </div>
              <p className="text-emerald-100 mb-6">
                Recently completed military service and actively seeking
                full-time opportunities as a Front-end Developer.
              </p>
              <ul className="space-y-2 text-white/80">
                <li>• Immediate availability</li>
                <li>• Open to remote or on-site work</li>
                <li>• Interested in React.js focused roles</li>
                <li>• Looking for growth opportunities</li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              custom={1.2}
            >
              <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3 text-white/80">
                <p>• 1+ year professional experience</p>
                <p>• 2+ years hands-on project work</p>
                <p>• Computer Science graduate (2023)</p>
                <p>• Passionate about clean code & UX</p>
                <p>• Strong problem-solving skills</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-white/10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          custom={1.2}
        >
          <p className="text-white/60">
            © 2025 Mohamed Esmat AbdElHafiz. Built with React.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
