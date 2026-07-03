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
          <motion.div className="vm-floating-element vm-float-1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80" alt="Design" />
          </motion.div>
          <motion.div className="vm-floating-element vm-float-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}>
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80" alt="Video" />
          </motion.div>
          <motion.div className="vm-floating-element vm-float-3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=400&q=80" alt="Photography" />
          </motion.div>
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
