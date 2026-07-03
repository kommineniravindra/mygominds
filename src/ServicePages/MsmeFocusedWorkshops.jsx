import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaIndustry, FaDigitalTachograph, FaHandshake, FaChartPie, FaStore } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/MsmeWorkshops.css';

const MsmeFocusedWorkshops = () => {
  const topics = [
    { icon: <FaDigitalTachograph />, title: 'Digital Transformation', desc: 'Adopt digital tools, automate daily processes, and transition to a paperless environment.' },
    { icon: <FaChartPie />, title: 'Business Analytics', desc: 'Implement data-driven decision making and financial tracking for small business owners.' },
    { icon: <FaStore />, title: 'E-Commerce Setup', desc: 'Launch, manage, and scale online storefronts using modern e-commerce platforms.' },
    { icon: <FaHandshake />, title: 'Government Schemes', desc: 'Navigate complex MSME subsidies, secure business loans, and leverage support programs.' },
    { icon: <FaIndustry />, title: 'Operations Efficiency', desc: 'Apply lean management principles, improve inventory control, and optimize processes.' },
    { icon: <FaBuilding />, title: 'Marketing for MSMEs', desc: 'Maximize your reach with social media strategies, Google Ads, and hyper-local marketing.' },
  ];

  return (
    <div className="msme-page">
      <section className="msme-hero">
        <motion.div className="msme-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="msme-badge">Ni-MSME Aligned Workshops</div>
          <h1 className="msme-title">MSME-Focused<br/><span>Workshops</span></h1>
          <p className="msme-desc">
            Tailored, practical workshops designed to accelerate digital transformation and sustainable growth for MSMEs. Empowering your business with the skills to compete globally.
          </p>
          <a href="/contact" className="msme-cta-btn">Join a Workshop <FiArrowRight /></a>
        </motion.div>

        <motion.div className="msme-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="msme-image-wrapper">
            <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198453/imresizer-_MG_6359_cwcofq.jpg" alt="MSME Business" />
          </div>
        </motion.div>
      </section>

      <section className="msme-topics-section">
        <h2 className="msme-section-title">Workshop <span>Topics</span></h2>
        <div className="msme-list">
          {topics.map((item, i) => (
            <motion.div key={i} className="msme-list-item" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="msme-icon-box">{item.icon}</div>
              <div className="msme-item-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MsmeFocusedWorkshops;
