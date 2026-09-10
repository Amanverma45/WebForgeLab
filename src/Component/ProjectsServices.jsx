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

  // 3 Featured Projects with exact Netlify URLs provided by user
  const projects = [
    {
      id: 1,
      title: "CareerBridge",
      description: "Full-stack job recruitment platform featuring OTP verification, Google OAuth, role-based dashboards (candidates, recruiters, admins), job search, resume management, and email notifications.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
      netlifyUrl: "https://yourcareerbridge.netlify.app"
    },
    {
      id: 2,
      title: "SwapHub – Product Swap Platform",
      description: "Full-stack product swapping platform with JWT auth, Cloudinary image uploads, complete swap request workflow (Pending, Accept, Reject), and Framer Motion dashboard animations.",
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Cloudinary"],
      netlifyUrl: "https://swaphub45.netlify.app"
    },
    {
      id: 3,
      title: "School Management System",
      description: "MERN stack school management app with complete student record CRUD operations, RESTful API integration, responsive React interface, and Mongoose database operations.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Axios"],
      netlifyUrl: "https://school-management-system111.netlify.app"
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
            Click any project button below to visit the live Netlify application!
          </p>
        </div>

        <div className="projects-simple-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card project-simple-card">
              <div>
                <div className="proj-top-bar">
                  <span className="proj-live-badge">Live Demo</span>
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

                {/* Direct Netlify URL Link Button */}
                <a 
                  href={proj.netlifyUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary proj-netlify-btn"
                >
                  <span>View Netlify Live Demo</span>
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
