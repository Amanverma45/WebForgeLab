import React from 'react';
import './About.css';

const About = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Vite", "Responsive Design"]
    },
    {
      category: "Backend & APIs",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Cloudinary Uploads"]
    },
    {
      category: "Database & Cloud",
      skills: ["MongoDB", "Mongoose ODM", "Vercel Deployment", "Netlify Hosting", "Git & GitHub"]
    },
    {
      category: "Client Solutions",
      skills: ["Business Websites", "Booking Systems", "WhatsApp Integrations", "Speed Optimization"]
    }
  ];

  return (
    <section id="about" className="section-container about-section">
      <div className="section-header">
        <div className="section-tag">About The Developer</div>
        <h2 className="section-title">
          Meet <span className="text-accent">Aman Verma</span>
        </h2>
        <p className="section-subtitle">
          The developer behind WebForge Lab — delivering dependable, fast digital solutions for clients and businesses.
        </p>
      </div>

      <div className="about-grid">
        {/* Story Card */}
        <div className="glass-card about-story-card">
          <div className="story-badge">My Philosophy</div>
          <h3 className="story-heading">Engineering Clean, Meaningful Web Experiences</h3>
          <p className="story-p">
            I am <strong>Aman Verma</strong>, a Full-Stack Web Developer. I run <strong>WebForge Lab</strong> to provide individual professionals, startups, and businesses with modern, reliable web applications without confusing agency layers.
          </p>
          <p className="story-p">
            I have built real-world client platforms — including the official astrology and booking website for <strong>Jyotishacharya Pandit Hariom Sharma Ji</strong> (<a href="https://hanumatkripa-pt.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>hanumatkripa-pt.com</a>), as well as full-stack platforms like <strong>SwapHub</strong> (peer-to-peer item exchange) and <strong>CareerBridge</strong> (recruitment portal).
          </p>
          <p className="story-p">
            My commitment: <em>Clean code, intuitive user interfaces, and guaranteed responsiveness on every screen.</em>
          </p>

          <div className="about-highlights">
            <div className="highlight-pill">
              <span>Fast Turnaround Times</span>
            </div>
            <div className="highlight-pill">
              <span>Direct Developer Contact</span>
            </div>
            <div className="highlight-pill">
              <span>Mobile-First Quality</span>
            </div>
          </div>
        </div>

        {/* Technical Stack Card */}
        <div className="glass-card about-skills-card">
          <h3 className="skills-card-title">Technical Expertise</h3>
          <p className="skills-card-desc">
            The core tools and technologies I use to build modern web solutions:
          </p>

          <div className="skills-cat-list">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-cat-block">
                <span className="skill-cat-name">{cat.category}</span>
                <div className="skill-badges-wrap">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-badge-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
