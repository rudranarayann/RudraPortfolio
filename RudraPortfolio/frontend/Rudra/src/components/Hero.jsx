import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6"
      >
        <h1 className="text-5xl font-extrabold text-yellow-300 mb-4">
  Hi, I’m Rudra
</h1>

        <p className="text-xl font-medium mb-6">
          A passionate Web Developer & Designer.
        </p>
        <a
          href="#projects"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
