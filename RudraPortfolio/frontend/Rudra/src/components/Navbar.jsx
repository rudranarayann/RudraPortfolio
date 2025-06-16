import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'];

  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
          className="text-3xl font-extrabold text-white tracking-wider"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          MyPortfolio
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-white hover:text-yellow-300 font-semibold transition duration-300"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white hover:text-yellow-300 transition"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          className="md:hidden flex flex-col bg-white shadow-inner px-6 py-4 space-y-4"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-gray-800 hover:text-indigo-600 font-medium transition"
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
