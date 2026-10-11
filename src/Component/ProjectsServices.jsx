import React from 'react';
import './ProjectsServices.css';

const ProjectsServices = () => {
  // 4 Core Real Services
  const services = [
    {
      id: 1,
      num: "01",
      title: "Business & Client Websites",
      description: "Custom, responsive websites for individual practitioners, professionals, and local businesses. Comes with one-click WhatsApp chat, direct phone dial, and mobile-optimized layouts.",
      features: ["Custom Design", "WhatsApp / Call Integration", "SEO Structured", "Fast Load Times"]
    },
    {
      id: 2,
      num: "02",
      title: "Full-Stack MERN Web Apps",
      description: "Scalable web applications built from scratch with React, Node.js, Express, and MongoDB. Secure user authentication (JWT), dynamic dashboards, and REST API development.",
      features: ["Role-Based Access", "MongoDB Database", "Secure JWT Auth", "Clean API Endpoints"]
    },
    {
      id: 3,
      num: "03",
      title: "UI/UX & Website Redesign",
      description: "Modernizing older or slow websites with clean light themes, intuitive layouts, readable typography, and 100% mobile-first usability.",
      features: ["Clean Light Aesthetics", "Mobile-First UX", "Smooth Transitions", "High Usability"]
    },
    {
      id: 4,
      num: "04",
      title: "Cloud Deployment & Setup",
      description: "Complete hosting pipeline setup on Vercel and Netlify, custom domain configuration, free SSL activation, Cloudinary media storage, and working email forms.",
      features: ["Vercel & Netlify Hosting", "Domain Setup", "Cloudinary Media", "Working Form APIs"]
    }
  ];

  // Featured Projects with Real Details & Screenshots
  const projects = [
    {
      id: 1,
      badge: "Client Website",
      title: "Jyotishacharya Pandit Hariom Sharma",
      tagline: "Official Vedic Astrology & Consultation Booking Portal",
      description: "A complete client portal created for Jyotishacharya Pandit Hariom Sharma Ji (Ujjain Mahakal Dham). Features puja & astrology consultation bookings, bilingual support (Hindi & English), photo galleries, and instant WhatsApp inquiry.",
      highlights: [
        "Online Puja & Consultation Booking requests",
        "Bilingual Language Support (Hindi & English)",
        "Instant one-click WhatsApp & Direct Phone Call",
        "Live on official domain: hanumatkripa-pt.com with 100% responsiveness"
      ],
      tech: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "Custom Domain"],
      url: "https://hanumatkripa-pt.com",
      image: "/projects/hariomsharma.png"
    },
    {
      id: 2,
      badge: "Full-Stack MERN",
      title: "SwapHub – Product Swap Platform",
      tagline: "Peer-to-Peer Barter & Exchange Marketplace",
      description: "A comprehensive full-stack platform where users list pre-owned items and propose direct item-to-item trades. Features multi-image uploads via Cloudinary, negotiation workflows, and dynamic dashboard states.",
      highlights: [
        "Secure User Registration & JWT Authentication",
        "Cloudinary multi-image upload pipeline",
        "Trade proposal negotiation (Pending, Accept, Reject)",
        "Responsive user dashboard & state management"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Netlify"],
      url: "https://swaphub45.netlify.app",
      image: "/projects/swaphub.png"
    },
    {
      id: 3,
      badge: "Recruitment Portal",
      title: "CareerBridge – Job Search Platform",
      tagline: "Dual-Role Recruitment & Candidate Management Portal",
      description: "A production-grade recruitment portal connecting job seekers with hiring companies. Features dual candidate & recruiter portals, OTP verification, Google OAuth, resume uploads, and job application tracking.",
      highlights: [
        "Role-Based Dashboards (Candidate & Recruiter)",
        "Google OAuth & OTP Verification security",
        "Resume upload, job search, and custom filters",
        "Real-time application status tracking"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Netlify"],
      url: "https://yourcareerbridge.netlify.app",
      image: "/projects/careerbridge.png"
    }
  ];

  return (
    <div id="services-projects-wrapper">
      {/* 1. Services Section */}
      <section id="services" className="section-container services-simple-section">
        <div className="section-header">
          <div className="section-tag">Services</div>
          <h2 className="section-title">
            Core Development <span className="text-accent">Services</span>
          </h2>
          <p className="section-subtitle">
            Reliable, clean engineering solutions by Aman Verma to help your project launch smoothly.
          </p>
        </div>

        <div className="services-simple-grid">
          {services.map((srv) => (
            <div key={srv.id} className="glass-card service-animated-card">
              <div className="srv-number-badge">{srv.num}</div>
              <h3 className="srv-card-title">{srv.title}</h3>
              <p className="srv-card-desc">{srv.description}</p>
              
              <div className="srv-features-list">
                {srv.features.map((feat, fIdx) => (
                  <span key={fIdx} className="srv-feat-tag">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Projects Section */}
      <section id="projects" className="section-container projects-simple-section">
        <div className="section-header">
          <div className="section-tag">Featured Work</div>
          <h2 className="section-title">
            Real Projects & <span className="text-accent">Live Websites</span>
          </h2>
          <p className="section-subtitle">
            Every project below is real, fully deployed, and live. Click to view the live website.
          </p>
        </div>

        <div className="projects-simple-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-card project-simple-card">
              <div>
                {/* Project Screenshot Banner */}
                <div className="proj-image-wrapper">
                  <img src={proj.image} alt={proj.title} className="proj-image" />
                </div>

                <div className="proj-top-bar">
                  <span className="proj-badge-pill">{proj.badge}</span>
                  <span className="proj-live-badge">Live</span>
                </div>
                
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-tagline">{proj.tagline}</p>
                <p className="proj-desc">{proj.description}</p>

                {/* Highlights */}
                <ul className="proj-highlights-list">
                  {proj.highlights.map((h, idx) => (
                    <li key={idx} className="proj-highlight-item">
                      <span className="h-dot"></span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="proj-bottom-wrapper">
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
                  className="btn-primary proj-live-btn"
                >
                  <span>View Live Website</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
