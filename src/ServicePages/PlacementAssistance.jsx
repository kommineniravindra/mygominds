import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaFileAlt, FaUserCheck, FaHandshake, FaLinkedin, FaClipboardList } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/PlacementAssistance.css';

const PlacementAssistance = () => {
  const steps = [
    { icon: <FaFileAlt />, title: 'Resume Building', desc: 'Craft professional, ATS-friendly resumes that stand out to tech recruiters.' },
    { icon: <FaLinkedin />, title: 'Profile Optimization', desc: 'Optimize your LinkedIn, GitHub, and job portal profiles for maximum visibility.' },
    { icon: <FaClipboardList />, title: 'Aptitude Training', desc: 'Prepare for quantitative, logical reasoning, and verbal ability rounds.' },
    { icon: <FaUserCheck />, title: 'Mock Interviews', desc: 'Practice with industry experts and get detailed, actionable feedback.' },
    { icon: <FaBriefcase />, title: 'Soft Skills Training', desc: 'Master communication, teamwork, and professional etiquette.' },
    { icon: <FaHandshake />, title: 'Company Connections', desc: 'Get direct referrals to our network of 100+ premier hiring partners.' },
  ];

  return (
    <div className="pa-page">
      <section className="pa-hero">
        <div className="pa-hero-container">
          <motion.div className="pa-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="pa-badge">Your Bridge to Top Companies</div>
            <h1 className="pa-title">Placement<br/><span>Assistance</span></h1>
            <p className="pa-desc">
              Comprehensive support from day one. We guide you through resume building, interview prep, and directly connect you with our network of top employers.
            </p>
            <a href="/contact" className="pa-cta-btn">Get Placed <FiArrowRight /></a>
          </motion.div>

          <motion.div className="pa-hero-visual" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="pa-visual-card">
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Placement Success" />
              <h3>95% Placement Rate</h3>
              <p>Join hundreds of successful alumni working at top tech firms across the country.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pa-timeline-section">
        <h2 className="pa-section-title">Your Path to <span>Success</span></h2>
        <div className="pa-timeline">
          {steps.map((step, i) => (
            <motion.div key={i} className="pa-timeline-item" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="pa-timeline-icon">{step.icon}</div>
              <div className="pa-timeline-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PlacementAssistance;
