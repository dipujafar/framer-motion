"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -50, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hello framer motion
        </motion.div>

        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 20 }}
            transition={{ duration: 1 }}
            className="px-3 py-1 bg-red-600 rounded-md"
          >
            Click me
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
