import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import './Testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  // Fetch reviews from Supabase
  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews from Supabase:', error);
      } else if (data) {
        // Exclude test / placeholder reviews
        const cleanReviews = data.filter(
          item => item.name !== 'Test Client' && !item.review?.toLowerCase().includes('testing supabase')
        );
        setReviews(cleanReviews);
      }
    } catch (e) {
      console.error('Error reading reviews:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Just Now';
    try {
      const d = new Date(dateString);
      if (isNaN(d.getTime())) return 'Recently';
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return 'Recently';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) {
      alert("Please fill in your name and review.");
      return;
    }

    setSubmitting(true);

    // Generate Initials
    const initials = name
      .trim()
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || 'CU';

    const newReviewData = {
      name: name.trim(),
      role: role.trim() || 'Verified Client',
      avatar: initials,
      rating: Number(rating) || 5,
      badge: 'Client Review',
      review: reviewText.trim()
    };

    try {
      const { data, error } = await supabase
        .from('testimonials')
        .insert([newReviewData])
        .select();

      if (error) {
        console.error("Error saving review to Supabase:", error);
        alert("Failed to save review. Please make sure the 'testimonials' table exists in Supabase.");
      } else {
        const savedItem = data && data.length > 0 ? data[0] : { ...newReviewData, id: Date.now(), created_at: new Date().toISOString() };
        setReviews(prev => [savedItem, ...prev]);
        setName('');
        setRole('');
        setRating(5);
        setReviewText('');
        setShowForm(false);
        setSubmittedMessage(true);

        setTimeout(() => {
          setSubmittedMessage(false);
        }, 5000);
      }
    } catch (err) {
      console.error("Supabase insert error:", err);
      alert("Something went wrong while submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const hasReviews = reviews.length > 0;
  const averageRating = hasReviews
    ? (reviews.reduce((acc, curr) => acc + (Number(curr.rating) || 5), 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <section id="reviews" className="section-container testimonials-section">
      <div className="section-header">
        <div className="section-tag">Client Feedback</div>
        <h2 className="section-title">
          Client Reviews & <span className="text-accent">Testimonials</span>
        </h2>
        <p className="section-subtitle">
          Genuine feedback from business owners, clients, and platform users who have worked directly with Aman Verma.
        </p>
      </div>

      {/* Top Trust Summary Bar */}
      <div className="reviews-trust-bar glass-card">
        <div className="trust-item">
          <div className="trust-stars">★★★★★</div>
          <div className="trust-info">
            <span className="trust-number">{hasReviews ? `${averageRating} / 5.0` : '5.0 / 5.0'}</span>
            <span className="trust-label">{hasReviews ? 'Average Rating' : 'Target Rating'}</span>
          </div>
        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">
          <span className="trust-icon">🚀</span>
          <div className="trust-info">
            <span className="trust-number">100%</span>
            <span className="trust-label">On-Time Handover</span>
          </div>
        </div>

        <div className="trust-divider"></div>

        <div className="trust-item">
          <span className="trust-icon">🤝</span>
          <div className="trust-info">
            <span className="trust-number">{reviews.length}</span>
            <span className="trust-label">Client Reviews</span>
          </div>
        </div>

        <div className="trust-cta-wrap">
          <button 
            onClick={() => setShowForm(!showForm)} 
            className="btn-primary write-review-toggle-btn"
          >
            {showForm ? '✕ Close Form' : '★ Write a Review'}
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {submittedMessage && (
        <div className="review-success-toast glass-card">
          <span className="toast-icon">✓</span>
          <div>
            <strong>Thank you for your feedback!</strong>
            <p>Your review has been saved and published successfully to WebForge Lab.</p>
          </div>
        </div>
      )}

      {/* Interactive Review Form */}
      {showForm && (
        <div className="write-review-card glass-card">
          <div className="form-card-header">
            <h3 className="form-card-title">Share Your Experience with WebForge Lab</h3>
            <p className="form-card-subtitle">Your genuine review will be visible live to all visitors on this website.</p>
          </div>

          <form onSubmit={handleSubmit} className="review-form">
            <div className="rating-select-group">
              <label>Select Your Rating:</label>
              <div className="star-picker">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`star-btn ${(hoverRating || rating) >= star ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    ★
                  </button>
                ))}
                <span className="rating-text">({rating} of 5 Stars)</span>
              </div>
            </div>

            <div className="form-row-2">
              <div className="review-input-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="review-input-group">
                <label>Designation or Project Name</label>
                <input
                  type="text"
                  placeholder="e.g. Business Owner / E-commerce Site"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>

            <div className="review-input-group">
              <label>Your Review & Feedback *</label>
              <textarea
                required
                rows="4"
                placeholder="How was your experience working with Aman Verma? Mention communication, speed, responsiveness..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>
            </div>

            <div className="form-actions-row">
              <button 
                type="submit" 
                className="btn-primary submit-review-btn"
                disabled={submitting}
              >
                <span>{submitting ? 'Publishing...' : 'Publish Review'}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>

              <button 
                type="button" 
                onClick={() => setShowForm(false)} 
                className="btn-secondary cancel-review-btn"
                disabled={submitting}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews Display */}
      {loading ? (
        <div className="reviews-loading-state glass-card" style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted, #94a3b8)' }}>
          <p>Loading real-time reviews...</p>
        </div>
      ) : hasReviews ? (
        <div className="reviews-grid">
          {reviews.map((item) => (
            <div key={item.id} className="glass-card review-card">
              <div className="review-card-top">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">{item.avatar || 'CU'}</div>
                  <div>
                    <h4 className="reviewer-name">{item.name}</h4>
                    <p className="reviewer-role">{item.role || 'Verified Client'}</p>
                  </div>
                </div>
                <span className="review-badge">{item.badge || 'Client Review'}</span>
              </div>

              <div className="review-rating-row">
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={i < (Number(item.rating) || 5) ? 'star-filled' : 'star-empty'}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="review-date">{formatDate(item.created_at || item.date)}</span>
              </div>

              <p className="review-text">"{item.review}"</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="reviews-empty-state glass-card">
          <div className="empty-state-icon">⭐</div>
          <h3 className="empty-state-title">No Client Reviews Yet</h3>
          <p className="empty-state-sub">
            Have you worked with Aman Verma at WebForge Lab? Click below to share your genuine client review!
          </p>
          <button 
            onClick={() => setShowForm(true)} 
            className="btn-primary"
          >
            ★ Be the First to Leave a Review
          </button>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
