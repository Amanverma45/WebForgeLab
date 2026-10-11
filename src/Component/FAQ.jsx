import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What types of websites and applications do you build?",
      a: "I build custom business websites, professional service portals (such as Jyotishacharya Pandit Hariom Sharma Ji's astrology site), full-stack MERN web platforms (like SwapHub & CareerBridge), interactive dashboards, and mobile-friendly portfolio websites tailored to your specific needs."
    },
    {
      q: "How long does it typically take to complete a project?",
      a: "Standard business websites with WhatsApp and contact integration are typically delivered in 3 to 7 days. Full-stack MERN applications with custom user authentication, database architecture, and APIs usually take 1 to 3 weeks depending on feature complexity."
    },
    {
      q: "Will my website work smoothly on all mobile devices?",
      a: "Yes, 100%. Every project at WebForge Lab is crafted with a mobile-first philosophy. Your website will be ultra-fast, smooth, and perfectly responsive across all mobile phones, tablets, and desktops."
    },
    {
      q: "Can you add direct WhatsApp chat and phone call buttons?",
      a: "Yes! I configure one-click WhatsApp chat triggers and direct phone dial buttons so your visitors can connect with you instantly from any mobile device without friction."
    },
    {
      q: "Do you handle hosting, custom domains, and SSL certificates?",
      a: "Yes. I set up fast, reliable cloud deployment on Vercel or Netlify, connect your custom domain name, ensure free HTTPS/SSL security, and test everything prior to public handover."
    },
    {
      q: "How can I consult with Aman Verma to start my project?",
      a: "You can reach out directly via WhatsApp at +91 8435856067, make a phone call, or submit a message through the contact form below. I will respond quickly to discuss your requirements and provide a clear timeline."
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-container faq-section">
      <div className="section-header">
        <div className="section-tag">FAQ</div>
        <h2 className="section-title">
          Frequently Asked <span className="text-accent">Questions</span>
        </h2>
        <p className="section-subtitle">
          Everything you need to know about working with Aman Verma at WebForge Lab.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`glass-card faq-item ${openIdx === idx ? 'faq-open' : ''}`}
            onClick={() => toggle(idx)}
          >
            <div className="faq-question-row">
              <h3 className="faq-question">{faq.q}</h3>
              <span className="faq-toggle-icon">{openIdx === idx ? '−' : '+'}</span>
            </div>
            {openIdx === idx && (
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
