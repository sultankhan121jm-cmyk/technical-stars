import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export default function AnimateOnScroll({ children, index = 0, className = "" }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={index}
      className={className}
    >
      {children}
    </motion.div>
  );
}