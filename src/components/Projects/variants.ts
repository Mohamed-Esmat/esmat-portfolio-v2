import type { Variants } from "framer-motion";

export const fadeUpVariant: Variants = {
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
