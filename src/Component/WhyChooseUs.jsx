import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const pillars = [
    {
      num: "01",
      title: "Direct Developer Contact",
      desc: "No middlemen or miscommunication. You collaborate directly with Aman Verma from initial brainstorming to final deployment."
    },
    {
      num: "02",
      title: "High Performance & Fast Loads",
      desc: "Built with Vite & React for clean bundles, quick rendering, and SEO-friendly architectures that load under a second."
    },
    {
      num: "03",
      title: "100% Mobile Responsive",
      desc: "Every button, card, and image is tested rigorously to look and feel stunning across all mobile phones, tablets, and laptops."
    },
    {
      num: "04",
      title: "Zero-Hassle Live Deployment",
      desc: "Complete setup on Netlify/Vercel, custom domain connection, SSL security, Cloudinary assets, and working contact APIs."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Requirement & Goals",
      desc: "We discuss your project vision, target audience, key features, and brand design preferences."
    },
    {
      step: "02",
      title: "UI Design & Flow",
      desc: "Crafting a clean, user-friendly interface with intuitive navigation and modern aesthetics."
    },
    {
      step: "03",
      title: "Clean Code Development",
      desc: "Building the application using React.js, Tailwind/CSS3, Node.js, and secure database endpoints."
    },
    {
      step: "04",
      title: "Live Deployment & Handover",
      desc: "Testing on all devices, launching live on production hosting, and connecting your custom domain."
    }
  ];

  return (
    <section id="why-us" className="section-container why-us-simple-section">
      <div className="section-header">
        <div className="section-tag">Why Work With Me</div>
        <h2 className="section-title">
          Why Choose <span className="text-accent">WebForge Lab</span>?
        </h2>
        <p className="section-subtitle">
          Real expertise, transparent communication, and solid code engineering focused on delivering results.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="why-pillars-grid">
        {pillars.map((item, idx) => (
          <div key={idx} className="glass-card why-pillar-card">
            <span className="pillar-num">{item.num}</span>
            <h3 className="pillar-title">{item.title}</h3>
            <p className="pillar-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* 4-Step Working Process */}
      <div className="work-process-container glass-card">
        <div className="process-header">
          <span className="process-badge">My Work Process</span>
          <h3 className="process-title">How Your Project Goes from Idea to Live Website</h3>
        </div>

        <div className="process-steps-grid">
          {steps.map((st, i) => (
            <div key={i} className="process-step-card">
              <span className="step-num-badge">{st.step}</span>
              <h4 className="step-card-title">{st.title}</h4>
              <p className="step-card-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
