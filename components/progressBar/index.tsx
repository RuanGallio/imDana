"use client"
import { motion, useScroll, useSpring } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <motion.div
      className="hidden lg:block fixed z-50 top-0 left-0 right-0 h-3 bg-light-blue opacity-100 origin-[0%]"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar;
