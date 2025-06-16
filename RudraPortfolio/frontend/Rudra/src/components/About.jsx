import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg max-w-3xl mx-auto">
          I'm a passionate full-stack developer with a love for crafting elegant, fast, and accessible websites. With a strong focus on clean UI, performance, and scalability, I build applications that provide delightful user experiences.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
