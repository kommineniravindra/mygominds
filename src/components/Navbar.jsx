import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiPhone, FiMail, FiLinkedin, FiInstagram, FiYoutube, FiFacebook, FiGlobe, FiMapPin, FiChevronDown, FiMenu, FiX, FiHome, FiBookOpen, FiImage, FiLayers, FiInfo, FiFileText, FiUser, FiAward } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Match navbar background to each page's background color
  const navBg = {
    '/about':   '#FDF9F7',
    '/contact': '#ffffff',
    '/gallery': '#ffffff',
    '/online-batches':  '#ffffff',
    '/offline-batches': '#ffffff',
  }[location.pathname] ?? 'rgba(255, 255, 255, 0.85)';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="top-navbar" style={{ backgroundColor: navBg }}>
        <div className="top-navbar-container">
          <div className="top-navbar-left">
            <div className="top-nav-item">
              <FiPhone className="top-icon" />
              <span>+91 8885302122</span>
            </div>
            <div className="top-nav-item">
              <FiMail className="top-icon" />
              <span>mygominds@gmail.com</span>
            </div>
          </div>

          <div className="top-navbar-center">
            <div className="top-marquee-container">
              <div className="top-marquee-content">
                <span className="marquee-text">🚀 New batches starting soon! Book your seat now and get early bird discounts. 🎓 &nbsp;&nbsp;|&nbsp;&nbsp; 🌟 Master in-demand IT skills with expert-led courses! &nbsp;&nbsp;|&nbsp;&nbsp; 💼 100% Placement Assistance Guaranteed! &nbsp;&nbsp;|&nbsp;&nbsp; 📞 Call us today to schedule a free counseling session! &nbsp;&nbsp;|&nbsp;&nbsp; </span>
                <span className="marquee-text">🚀 New batches starting soon! Book your seat now and get early bird discounts. 🎓 &nbsp;&nbsp;|&nbsp;&nbsp; 🌟 Master in-demand IT skills with expert-led courses! &nbsp;&nbsp;|&nbsp;&nbsp; 💼 100% Placement Assistance Guaranteed! &nbsp;&nbsp;|&nbsp;&nbsp; 📞 Call us today to schedule a free counseling session! &nbsp;&nbsp;|&nbsp;&nbsp; </span>
              </div>
            </div>
          </div>

          <div className="top-navbar-right">
            <a href="https://www.linkedin.com/company/mygominds/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.instagram.com/mygominds/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="https://www.youtube.com/@mygominds" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
              <FiYoutube />
            </a>
            <a href="https://www.facebook.com/people/Mygominds/61567813832047/#" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="https://play.google.com/store/apps/details?id=co.nick.lukgi&hl=en-US" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Google Play Store">
              <FaGooglePlay />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar" style={{ backgroundColor: navBg }}>
        <div className="navbar-container">
          {/* Logo Section */}
          <div className="navbar-logo">
            <img src="/logo.png" alt="MygoMinds Logo" className="logo-image" />
          </div>

          {/* Mobile Menu Icon */}
          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Links Section */}
          <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMobileMenu}><FiHome className="nav-icon" /> Home</Link></li>
            <li><Link to="/courses" className={location.pathname === '/courses' ? 'active' : ''} onClick={closeMobileMenu}><FiBookOpen className="nav-icon" /> Courses</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={closeMobileMenu}><FiImage className="nav-icon" /> Gallery</Link></li>
            <li><Link to="/alumni" className={location.pathname === '/alumni' ? 'active' : ''} onClick={closeMobileMenu}><FiAward className="nav-icon" /> Alumni</Link></li>
            <li className="dropdown">
              <a href="#new-batches" className="dropbtn">
                <span className="dropbtn-content"><FiLayers className="nav-icon" /> New Batches</span>
                <FiChevronDown className="dropdown-arrow-icon" />
              </a>
              <div className="dropdown-content">
                <Link to="/online-batches" className="dropdown-item online-item" onClick={closeMobileMenu}>
                  <div className="dropdown-item-content">
                    <FiGlobe className="dropdown-icon online-icon" />
                    <div>
                      <span className="dropdown-title">Online Batches</span>
                      <p className="dropdown-desc">Join our live interactive sessions from anywhere.</p>
                    </div>
                  </div>
                </Link>
                <Link to="/offline-batches" className="dropdown-item offline-item" onClick={closeMobileMenu}>
                  <div className="dropdown-item-content">
                    <FiMapPin className="dropdown-icon offline-icon" />
                    <div>
                      <span className="dropdown-title">Offline Batches</span>
                      <p className="dropdown-desc">Experience in-person learning at our center.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
            <li><Link to="/exam" className={location.pathname === '/exam' ? 'active' : ''} onClick={closeMobileMenu}><FiFileText className="nav-icon" /> Exam</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMobileMenu}><FiInfo className="nav-icon" /> About Us</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMobileMenu}><FiUser className="nav-icon" /> Contact</Link></li>
          </ul>

          {/* CTA Section */}
          <div className="navbar-cta">
            <button className="enroll-btn">Enroll Now</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
