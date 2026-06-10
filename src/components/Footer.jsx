import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiMail, FiPhone, FiMapPin, FiHome, FiInfo, FiMonitor, FiUsers, FiImage } from 'react-icons/fi';
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
            Empowering students and professionals with top-notch training, events, and community-driven learning experiences.
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
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><FiHome className="link-icon" /> Home</Link></li>
            <li><Link to="/about"><FiInfo className="link-icon" /> About Us</Link></li>
            <li><Link to="/online-batches"><FiMonitor className="link-icon" /> Online Batches</Link></li>
            <li><Link to="/offline-batches"><FiUsers className="link-icon" /> Offline Batches</Link></li>
            <li><Link to="/gallery"><FiImage className="link-icon" /> Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <FiPhone className="contact-icon" />
              <span>+91 8885302122</span>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <span>mygominds@gmail.com</span>
            </li>
            <li>
              <FiMapPin className="contact-icon" />
              <span>Sai Ram Towers,<br></br> Above Vijetha Super Market, <br></br>JNTU Circle, KPHB, Hyderabad.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MygoMinds. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
