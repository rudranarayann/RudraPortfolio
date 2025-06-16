import React from 'react';
import HackathonPhoto from '../assets/new_pic1.jpg';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-r from-purple-900 via-black to-indigo-900">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 min-h-screen px-4 sm:px-6 lg:px-8">
       
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in-down">
            Rudra Narayan Nayak
          </h1>

          <p className="text-xl sm:text-2xl font-semibold text-gray-200 mb-6 animate-fade-in">
            Aspiring Software Developer
          </p>

          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
           <span className="font-semibold text-white">Fueled by curiosity and confidence, I turn every challenge into an opportunity</span>,
            
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="mailto:rudranarayann00@gmail.com"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Hire Me
            </a>
            <a
              href="https://silver-shelby-84.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-medium py-3 px-6 rounded-full shadow-lg transition duration-300"
            >
              Get Resume
            </a>
          </div>
        </div>

        
        <div className="relative group w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 p-1
                        bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500
                        rounded-3xl shadow-2xl transition-transform transform hover:scale-105 duration-700">
          <div className="w-full h-full bg-black rounded-3xl overflow-hidden flex items-center justify-center">
            <img
              src={HackathonPhoto}
              alt="Rudra Narayan Nayak"
              className="w-full h-full object-cover
                         transition-transform duration-700
                         group-hover:scale-110 group-hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
