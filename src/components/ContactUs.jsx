import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock, FiShield, FiChevronRight, FiCalendar, FiArrowRight, FiSend } from 'react-icons/fi';
import { BsSend } from 'react-icons/bs';
import '../css/ContactUs.css';

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      const response = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setStatus('');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Failed to send message'}`);
        setStatus('');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Error connecting to the server. Please try again later.');
      setStatus('');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-content-grid">
        
        {/* Left Column: Contact Info */}
        <div className="contact-left">
          <div className="contact-header-left">
            <span className="orange-label">GET IN TOUCH</span>
            <h1 className="contact-main-heading">We'd Love to</h1>
            <h1 className="contact-main-heading italic-orange">Hear From You!</h1>
            <div className="orange-underline"></div>
            <p className="contact-description">
              Have questions about our courses or placements?<br/>
              We're here to help you take the next step in your career.
            </p>
          </div>

          <div className="contact-cards-list">
            <div className="contact-card">
              <div className="card-icon-wrapper">
                <FiPhone className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Call Us</h4>
                <p className="card-primary">+91 8885302122</p>
                <p className="card-secondary">(Mon – Sat, 10:00 AM – 7:00 PM)</p>
              </div>
              <FiChevronRight className="card-arrow" />
            </div>

            <div className="contact-card">
              <div className="card-icon-wrapper">
                <FiMail className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Email Us</h4>
                <p className="card-primary">mygominds@gmail.com</p>
                <p className="card-secondary">We'll respond within 24 hours</p>
              </div>
              <FiChevronRight className="card-arrow" />
            </div>

            <div className="contact-card">
              <div className="card-icon-wrapper">
                <FiMapPin className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Visit Us</h4>
                <p className="card-primary">Sai Ram Towers, Above Vijetha Super Market,</p>
                <p className="card-secondary">JNTU Circle, KPHB, Hyderabad</p>
              </div>
              <FiChevronRight className="card-arrow" />
            </div>

            <div className="contact-card">
              <div className="card-icon-wrapper">
                <FiClock className="card-icon" />
              </div>
              <div className="card-info">
                <h4>Office Hours</h4>
                <p className="card-primary">Monday – Saturday</p>
                <p className="card-secondary">10:00 AM – 7:00 PM</p>
              </div>
              <FiChevronRight className="card-arrow" />
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-right">
          <div className="form-container-box">
            <div className="form-top-header">
              <div className="form-header-icon">
                <BsSend />
              </div>
              <div className="form-header-text">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modern-form">
              <div className="form-row-2">
                <div className="input-group">
                  <label>Full Name <span className="req">*</span></label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
                </div>
                <div className="input-group">
                  <label>Email Address <span className="req">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
                </div>
              </div>

              <div className="form-row-2">
                <div className="input-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                </div>
                <div className="input-group">
                  <label>Subject <span className="req">*</span></label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required>
                    <option value="" disabled>Select a subject</option>
                    <option value="Course Inquiry">Course Inquiry</option>
                    <option value="Placement Support">Placement Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="input-group">
                <label>Message <span className="req">*</span></label>
                <div className="textarea-wrapper">
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Write your message here..." required></textarea>
                  <span className="char-count">{formData.message.length}/500</span>
                </div>
              </div>

              <div className="privacy-badge">
                <FiShield className="shield-icon" />
                <span>We respect your privacy. Your information is safe with us.</span>
              </div>

              <button type="submit" className="form-submit-btn" disabled={status === 'Submitting...'}>
                {status === 'Submitting...' ? 'Sending...' : 'Send Message'} <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="contact-bottom-banner">
        <div className="banner-left">
          <div className="banner-image-placeholder">
             <img src="/contact.png" alt="Instructor" className="instructor-img" />
          </div>
        </div>
        <div className="banner-center">
          <h3>Ready to start your journey?</h3>
          <p>Book a free demo class and experience the Mygo Minds difference.</p>
        </div>
        <div className="banner-right">
          <button className="book-demo-btn">
            <FiCalendar className="orange-icon" />Click Free Demo
          </button>
          <button className="explore-btn" onClick={() => navigate('/courses')}>
            Explore Courses <FiArrowRight className="orange-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
