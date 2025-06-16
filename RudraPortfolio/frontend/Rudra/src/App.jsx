import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {
  return (
    <div>
    <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!
    </h1>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
