"use client";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const List = () => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="flex gap-x-2 items-center"
    >
      {Array.from({ length: 5 }).map((data, idx) => (
        <motion.li
          key={idx}
          variants={itemVariant}
          className="p-2 bg-gray-400 w-full"
        >
          Item {idx + 1}
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default List;
