import React from 'react';
import { Github, Linkedin, Mail, Instagram, Phone, Facebook, MapPin, Star} from 'lucide-react';

import Cert1 from '../assets/nptel.png';
import Cert2 from '../assets/epsum.png';
import Cert3 from '../assets/shreyan.webp';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start">
        
        <div className="mb-8 md:mb-0">
          <h4 className="text-white text-xl font-semibold mb-4">Certifications</h4>
          <div className="flex space-x-4">
            <a href="https://www.example.com/your-cert-1" target="_blank" rel="noopener noreferrer" className="group">
              <img
                src={Cert1}
                alt="Certification 1"
                className="w-10 h-10 object-contain rounded-md filter grayscale group-hover:filter-none transition-all duration-200"
              />
            </a>
            <a href="https://www.example.com/your-cert-2" target="_blank" rel="noopener noreferrer" className="group">
              <img
                src={Cert2}
                alt="Certification 2"
                className="w-10 h-10 object-contain rounded-md filter grayscale group-hover:filter-none transition-all duration-200"
              />
            </a>
            <a href="https://www.example.com/your-cert-3" target="_blank" rel="noopener noreferrer" className="group">
              <img
                src={Cert3}
                alt="Certification 3"
                className="w-10 h-10 object-contain rounded-md filter grayscale group-hover:filter-none transition-all duration-200"
              />
            </a>
          </div>
        </div>
        <div className="text-center">
        <h4 className="text-white text-lg font-semibold mb-2">5+ Projects Completed</h4>
        <div className="flex justify-center items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
          ))}
        </div>
      </div>

        
        <div>
          <h4 className="text-white text-xl font-semibold mb-4">Connect with me</h4>
          <div className="flex space-x-4 mb-4">
            {/* GitHub */}
            <a href="https://github.com/rudranarayann" target="_blank" rel="noopener noreferrer" className="group">
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 transform group-hover:scale-110" />
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/rudranarayan-nayak-b46988295" target="_blank" rel="noopener noreferrer" className="group">
              <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 transform group-hover:scale-110" />
            </a>
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1CNMdQq3vF/" target="_blank" rel="noopener noreferrer" className="group">
              <Facebook className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 transform group-hover:scale-110" />
            </a>
            {/* Email */}
            <a href="rudranarayann00@gmail.com" className="group">
              <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 transform group-hover:scale-110" />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/rudranarayan_nayak_?igsh=dGJqdDR5MjA3bWsx" target="_blank" rel="noopener noreferrer" className="group">
              <Instagram className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-200 transform group-hover:scale-110" />
            </a>
          </div>

          {/* ===== Contact Details: Phone & Address ===== */}
          <div className="text-gray-400 text-sm flex items-center space-x-2 mb-2">
            <Phone className="w-4 h-4" />
            <span>+91 8260604858</span>
          </div>
          <div className="text-gray-400 text-sm flex items-center space-x-2 mb-2">
            <Phone className="w-4 h-4" />
            <span>+91 9583924664</span>
          </div>
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Kendrapara, Narshingh Pur, 754210</span>
          </div>
        </div>
      </div>

      {/* ===== Bottom Row: © Year and Name ===== */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rudra Narayan Nayak. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
