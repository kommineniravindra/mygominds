import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiTrendingUp, 
  FiDownload, 
  FiHeadphones, 
  FiPlayCircle, 
  FiCalendar, 
  FiHelpCircle,
  FiArrowRight,
  FiUsers,
  FiBookOpen,
  FiAward,
  FiShield,
  FiClock,
  FiUserCheck,
  FiStar
} from 'react-icons/fi';
import '../UIcss/StudentPortal.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const StudentPortal = () => {
  return (
    <motion.section 
      className="portal-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="portal-container">
        <div className="portal-content">
          
          {/* Left Column */}
          <motion.div className="portal-left" variants={leftVariants}>
            <div className="portal-tag">STUDENT ACCESS</div>
            <h2 className="portal-title">
              Enter Your <br />
              <span className="highlight">Learning Portal</span>
            </h2>
            <p className="portal-desc">
              Access your personalized dashboard to attend sessions, track progress, download resources, and stay connected with MyGo Minds—all in one place.
            </p>
            
            <div className="portal-features">
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiTrendingUp />
                </div>
                <div className="feature-text">
                  <h4>Track Course Progress</h4>
                  <p>Monitor your learning journey</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiPlayCircle />
                </div>
                <div className="feature-text">
                  <h4>Access Recorded Sessions</h4>
                  <p>Learn at your own pace</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiDownload />
                </div>
                <div className="feature-text">
                  <h4>Download Study Materials</h4>
                  <p>Access notes & resources</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiCalendar />
                </div>
                <div className="feature-text">
                  <h4>Attend Live Classes</h4>
                  <p>Join interactive sessions</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiHeadphones />
                </div>
                <div className="feature-text">
                  <h4>Placement Support</h4>
                  <p>Get career & placement help</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon-wrapper">
                  <FiHelpCircle />
                </div>
                <div className="feature-text">
                  <h4>Doubt Clearing Sessions</h4>
                  <p>Get expert guidance</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div className="portal-right" variants={rightVariants}>
            <div className="portal-card">
              <div className="pc-header">
                <div className="pc-logo">
                  <FiStar />
                </div>
                <div className="pc-title">
                  <h3>MyGo Minds Portal</h3>
                  <p>Your Learning. Your Future.</p>
                </div>
              </div>
              
              <div className="pc-stats">
                <div className="pc-stat-box">
                  <div className="pc-stat-icon">
                    <FiUsers />
                  </div>
                  <div className="pc-stat-text">
                    <h4>1000+</h4>
                    <h5>Students</h5>
                    <p>Learning & Growing</p>
                  </div>
                </div>
                
                <div className="pc-stat-box">
                  <div className="pc-stat-icon">
                    <FiBookOpen />
                  </div>
                  <div className="pc-stat-text">
                    <h4>50+</h4>
                    <h5>Courses</h5>
                    <p>Industry-Focused</p>
                  </div>
                </div>
              </div>
              
              <div className="pc-banner">
                <div className="pc-banner-content">
                  <div className="pc-banner-icon">
                    <FiAward />
                  </div>
                  <div className="pc-banner-text">
                    <h4>One Portal. Unlimited Opportunities.</h4>
                    <p>Everything you need to learn, grow & succeed.</p>
                  </div>
                </div>
                <img src="/graduation-books.png" alt="Graduation Cap and Books" className="pc-banner-img" />
              </div>
              
              <a 
                href="https://vncoyt.on-app.in/app/home?orgCode=vncoyt&referrer=utm_source=whatsapp&utm_medium=tutor-app-referral"
                target="_blank"
                rel="noopener noreferrer"
                className="pc-access-btn"
                style={{ textDecoration: 'none' }}
              >
                <span>Go to Student Portal</span>
                <span className="pc-access-btn-icon">
                  <FiArrowRight />
                </span>
              </a>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </motion.section>
  );
};

export default StudentPortal;
