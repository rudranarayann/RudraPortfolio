import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/about';
import Projects from './Pages/projects';
import Services from './Pages/services';
import Vlog from './Pages/vlog';
import Contact from './Pages/contact';

function App() {
  const [activePage, setActivePage] = useState('Home');

  
  
  React.useEffect(() => {
    const section = document.getElementById(activePage.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activePage]);

  return (
    <>
     
     
      <div className="sticky top-0 left-0 w-full z-50">
        <Navbar setActivePage={setActivePage} />
      </div>

      
      
      <main className="w-full scroll-smooth">
        <section id="home" className="w-full min-h-screen">
          <Home />
        </section>
        <section id="about" className="w-full min-h-screen">
          <About />
        </section>
        <section id="projects" className="w-full min-h-screen">
          <Projects />
        </section>
        <section id="services" className="w-full min-h-screen">
          <Services />
        </section>
        <section id="vlog" className="w-full min-h-screen">
          <Vlog />
        </section>
        <section id="contact" className="w-full min-h-screen">
          <Contact />
        </section>
      </main>

      
      <Footer />
    </>
  );
}

export default App;
