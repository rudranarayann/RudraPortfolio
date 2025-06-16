import React, { useState } from 'react';
import logo from '../assets/mylogo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Vlog', href: '#vlog' },
    { name: 'Contact', href: '#contact' },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-sky-300 via-teal-500 to-yellow-400 shadow-lg sticky top-0 z-50">
      <div className="max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-20 object-contain drop-shadow-2xl"
            />
          </div>

          
          <ul className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-yellow-300 transition duration-300 font-semibold text-lg font-poppins"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={30} color="white" /> : <Menu size={30} color="white" />}
            </button>
          </div>
        </div>

        
        {menuOpen && (
          <ul className="flex flex-col items-center space-y-4 mt-4 pb-4 md:hidden">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white hover:text-yellow-300 transition duration-300 font-semibold text-lg font-poppins"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
