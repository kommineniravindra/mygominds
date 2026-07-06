import React from 'react';
import { motion } from 'framer-motion';
import alumniData from '../CourseContent/Alumni.json';
import '../css/Alumni.css';
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import { FaMoneyBillWave, FaTrophy, FaBuilding } from 'react-icons/fa';



const Alumni = () => {
  return (
    <section className="alumni-section">
      <div className="alumni-container">
        <div className="alumni-header">
          {/* Background Decorators */}
          <div className="decorator-bg circle-left"></div>
          <div className="decorator-bg circle-right"></div>
           <div className="decorator-bg circle-right1"></div>
          
          {/* Icons */}
          <div className="header-icon-left">
            <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M110 10L90 30L100 35L110 10Z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M110 10L80 15L90 30" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M90 30L85 45L95 32" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M10 50C20 45 30 55 40 45C50 35 30 20 20 30C10 40 20 60 50 45C65 35 75 35 85 35" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="header-icon-right">
            <span style={{ fontSize: '3rem' }}>🎉</span>
          </div>

          <div className="alumni-badge-top"><FaTrophy className="trophy-icon" /> OUR ALUMNI</div>
          <h2 className="alumni-title">Meet Our <span className="text-orange">Alumni</span></h2>
          {/* <p className="alumni-subtitle">Our students, now working in top companies.</p> */}
          <div className="header-underline-wrapper">
            <div className="header-underline"></div>
          </div>
        </div>

        <div className="alumni-grid">
          {alumniData.map((alumnus, index) => (
            <motion.div 
              key={alumnus.id} 
              className="alumni-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="alumni-image-wrapper">
                <img src={alumnus.image} alt={alumnus.name} className="alumni-image" />
                <div className="verified-badge-top-right">
                  <FiCheckCircle />
                </div>
                <div className="alumni-package-badge">
                  <FaMoneyBillWave className="badge-icon" /> {alumnus.package}
                </div>
              </div>
              
              <div className="alumni-info">
                <h3 className="alumni-name">
                  {alumnus.name}
                </h3>
                
                <div className="alumni-details">
                  <div className="detail-row">
                    <div className="detail-icon-wrapper orange">
                      <FiBriefcase />
                    </div>
                    <div className="detail-text">
                      <span className="detail-label">Experience</span>
                      <span className="detail-value">{alumnus.experience}</span>
                    </div>
                  </div>

                  <div className="detail-row">
                    <div className="detail-icon-wrapper green">
                      <FaBuilding />
                    </div>
                    <div className="detail-text">
                      <span className="detail-label">Company</span>
                      <span className="detail-value">{alumnus.companyPlaced}</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="alumni-bottom-image-wrapper">
          <img src="/Alumni/img1.png" alt="Alumni Image" className="alumni-bottom-image" />
        </div>
      </div>
    </section>
  );
};

export default Alumni;
