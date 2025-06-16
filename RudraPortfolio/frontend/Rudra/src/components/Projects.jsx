import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    desc: "A modern portfolio site built using React and Tailwind CSS.",
  },
  {
    name: "E-commerce Store",
    desc: "Fully functional store with payment integration using MERN stack.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-gray-800">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-xl shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
