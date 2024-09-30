"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollAnimation = () => {
  const ref = useRef(null);
  const isInview = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={
        isInview
          ? {
              opacity: 1,
              y: 0,
            }
          : { opacity: 0, y: 0 }
      }
      transition={{ duration: 5 }}
      className="p-4 bg-gray-300"
    >
      Hello, I am scrolling
    </motion.div>
  );
};

export default ScrollAnimation;
