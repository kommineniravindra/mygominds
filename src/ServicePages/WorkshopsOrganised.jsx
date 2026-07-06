import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaLaptop, FaUsers, FaCertificate, FaCalendarAlt, FaMicroscope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/WorkshopsOrganised.css';

const WorkshopsOrganised = () => {
  const events = [
    { image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=600&q=80", title: 'Tech Bootcamps', desc: 'Intensive coding bootcamps, hackathons, and technology deep-dives.' },
    { image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=600&q=80", title: 'Soft Skills Training', desc: 'Expert sessions on communication, teamwork, and professional development.' },
    { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80", title: 'Certification Prep', desc: 'Dedicated workshops for AWS, Azure, Google Cloud, and other top certifications.' },
    { image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80", title: 'Career Fairs', desc: 'Exclusive recruitment drives, networking events, and local job fairs.' },
    { image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80", title: 'Research Seminars', desc: 'Guidance on academic research, paper writing, and successful publication.' },
    { image: "https://images.unsplash.com/photo-1475721025505-1112bc552598?auto=format&fit=crop&w=600&q=80", title: 'Guest Lectures', desc: 'Hear directly from industry leaders sharing their real-world insights.' },
  ];

  return (
    <div className="wo-page">
      <SEO 
        title="Workshops Organised | MyGoMinds Services"
        description="Learn more about Workshops Organised offered by MyGoMinds Pvt Ltd. Expert training and services in Hyderabad."
        path="/service/workshops-organised"
      />
      <section className="wo-hero">
        <div className="wo-hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="wo-badge">Community & Learning</div>
            <h1 className="wo-title">Workshops <span>Organised</span></h1>
            <p className="wo-desc">
              Join our vibrant community. We regularly host industry-oriented workshops, guest lectures, and networking events designed to keep you ahead of the curve.
            </p>
            <a href="/contact" className="wo-cta-btn">View Upcoming Events <FiArrowRight /></a>
          </motion.div>
        </div>
      </section>

      <section className="wo-workshops-section">
        <h2 className="wo-section-title">Past & Upcoming <span>Events</span></h2>
        <div className="wo-grid">
          {events.map((item, i) => (
            <motion.div key={i} className="wo-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="wo-card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="wo-card-content">
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

export default WorkshopsOrganised;
