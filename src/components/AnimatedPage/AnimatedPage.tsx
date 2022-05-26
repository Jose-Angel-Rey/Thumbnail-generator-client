import { motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    transform: "scale(.99)",
    transitionDuration: "1s",
  },
  animate: { opacity: 1, transform: "scale(1)" },
  exit: { opacity: 0, transform: "scale(.99)", transitionDuration: "2s" },
};

const AnimatedPage = ({ children }: any) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, delayChildren: 1.0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
