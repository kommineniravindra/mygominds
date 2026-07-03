import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaCompass, FaFileAlt, FaComments, FaChessKing, FaBrain, FaPlayCircle, FaUserAlt, FaChartBar } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle, FiUsers, FiAward, FiTarget } from 'react-icons/fi';
import './css/ServicePage.css';
import './css/PersonalizedCareer.css';

const PersonalizedCareerMentoring = () => {
  return (
    <div className="pcm-page">
      <section className="pcm-hero">
        <div className="pcm-hero-bg-curve"></div>
        <div className="pcm-hero-dots"></div>

        <motion.div className="pcm-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="pcm-badge">ONE-TO-ONE GUIDANCE. REAL CAREER GROWTH.</div>
          <h1 className="pcm-title">
            Personalized<br/>
            <span className="pcm-title-highlight">Career Mentoring</span>
          </h1>
          <p className="pcm-desc">
            Get expert guidance tailored to your goals.<br/>
            Build the right skills, prepare with confidence,<br/>
            and step into your dream career.
          </p>
          <div className="pcm-actions">
            <a href="/contact" className="pcm-btn-primary">Book a Mentoring Session <FiArrowRight /></a>
            <a href="#how-it-works" className="pcm-btn-outline"><FaPlayCircle className="play-icon-small" /> How It Works</a>
          </div>
        </motion.div>

        <motion.div className="pcm-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="pcm-hero-img-wrapper">
            <img src="/services/carrer.png" alt="Mentoring Session" className="pcm-hero-img" />
          </div>
        </motion.div>

        <div className="pcm-bottom-bar-wrapper">
          <motion.div className="pcm-bottom-bar" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <div className="pcm-feature-item">
              <FaUserAlt className="pcm-feature-icon" />
              <div className="pcm-feature-text">1:1 Expert<br/>Mentoring</div>
            </div>
            <div className="pcm-divider"></div>
            
            <div className="pcm-feature-item">
              <FiTarget className="pcm-feature-icon" />
              <div className="pcm-feature-text">Industry-Relevant<br/>Strategy</div>
            </div>
            <div className="pcm-divider"></div>

            <div className="pcm-feature-item">
              <FaChartBar className="pcm-feature-icon" />
              <div className="pcm-feature-text">Better Preparation<br/>Better Opportunities</div>
            </div>
            <div className="pcm-divider"></div>

            <div className="pcm-feature-item">
              <FiAward className="pcm-feature-icon" />
              <div className="pcm-feature-text">Proven Results</div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sp-learn">
        <h2 className="sp-section-title">Mentoring <span style={{ color: '#9333ea' }}>Areas</span></h2>
        <div className="sp-learn-grid">
          {[
            { icon: <FaCompass style={{ color: '#9333ea' }} />, title: 'Career Path Mapping', desc: 'Identify the right career direction based on your strengths and goals.' },
            { icon: <FaFileAlt style={{ color: '#9333ea' }} />, title: 'Resume & Portfolio', desc: 'Build standout resumes and portfolios that get noticed by recruiters.' },
            { icon: <FaComments style={{ color: '#9333ea' }} />, title: 'Interview Preparation', desc: 'Mock interviews, body language coaching, and confidence building.' },
            { icon: <FaChessKing style={{ color: '#9333ea' }} />, title: 'Leadership Skills', desc: 'Develop management and leadership capabilities for career growth.' },
            { icon: <FaBrain style={{ color: '#9333ea' }} />, title: 'Skill Gap Analysis', desc: 'Identify and bridge skill gaps to stay competitive in the market.' },
            { icon: <FaUserTie style={{ color: '#9333ea' }} />, title: 'Personal Branding', desc: 'Build your professional brand on LinkedIn and industry platforms.' },
          ].map((item, i) => (
            <motion.div key={i} className="sp-learn-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="sp-learn-card-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="sp-cta" style={{ background: 'linear-gradient(135deg, #9333ea, #7e22ce)' }}>
        <h2>Shape Your Career with Expert Guidance</h2>
        <p>Book a free mentoring consultation and start building your dream career.</p>
        <a href="/contact" className="sp-cta-btn" style={{ color: '#9333ea' }}>Book Now <FiArrowRight /></a>
      </section>
    </div>
  );
};

export default PersonalizedCareerMentoring;
