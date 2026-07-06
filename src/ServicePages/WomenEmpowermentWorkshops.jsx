import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaPlay, FaUsers, FaMedal, FaHeadset, FaUserAlt, FaBriefcase, 
  FaLaptopCode, FaStore, FaHeart, FaDesktop, FaCheckCircle, FaGraduationCap, FaStar, FaShieldAlt
} from 'react-icons/fa';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import './css/WomenEmpowerment.css';

const WomenEmpowermentWorkshops = () => {
  return (
    <div className="wew-page">
      <SEO 
        title="Women Empowerment Workshops | MyGoMinds Services"
        description="Learn more about Women Empowerment Workshops offered by MyGoMinds Pvt Ltd. Expert training and services in Hyderabad."
        path="/service/women-empowerment-workshops"
      />
      {/* Hero Section */}
      <section className="wew-hero">
        <motion.div className="wew-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="wew-hero-badge">Women Empowerment Workshops</div>
          <h1 className="wew-hero-title">
            Empowering <span className="text-pink">Women.</span><br/>
            Inspiring <span className="text-purple">Futures.</span>
          </h1>
          <p className="wew-hero-desc">
            Our workshops are designed to build confidence, develop in-demand skills, and empower women to achieve personal and professional growth.
          </p>
        </motion.div>
        
        <motion.div className="wew-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="wew-hero-image-wrapper">
            <img src="/services/women.png" alt="Women collaborating" />
          </div>
        </motion.div>
      </section>

      {/* Features Bar */}
      <div className="wew-features-bar">
        <div className="wew-feature-item">
          <div className="wew-feature-icon"><FaUsers /></div>
          <div className="wew-feature-text">
            <h4>Expert Trainers</h4>
            <p>Industry professionals with real-world experience</p>
          </div>
        </div>
        <div className="wew-feature-item">
          <div className="wew-feature-icon" style={{ background: '#fdf2f8', color: '#db2777' }}><FaHeart /></div>
          <div className="wew-feature-text">
            <h4>Practical Learning</h4>
            <p>Hands-on activities and real-life use cases</p>
          </div>
        </div>
        <div className="wew-feature-item">
          <div className="wew-feature-icon" style={{ background: '#fff7ed', color: '#ea580c' }}><FaMedal /></div>
          <div className="wew-feature-text">
            <h4>Certification</h4>
            <p>Recognized certificates upon completion</p>
          </div>
        </div>
        <div className="wew-feature-item">
          <div className="wew-feature-icon" style={{ background: '#fce7f3', color: '#be185d' }}><FaHeadset /></div>
          <div className="wew-feature-text">
            <h4>Lifetime Support</h4>
            <p>Guidance and support even after the workshop</p>
          </div>
        </div>
      </div>

      {/* What You'll Learn */}
      <section className="wew-learn-section">
        <div className="wew-section-header">
          <h2>What You'll <span className="text-purple">Learn</span></h2>
          <p>Practical skills and knowledge to help you grow, lead and succeed.</p>
        </div>
        
        <div className="wew-learn-grid">
          <motion.div className="wew-learn-card lc-pink" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="wew-learn-icon-wrapper"><FaUserAlt /></div>
            <h4>Personal Growth</h4>
            <p>Build confidence, positive mindset and self-leadership skills.</p>
          </motion.div>
          
          <motion.div className="wew-learn-card lc-teal" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="wew-learn-icon-wrapper"><FaBriefcase /></div>
            <h4>Career Skills</h4>
            <p>Learn in-demand skills to advance your career opportunities.</p>
          </motion.div>

          <motion.div className="wew-learn-card lc-purple" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="wew-learn-icon-wrapper"><FaLaptopCode /></div>
            <h4>Digital Literacy</h4>
            <p>Gain digital skills to stay independent and future ready.</p>
          </motion.div>

          <motion.div className="wew-learn-card lc-orange" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="wew-learn-icon-wrapper"><FaStore /></div>
            <h4>Entrepreneurship</h4>
            <p>Start, grow and manage your own business with confidence.</p>
          </motion.div>

          <motion.div className="wew-learn-card lc-blue" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
            <div className="wew-learn-icon-wrapper"><FaHeart /></div>
            <h4>Financial Literacy</h4>
            <p>Manage money smartly and build a secure financial future.</p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Programs */}
      <section className="wew-programs-section">
        <span className="wew-subtitle-sm">OUR WORKSHOP PROGRAMS</span>
        <div className="wew-section-header" style={{ marginBottom: 0 }}>
          <h2 style={{ color: '#111827' }}>Empower. Enable. Excel.</h2>
          <p>Programs tailored to inspire and empower women at every stage.</p>
        </div>

        <div className="wew-programs-grid">
          <motion.div className="wew-program-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="wew-program-img-wrapper">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Confidence Building" />
              <div className="wew-program-badge-icon" style={{ background: '#ec4899' }}><FaUserAlt /></div>
            </div>
            <div className="wew-program-content">
              <h3>Confidence Building for Women</h3>
              <p>Build self-confidence, self-reliance, and communication skills to empower yourself in everyday life.</p>
              <Link to="/contact" className="wew-program-link text-pink">Learn More <FiArrowRight/></Link>
            </div>
          </motion.div>

          <motion.div className="wew-program-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="wew-program-img-wrapper">
              <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80" alt="Digital Skills" />
              <div className="wew-program-badge-icon" style={{ background: '#0d9488' }}><FaDesktop /></div>
            </div>
            <div className="wew-program-content">
              <h3>Digital Skills for Homemakers</h3>
              <p>Learn essential digital tools, internet basics, and online applications to stay connected and productive.</p>
              <Link to="/contact" className="wew-program-link" style={{ color: '#0d9488' }}>Learn More <FiArrowRight/></Link>
            </div>
          </motion.div>

          <motion.div className="wew-program-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div className="wew-program-img-wrapper">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" alt="Women Safety" />
              <div className="wew-program-badge-icon" style={{ background: '#ea580c' }}><FaShieldAlt /></div>
            </div>
            <div className="wew-program-content">
              <h3>Women Safety & Cyber Awareness</h3>
              <p>Learn essential personal safety strategies and how to protect yourself and your family online.</p>
              <Link to="/contact" className="wew-program-link" style={{ color: '#ea580c' }}>Learn More <FiArrowRight/></Link>
            </div>
          </motion.div>

          <motion.div className="wew-program-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <div className="wew-program-img-wrapper">
              <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80" alt="Work From Home" />
              <div className="wew-program-badge-icon" style={{ background: '#8b5cf6' }}><FaLaptopCode /></div>
            </div>
            <div className="wew-program-content">
              <h3>Work-From-Home Opportunities</h3>
              <p>Discover flexible work-from-home careers and develop the skills needed to succeed remotely.</p>
              <Link to="/contact" className="wew-program-link text-purple">Learn More <FiArrowRight/></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="wew-why-section">
        <motion.div className="wew-why-image-col" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
          <img src="/services/women1.png" alt="Empowered Woman" />
        </motion.div>
        
        <motion.div className="wew-why-content-col" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <div className="wew-why-header">
            <span className="wew-subtitle-sm text-pink" style={{ textTransform: 'uppercase', marginBottom: '10px', display: 'block', fontWeight: '800' }}>WHY JOIN US?</span>
            <h2 className="wew-split-title">
              Empowering <span className="text-pink">Women.</span> Strengthening <span className="text-purple">Communities.</span>
            </h2>
          </div>
          
          <div className="wew-why-body">
            <div className="wew-why-list-col">
              <ul className="wew-check-list">
                <li><span className="wew-check-circle"><FiCheck/></span> Supportive learning environment</li>
                <li><span className="wew-check-circle"><FiCheck/></span> Practical and action-oriented training</li>
                <li><span className="wew-check-circle"><FiCheck/></span> Networking and community support</li>
                <li><span className="wew-check-circle"><FiCheck/></span> Opportunities for growth and independence</li>
              </ul>
            </div>
            
            <div className="wew-why-stats-col">
              <div className="wew-stats-row">
                <div className="wew-stat-card stat-pink">
                  <FaUsers className="wew-stat-icon"/>
                  <h4>5000+</h4>
                  <p>Women Trained</p>
                </div>
                <div className="wew-stat-card stat-purple">
                  <FaGraduationCap className="wew-stat-icon"/>
                  <h4>200+</h4>
                  <p>Workshops Conducted</p>
                </div>
                <div className="wew-stat-card stat-blue">
                  <FaBriefcase className="wew-stat-icon"/>
                  <h4>100%</h4>
                  <p>Practical Learning</p>
                </div>
                <div className="wew-stat-card stat-orange">
                  <FaStar className="wew-stat-icon"/>
                  <h4>95%</h4>
                  <p>Positive Feedback</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Banner */}
      <div className="wew-cta-banner">
        <div className="wew-cta-visual">
          <FaUserAlt style={{ fontSize: '100px', color: 'rgba(255,255,255,0.2)' }} />
        </div>
        <div className="wew-cta-text">
          <h2>Ready to Empower Yourself?</h2>
          <p>Join our workshops and take the first step towards your brighter future.</p>
        </div>
        <div className="wew-cta-action">
          <Link to="/contact" className="wew-cta-btn-white">Enroll Now <FiArrowRight className="arrow"/></Link>
        </div>
      </div>

    </div>
  );
};

export default WomenEmpowermentWorkshops;
