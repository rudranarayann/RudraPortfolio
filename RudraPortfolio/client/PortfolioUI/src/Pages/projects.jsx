import React, { useState } from 'react';
import { motion } from 'framer-motion';


import image1 from '../assets/food.png';
import image2 from '../assets/embedeed.png';
import image3 from '../assets/iot.png';
import image4 from '../assets/proj.png';

const projects = [
  {
    id: 1,
    title: 'Online Food-Shop',
    image: image1,
    link: 'https://team-virus-reimagine-round2-7273.vercel.app/',
    description: `Online Food Shop App is a simple, interactive web application that allows users to browse various food items, view details like price, image, and ratings, and place orders. It simulates a small-scale food delivery platform where users can add items to the cart, view totals, and proceed to checkout—all built using HTML, CSS, and JavaScript without any frameworks or backend.`,
  },
  {
    id: 2,
    title: 'Embedded Service Managements',
    image: image2,
    link: 'https://www.epsumlabs.com/what-we-do/services/embedded-solutions',
    description: `A smooth connection between hardware and software using the MERN stack (MongoDB, Express.js, React, Node.js) enables seamless real-time monitoring, control, and data management in embedded or IoT systems. This integration ensures physical devices (like sensors or actuators) interact efficiently with web-based applications and databases.`,
  },
  {
    id: 3,
    title: 'Iot Solution',
    image: image3,
    link: 'https://www.epsumlabs.com/what-we-do/services/internet-of-things',
    description: `An IoT (Internet of Things) solution is a system of connected physical devices embedded with sensors, software, and network connectivity that enables them to collect, exchange, and act on data. These solutions allow for real-time monitoring, automation, and remote control of devices across various industries such as smart homes, healthcare, agriculture, and manufacturing.`,
  },
  {
    id: 4,
    title: 'Online Scrap Managements',
    image: image4,
    link: 'https://e-kawadiwala-deploy.vercel.app/',
    description: `An Online Scrap Management System built with the MERN stack (MongoDB, Express.js, React.js, Node.js) provides a complete full-stack solution to manage and streamline the collection, categorization, pricing, and recycling of scrap materials.`,
  },
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const isOdd = index % 2 !== 0;

  const containerVariants = {
    hidden: { opacity: 0, x: isOdd ? 200 : -200 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        isOdd ? 'md:flex-row-reverse' : ''
      } items-center my-12`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-[40%] max-h-[600px] rounded-lg overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300 bg-white p-2"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain"
        />
      </a>

      
      <div className="w-full md:w-[50%] h-[300px] p-6 bg-white bg-opacity-60 backdrop-blur-md rounded-lg shadow-md flex flex-col justify-between mt-6 md:mt-0">
        <div>
          <h3 className="text-2xl font-bold text-indigo-700 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-800 mb-4">
            {expanded
              ? project.description
              : `${project.description.slice(0, 80)}...`}
          </p>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-indigo-500 hover:text-indigo-700 font-semibold self-start"
        >
          {expanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-700 to-amber-500/60 opacity-40 blur-xl -z-10" />

      <h2 className="text-4xl font-extrabold text-center text-white mb-12 relative z-10">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto relative z-10">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
