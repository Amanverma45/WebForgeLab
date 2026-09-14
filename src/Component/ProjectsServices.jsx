import React from 'react';
import './ProjectsServices.css';

const ProjectsServices = () => {
  // 3 Animated Service Cards
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Web App Development",
      description: "Custom single-page applications and responsive websites built with modern React, Vite, and Node.js for high performance."
    },
    {
      id: 2,
      icon: "🎨",
      title: "UI/UX & Web Design",
      description: "Clean, eye-catching user interfaces with modern dark/light themes, smooth hover effects, and pixel-perfect layouts."
    },
    {
      id: 3,
      icon: "⚡",
      title: "API & Full-Stack Systems",
      description: "Backend API integration, database connectivity, cloud hosting deployment, and speed optimization for your website."
    }
  ];

  // Featured Projects
  const projects = [
    {
      id: 1,
      title: "Jyotishacharya Pandit Hariom Sharma",
      description: "Official astrology website for Jyotishacharya Pandit Hariom Sharma Ji featuring astrological services, consultation booking, photo gallery, client testimonials, and contact details.",
      tech: ["React.js", "Vite", "CSS3", "JavaScript"],
      url: "https://pt-hariomsharma.vercel.app/"
    }
  ];

  return (
    <div id="services-projects-wrapper">
      {/* 1. Services Section (3 Animated Cards) */}
      <section id="services" className="section-container services-simple-section">
        <div className="section-header">
          <div className="section-tag">Services</div>
          <h2 className="section-title">
            Our Core <span className="text-gradient-lime">Services</span>
          </h2>
        </div>

        <div className="services-simple-grid">
          {services.map((srv) => (
            <div key={srv.id} className="glass-card service-animated-card">
              <div className="srv-icon-badge">{srv.icon}</div>
              <h3 className="srv-card-title">{srv.title}</h3>
              <p className="srv-card-desc">{srv.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Projects Section (3 Projects with User Netlify Links) */}
      <section id="projects" className="section-container projects-simple-section">
        <div className="section-header">
          <div className="section-tag">Featured Projects</div>
          <h2 className="section-title">
            Recent <span className="text-gradient-green">Projects</span>
          </h2>
          <p className="section-subtitle">
            Click any project button below to visit the live website!
          </p>
        </div>

        <div className="projects-simple-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card project-simple-card">
              <div>
                <div className="proj-top-bar">
                  <span className="proj-live-badge">Live Website</span>
                </div>
                
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.description}</p>
              </div>

              <div>
                <div className="proj-tags">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="p-tag">{t}</span>
                  ))}
                </div>

                {/* Direct Live Link Button */}
                <a 
                  href={proj.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary proj-netlify-btn"
                >
                  <span>View Live Website</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsServices;
