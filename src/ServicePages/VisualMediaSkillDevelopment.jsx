import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCamera, FaVideo, FaFilm, FaPalette, FaPenFancy } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/VisualMedia.css';

const VisualMediaSkillDevelopment = () => {
  const skills = [
    { icon: <FaPalette />, title: 'Graphic Design', desc: 'Master Photoshop, Illustrator, and InDesign to create stunning brand identities and marketing materials.' },
    { icon: <FaVideo />, title: 'Video Production', desc: 'Learn shooting, advanced editing, and color grading using Premiere Pro & DaVinci Resolve.' },
    { icon: <FaCamera />, title: 'Photography', desc: 'Explore professional photography techniques, studio lighting, and dynamic composition.' },
    { icon: <FaFilm />, title: 'Motion Graphics', desc: 'Bring designs to life with animated visuals and title sequences using After Effects.' },
    { icon: <FaPenFancy />, title: 'UI/UX Design', desc: 'Design intuitive and beautiful user interfaces and experiences using Figma and Webflow.' },
    { icon: <FaPaintBrush />, title: 'Digital Art', desc: 'Express yourself through digital illustration, concept art, and creative visual storytelling.' },
  ];

  return (
    <div className="vm-page">
      <section className="vm-hero">
        <motion.div className="vm-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="vm-title">Visual Media<br/><span>Skill Development</span></h1>
          <p className="vm-desc">
            Immerse yourself in creative programs focusing on design, multimedia, and visual storytelling. Unleash your inner artist and build a lucrative career in the booming media industry.
          </p>
          <a href="/contact" className="vm-cta-btn">Start Creating <FiArrowRight /></a>
        </motion.div>

        <div className="vm-hero-visual">
          <div className="vm-hero-img-container">
            <motion.div className="vm-img-bg-shape" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }}></motion.div>
            <motion.img 
              src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80" 
              alt="Visual Media & Design" 
              className="vm-main-img" 
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.4 }}
            />
            <motion.div className="vm-floating-badge" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <div className="vm-badge-icon"><FaPalette /></div>
              <div className="vm-badge-text">
                <strong>Creative Arts</strong>
                <span>Masterclass</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="vm-skills-section">
        <h2 className="vm-section-title">Skills You'll <span>Master</span></h2>
        <div className="vm-masonry-grid">
          {skills.map((skill, i) => (
            <motion.div key={i} className="vm-skill-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="vm-card-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisualMediaSkillDevelopment;
