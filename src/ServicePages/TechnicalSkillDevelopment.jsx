import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaLaptop, FaVolumeUp, FaCloud, FaShieldAlt, FaCode, FaChartBar, FaMobileAlt, FaMedal, FaBookOpen, FaRocket } from 'react-icons/fa';
import { FiArrowRight, FiUsers, FiClock, FiCheckCircle, FiStar, FiBriefcase, FiTrendingUp, FiZap, FiSmartphone, FiBarChart2, FiCloud as FiCloudLine, FiCode as FiCodeLine, FiShield as FiShieldLine, FiRadio, FiPenTool } from 'react-icons/fi';
import { SiCanva } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './css/TechnicalSkill.css';

const TechnicalSkillDevelopment = () => {
  return (
    <div className="tsd-page">
      <SEO 
        title="Technical Skill Development | MyGoMinds Services"
        description="Learn more about Technical Skill Development offered by MyGoMinds Pvt Ltd. Expert training and services in Hyderabad."
        path="/service/technical-skill-development"
      />
      {/* Hero Section */}
      <section className="tsd-hero">
        <div className="tsd-hero-bg-dots"></div>
        <div className="tsd-hero-bg-shape"></div>
        
        <motion.div className="tsd-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="tsd-hero-badge">
            <FiStar className="badge-icon" /> Empowering Careers. Building Futures.
          </div>
          <h1 className="tsd-hero-title"><span className="tech-highlight">Technical</span> Skill<br/>Development Programs</h1>
          <p className="tsd-hero-desc">Build <span className="tech-highlight-alt">Industry-Ready</span> Skills with Expert-Led Training</p>
          
          <div className="tsd-hero-features-list">
            <div className="tsd-hero-feature-item">
              <div className="hf-icon-circle bg-blue"><FiUsers /></div>
              <div className="hf-text">Expert<br/>Instructors</div>
            </div>
            <div className="tsd-hero-feature-item">
              <div className="hf-icon-circle bg-teal"><FiBriefcase /></div>
              <div className="hf-text">Hands-on<br/>Learning</div>
            </div>
            <div className="tsd-hero-feature-item">
              <div className="hf-icon-circle bg-purple"><FiTrendingUp /></div>
              <div className="hf-text">Career<br/>Growth</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div className="tsd-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="tsd-hero-visual-composite">
            <img src="/developer-illustration.png" alt="Developer" className="tsd-developer-img" />
            
            {/* Code Editor Window */}
            <div className="tsd-code-editor">
              <div className="tsd-code-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="tsd-code-body">
                <div className="code-line w-70 c-blue"></div>
                <div className="code-line w-40 c-purple indent-1"></div>
                <div className="code-line w-80 c-blue indent-1"></div>
                <div className="code-line w-60 c-yellow indent-2"></div>
                <div className="code-line w-50 c-green indent-2"></div>
                <div className="code-line w-90 c-blue indent-1"></div>
                <div className="code-line w-30 c-purple"></div>
              </div>
            </div>
            
            {/* Floating Tags */}
            <div className="tsd-float-tag tag-code">
              <span>{'</>'}</span>
            </div>
            <div className="tsd-float-tag tag-brackets">
              <span>{'{ }'}</span>
            </div>
            
            {/* Floating Checklist */}
            <div className="tsd-float-checklist">
              <div className="check-item"><FiCheckCircle className="c-green" /> <div className="line"></div></div>
              <div className="check-item"><FiCheckCircle className="c-green" /> <div className="line"></div></div>
              <div className="check-item"><FiCheckCircle className="c-green" /> <div className="line"></div></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="tsd-stats-bar">
        <div className="tsd-stat-item">
          <FiUsers className="tsd-stat-icon" />
          <div className="tsd-stat-text">
            <h4>1000+ Students</h4>
            <p>Trained Successfully</p>
          </div>
        </div>
        <div className="tsd-stat-item">
          <FaMedal className="tsd-stat-icon" />
          <div className="tsd-stat-text">
            <h4>Industry Certified</h4>
            <p>Recognized Programs</p>
          </div>
        </div>
        <div className="tsd-stat-item">
          <FiClock className="tsd-stat-icon" />
          <div className="tsd-stat-text">
            <h4>Flexible Timings</h4>
            <p>Weekend & Weekday Batches</p>
          </div>
        </div>
        <div className="tsd-stat-item">
          <FaRocket className="tsd-stat-icon" />
          <div className="tsd-stat-text">
            <h4>100% Practical</h4>
            <p>Hands-on Learning</p>
          </div>
        </div>
      </div>

      {/* Programs MindMap Section (Replaced with Image) */}
      <section className="tsd-programs" id="programs">
        <div className="tsd-programs-banner">
          <img 
            src="/banners/technical.png" 
            alt="Technical Skills Banner" 
            className="tsd-programs-image"
          />
        </div>
      </section>

      {/* CTA Banner */}
      <div className="tsd-cta-banner">
        <div className="tsd-cta-logo">
          <img src="/title.png" alt="MygoMinds" />
        </div>
        <div className="tsd-cta-text">
          <h2>Ready to <span>Build Your Skills</span>?</h2>
          <p>Join our programs and take the next step towards a better career and brighter future.</p>
        </div>
        <div className="tsd-cta-action">
          <Link to="/contact" className="tsd-cta-btn-white">Enroll Now <FiArrowRight/></Link>
          <p>🗓 New batches starting soon!</p>
        </div>
      </div>


      
    </div>
  );
};

export default TechnicalSkillDevelopment;
