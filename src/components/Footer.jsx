import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin, FiHome, FiInfo, FiMonitor, FiUsers, FiImage, FiSend, FiLock } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section company-info">
          <div className="footer-logo">
            <img src="/logo.png" alt="MygoMinds Logo" className="logo-image" />
          </div>
          <p className="footer-description">
            Empowering students and professionals with top-notch training, interactive events, and community-driven learning experiences that shape successful careers.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/mygominds/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://www.instagram.com/mygominds/" target="_blank" rel="noopener noreferrer" className="social-icon instagram" aria-label="Instagram"><FiInstagram /></a>
            <a href="https://www.youtube.com/@mygominds" target="_blank" rel="noopener noreferrer" className="social-icon youtube" aria-label="YouTube"><FiYoutube /></a>
            <a href="https://www.facebook.com/people/Mygominds/61567813832047/#" target="_blank" rel="noopener noreferrer" className="social-icon facebook" aria-label="Facebook"><FiFacebook /></a>
            <a href="https://play.google.com/store/apps/details?id=co.nick.lukgi&hl=en-US" target="_blank" rel="noopener noreferrer" className="social-icon playstore" aria-label="Google Play Store"><FaGooglePlay /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-links">
            <li><Link to="/"><span className="explore-icon-wrapper color-blue"><FiHome className="link-icon" /></span> Home</Link></li>
            <li><Link to="/about"><span className="explore-icon-wrapper color-purple"><FiInfo className="link-icon" /></span> About Us</Link></li>
            <li><Link to="/online-batches"><span className="explore-icon-wrapper color-green"><FiMonitor className="link-icon" /></span> Online Batches</Link></li>
            <li><Link to="/offline-batches"><span className="explore-icon-wrapper color-pink"><FiUsers className="link-icon" /></span> Offline Batches</Link></li>
            <li><Link to="/gallery"><span className="explore-icon-wrapper color-orange"><FiImage className="link-icon" /></span> Our Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-contact">
            <li>
              <div className="contact-icon-wrapper color-green"><FiPhone /></div>
              <div className="contact-text">
                <span className="contact-label">CALL US</span>
                <span className="contact-value">+91 88853 84111</span>
              </div>
            </li>
            <li>
              <div className="contact-icon-wrapper color-pink"><FiMapPin /></div>
              <div className="contact-text">
                <span className="contact-label">LOCATION</span>
                <span className="contact-value">Sai Ram Towers, <br/>Above Vijetha Super Market,<br/>Near JNTU Circle, <br/>KPHB, Hyderabad.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter-section">
          <h3 className="footer-heading">Subscribe to our newsletter</h3>
          <p className="newsletter-subtext">Get updates on new courses, batches, and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
            <button type="submit" aria-label="Subscribe" className="newsletter-btn">
              <FiSend />
            </button>
          </form>
          <p className="privacy-text"><FiLock className="lock-icon" /> We respect your privacy. Unsubscribe anytime.</p>
          
          <div className="newsletter-email-contact">
            <div className="contact-icon-wrapper color-blue"><FiMail /></div>
            <div className="contact-text">
              <span className="contact-label">EMAIL US</span>
              <span className="contact-value">mygominds@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; {new Date().getFullYear()} MygoMinds. All rights reserved.</p>
        </div>
        <div className="footer-bottom-center">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span className="separator">|</span>
          <Link to="/terms-conditions">Terms & Conditions</Link>
          <span className="separator">|</span>
          <Link to="/refund-policy">Refund Policy</Link>
        </div>
        <div className="footer-bottom-right">
          <p>Made with <span className="heart">❤️</span> in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
