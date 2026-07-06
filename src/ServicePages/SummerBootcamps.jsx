import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaSun, FaCode, FaRobot, FaMobileAlt, FaDatabase, FaGamepad } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/SummerBootcamps.css';

const SummerBootcamps = () => {
  const tracks = [
    { icon: <FaCode />, title: 'Web Development', desc: 'Master HTML, CSS, JavaScript, and React by building complete, interactive web applications.', badge: '4 Weeks' },
    { icon: <FaRobot />, title: 'AI & Machine Learning', desc: 'Dive into Python, TensorFlow, and build real-world AI projects and predictive models.', badge: '6 Weeks' },
    { icon: <FaMobileAlt />, title: 'Mobile App Dev', desc: 'Use React Native and Flutter to design, build, and publish your own cross-platform app.', badge: '4 Weeks' },
    { icon: <FaDatabase />, title: 'Data Science', desc: 'Learn Pandas, data visualization, and SQL. Analyze real datasets and extract insights.', badge: '5 Weeks' },
    { icon: <FaGamepad />, title: 'Game Development', desc: 'Design, script, and build your first 2D/3D games using Unity and C#.', badge: '6 Weeks' },
    { icon: <FaSun />, title: 'Full Stack Crash', desc: 'Intensive MERN stack bootcamp — go from frontend to backend in record time.', badge: '8 Weeks' },
  ];

  return (
    <div className="sb-page">
      <SEO 
        title="Summer Bootcamps | MyGoMinds Services"
        description="Learn more about Summer Bootcamps offered by MyGoMinds Pvt Ltd. Expert training and services in Hyderabad."
        path="/service/summer-bootcamps"
      />
      <section className="sb-hero">
        <motion.div className="sb-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="sb-badge">Intensive Summer Programs</div>
          <h1 className="sb-title">Summer<br/><span>Bootcamps</span></h1>
          <p className="sb-desc">
            Fast-track your learning this summer. Join our intensive, short-term bootcamps to rapidly build skills through focused, project-based training.
          </p>
          <a href="/contact" className="sb-cta-btn">Book Your Spot <FiArrowRight /></a>
        </motion.div>

        <motion.div className="sb-hero-visual" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="sb-image-card">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Students learning" />
          </div>
        </motion.div>
      </section>

      <section className="sb-tracks-section">
        <h2 className="sb-section-title">Bootcamp <span>Tracks</span></h2>
        <div className="sb-grid">
          {tracks.map((item, i) => (
            <motion.div key={i} className="sb-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="sb-date-badge">{item.badge}</div>
              <div className="sb-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SummerBootcamps;
