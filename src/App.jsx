import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import ProjectsServices from './Component/ProjectsServices';
import WhyChooseUs from './Component/WhyChooseUs';
import FAQ from './Component/FAQ';
import GetInTouch from './Component/GetInTouch';
import Footer from './Component/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'why-us', 'faq', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Header Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single Page Content */}
      <main>
        <Home />
        <About />
        <ProjectsServices />
        <WhyChooseUs />
        <FAQ />
        <GetInTouch />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
