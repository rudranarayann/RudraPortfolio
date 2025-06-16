
import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/personalimg.jpg'; 

const About = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 font-poppins overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-rose-700 to-amber-500/70 animate-gradient backdrop-blur-md z-0"  />

    
      <motion.div
        className="z-10 max-w-5xl w-full flex flex-col items-center justify-center text-center gap-10"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       
        <motion.h1
          className="text-5xl font-extrabold text-white drop-shadow-lg tracking-wide"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

   
        <motion.div
          className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profileImage}
            alt="Rudra Narayan Nayak"
            className=" object-cover object-center transition-transform duration-500 hover:scale-[1.5]"
          />
        </motion.div>

       
        <motion.div
          className="text-white max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I'm Rudra Narayan Nayak
          </h2>
          <p className="text-lg leading-relaxed mb-5">
           As a Full-stack developer, I specialize in transforming complex challenges into elegant, intuitive interfaces through clean, user‑friendly design.
            <span className="text-yellow-200 font-semibold"> I leverage the MERN stack (React, Node.js, Express, MongoDB), Tailwind CSS, and cutting‑edge AI/ML tools to architect full‑stack applications, backed by ongoing research in artificial intelligence and machine learning.</span>.
          </p>

          <div className="text-sm md:text-base space-y-1">
            <p><strong>Email:</strong> rudranarayann00@gmail.com</p>
            <p><strong>Phone:</strong> 8260604858</p>
            <p><strong>Location:</strong> Banglore</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
