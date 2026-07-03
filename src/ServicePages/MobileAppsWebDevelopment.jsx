import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaReact, FaApple, FaAndroid, FaCode, FaServer } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/MobileAppsWeb.css';

const MobileAppsWebDevelopment = () => {
  const services = [
    { icon: <FaReact />, title: 'React & React Native', desc: 'Build blazing-fast web apps and cross-platform mobile apps with a single, maintainable codebase.' },
    { icon: <FaAndroid />, title: 'Android Development', desc: 'Craft native, high-performance Android applications using modern Kotlin and Java architectures.' },
    { icon: <FaApple />, title: 'iOS Development', desc: 'Develop premium, native iOS applications with Swift and SwiftUI for the Apple ecosystem.' },
    { icon: <FaCode />, title: 'Web Applications', desc: 'Deploy robust full-stack web applications utilizing React, Node.js, and modern tech stacks.' },
    { icon: <FaServer />, title: 'Backend & APIs', desc: 'Architect scalable backends, secure RESTful APIs, and efficient microservices.' },
    { icon: <FaMobileAlt />, title: 'UI/UX Design', desc: 'Design beautiful, intuitive, and highly engaging interfaces focused on user experience.' },
  ];

  return (
    <div className="maw-page">
      <section className="maw-hero">
        <motion.div className="maw-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="maw-badge">Next-Gen Development</div>
          <h1 className="maw-title">Mobile Apps &<br/><span>Web Development</span></h1>
          <p className="maw-desc">
            End-to-end mobile and web application development. From concept and UI/UX design to robust backend deployment, we build digital solutions that scale.
          </p>
          <a href="/contact" className="maw-cta-btn">Start a Project <FiArrowRight /></a>
        </motion.div>

        <motion.div className="maw-hero-visual" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="maw-phone-mockup">
            <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=400&q=80" alt="App UI" className="maw-phone-img" />
          </div>
        </motion.div>
      </section>

      <section className="maw-services-section">
        <h2 className="maw-section-title">Our <span>Expertise</span></h2>
        <div className="maw-grid">
          {services.map((item, i) => (
            <motion.div key={i} className="maw-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="maw-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MobileAppsWebDevelopment;
