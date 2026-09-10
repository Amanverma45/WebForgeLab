import React from 'react';
import './Home.css';

const Home = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-hero-section">
      <div className="section-container home-simple-container">
        {/* WebForge Lab Brand Logo */}
        <div className="home-logo-box">
          <img src="/logo.png" alt="WebForge Lab Logo" className="home-main-logo" />
        </div>

        {/* Title */}
        <h1 className="home-main-title">
          Welcome to <span className="text-gradient-lime">WebForge Lab</span>
        </h1>
        <p className="home-motto-tag">BUILD • DESIGN • DEPLOY</p>

        {/* Editable About WebForge Lab Content */}
        <div className="home-about-card glass-card">
          <p className="about-text">
            WebForge Lab is a modern web development lab focused on building high-performance web applications, responsive websites, and custom full-stack digital solutions. We transform your ideas into fast, secure, and visually appealing web experiences.
          </p>
        </div>

        {/* Simple Quick Action Buttons */}
        <div className="home-buttons-row">
          <button onClick={() => scrollTo('projects')} className="btn-primary">
            View Projects
          </button>
          <button onClick={() => scrollTo('contact')} className="btn-secondary">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
