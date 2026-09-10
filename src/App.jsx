import React, { useState, useEffect } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import WhyChooseUs from './Component/WhyChooseUs';
import ProjectsServices from './Component/ProjectsServices';
import GetInTouch from './Component/GetInTouch';
import Footer from './Component/Footer';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'why-us', 'services', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Header Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single Page Content */}
      <main>
        <Home />
        <WhyChooseUs />
        <ProjectsServices />
        <GetInTouch />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
