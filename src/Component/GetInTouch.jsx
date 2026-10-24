import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Business Website',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please enter your name and message.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/amanverma13112025@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Contact_Email_Phone: formData.email || 'Not provided',
          Project_Type: formData.projectType,
          Message: formData.message,
          _subject: `New Project Inquiry from ${formData.name} (${formData.projectType})`
        })
      });

      if (response.ok || response.status === 200) {
        setSubmitted(true);
      } else {
        window.location.href = `mailto:amanverma13112025@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Project Type: ${formData.projectType}\nContact: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Email submission error:', err);
      window.location.href = `mailto:amanverma13112025@gmail.com?subject=Project Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Project Type: ${formData.projectType}\nContact: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container contact-simple-section">
      <div className="section-header">
        <div className="section-tag">Contact</div>
        <h2 className="section-title">
          Get In Touch with <span className="text-accent">Aman Verma</span>
        </h2>
        <p className="section-subtitle">
          Have an idea or need a website? Reach out directly via WhatsApp, Phone, or Email.
        </p>
      </div>

      {/* Direct Contact Channels Grid */}
      <div className="contact-cards-grid">
        {/* Phone Call Card */}
        <a 
          href="tel:+918435856067" 
          className="glass-card contact-channel-card phone-channel-card"
          title="Direct Phone Call to Aman Verma (+91 8435856067)"
        >
          <div className="channel-icon-circle phone-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          <div className="channel-info">
            <span className="channel-label">Direct Phone Call</span>
            <h4 className="channel-val">+91 8435856067</h4>
            <span className="channel-action-badge phone-badge">Tap to Call 📞</span>
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          href="https://wa.me/918435856067?text=Hi%20Aman,%20I%20am%20interested%20in%20WebForge%20Lab%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-channel-card whatsapp-channel-card"
          title="Direct WhatsApp Chat with Aman (+91 8435856067)"
        >
          <div className="channel-icon-circle wa-circle">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.813 2.796.814 3.183 0 5.769-2.588 5.77-5.767 0-3.182-2.587-5.769-5.77-5.769zm3.385 8.169c-.144.405-.837.774-1.17.824-.312.045-.634.053-.984-.047-.282-.081-.613-.194-1.026-.372-1.815-.783-3.003-2.607-3.094-2.729-.091-.122-.738-.981-.738-1.872 0-.89.467-1.328.634-1.507.167-.179.364-.224.486-.224.122 0 .243.002.349.007.113.005.263-.043.412.316.155.372.532 1.297.579 1.392.047.095.078.207.016.331-.062.124-.093.201-.185.31-.093.109-.196.243-.28.327-.093.093-.19.195-.082.382.109.186.483.797 1.034 1.288.71.632 1.309.828 1.495.92.186.093.296.082.406-.044.111-.127.476-.554.603-.744.127-.19.254-.159.423-.095.17.064 1.077.508 1.262.601.185.093.308.138.353.216.046.079.046.455-.098.86z"/>
            </svg>
          </div>
          <div className="channel-info">
            <span className="channel-label">WhatsApp Chat</span>
            <h4 className="channel-val">+91 8435856067</h4>
            <span className="channel-action-badge wa-badge">Direct Chat 💬</span>
          </div>
        </a>

        {/* Email Card */}
        <a 
          href="mailto:amanverma13112025@gmail.com?subject=Project%20Inquiry%20-%20WebForge%20Lab&body=Hi%20Aman,%0A%0AI%20am%20interested%20in%20your%20web%20development%20services.%20Here%20are%20my%20details:" 
          className="glass-card contact-channel-card email-channel-card"
          title="Send email to amanverma13112025@gmail.com"
        >
          <div className="channel-icon-circle email-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="channel-info">
            <span className="channel-label">Email Address</span>
            <h4 className="channel-val email-text">amanverma13112025@gmail.com</h4>
            <span className="channel-action-badge email-badge">Open Email App ✉️</span>
          </div>
        </a>

        {/* Instagram Card */}
        <a
          href="https://instagram.com/webforge_lab"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card contact-channel-card insta-channel-card"
          title="Visit WebForge Lab Instagram Profile"
        >
          <div className="channel-icon-circle insta-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <div className="channel-info">
            <span className="channel-label">Instagram Profile</span>
            <h4 className="channel-val">@webforge_lab</h4>
            <span className="channel-action-badge insta-badge">View Profile ↗</span>
          </div>
        </a>
      </div>

      {/* Quick Contact & Inquiry Form */}
      <div className="glass-card contact-simple-form-wrapper">
        <div className="form-header-area">
          <h3 className="form-title">Send a Project Inquiry</h3>
          <p className="form-subtitle-email">
            Delivered directly to Aman Verma at <strong>amanverma13112025@gmail.com</strong>
          </p>
        </div>

        {submitted ? (
          <div className="form-success-box">
            <div className="success-icon">✓</div>
            <h4>Thank you, {formData.name}!</h4>
            <p>Your message has been received. I will review your requirements and reach out to you shortly.</p>
            <button
              className="btn-secondary"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', projectType: 'Business Website', message: '' });
              }}
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="simple-form">
            <div className="form-row-2">
              <div className="input-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="input-group">
                <label>Email or WhatsApp Number *</label>
                <input
                  type="text"
                  name="email"
                  required
                  placeholder="e.g. name@example.com or 9876543210"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="input-group">
              <label>Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="input-select"
              >
                <option value="Business Website">Custom Business / Client Website</option>
                <option value="Full-Stack MERN App">Full-Stack MERN Web Application</option>
                <option value="Website Redesign">UI/UX Modernization & Redesign</option>
                <option value="Deployment / Cloud">Hosting, Domain & Cloud Setup</option>
                <option value="Other Consultation">Other Consultation / General Inquiry</option>
              </select>
            </div>

            <div className="input-group">
              <label>Project Details / Message *</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Tell me about your project goals, required features, or any questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary form-send-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending Message...' : 'Send Inquiry to Aman'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default GetInTouch;
