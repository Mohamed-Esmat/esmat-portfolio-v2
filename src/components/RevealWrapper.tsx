import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const RevealWrapper = ({ children, className = "", delay = 0 }: Props) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={`reveal-wrapper ${className}`}
      initial="hidden"
      animate={controls}
      variants={fadeInUp}
      transition={{ duration: 0.4, delay: delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default RevealWrapper;

// Hi, I'm Mohamed Esmat, a Frontend Developer with a strong focus on building responsive and user-friendly web interfaces using React.js. I’m deeply passionate about creating clean, scalable UI and delivering real business value through code. While I’ve been working mainly with React, I’m excited to explore Angular, especially in a collaborative environment like CrossWorkers. I’m always eager to learn, improve, and work on real-world projects that challenge my skills and help me grow as a developer.
