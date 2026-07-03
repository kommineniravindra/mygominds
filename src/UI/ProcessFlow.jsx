import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiTrendingUp, FiStar, FiSmartphone, FiCalendar } from 'react-icons/fi';
import '../UIcss/ProcessFlow.css';

const leftCards = [
  { id: '01', title: 'Corporate Training', desc: 'Customized skill-building programs for corporate teams to drive business success.', icon: <FiBriefcase />, lineWidth: '70px', themeColor: '#f97316', bgColor: '#ffedd5' },
  { id: '02', title: 'Faculty Dev (FDP)', desc: 'Empowering educators with modern methodologies and advanced technical knowledge.', icon: <FiAward />, lineWidth: '35px', themeColor: '#312e81', bgColor: '#e0e7ff' },
  { id: '03', title: 'Student Dev (SDP)', desc: 'Bridging the gap between academics and industry with hands-on learning.', icon: <FiTrendingUp />, lineWidth: '70px', themeColor: '#f97316', bgColor: '#ffedd5' }
];

const rightCards = [
  { id: '04', title: 'Personality Dev (PDP)', desc: 'Enhancing soft skills, communication, and leadership for overall growth.', icon: <FiStar />, lineWidth: '70px', themeColor: '#f97316', bgColor: '#ffedd5' },
  { id: '05', title: 'Mobile Development', desc: 'Building high-performance, user-friendly mobile applications for iOS and Android.', icon: <FiSmartphone />, lineWidth: '35px', themeColor: '#312e81', bgColor: '#e0e7ff' },
  { id: '06', title: 'Conferences & Events', desc: 'Organizing impactful seminars, hackathons, and industry networking events.', icon: <FiCalendar />, lineWidth: '70px', themeColor: '#f97316', bgColor: '#ffedd5' }
];

const ProcessFlow = () => {
  return (
    <section className="pf-section">
      <div className="pf-header-container">
        <h2>Navigate with <span>MyGoMinds.</span></h2>
      </div>

      <div className="pf-container">
        <div className="pf-left-col">
          {leftCards.map((card, idx) => (
            <motion.div 
              key={card.id}
              className="pf-card pf-left"
              style={{ '--line-width': card.lineWidth, '--theme-color': card.themeColor, '--bg-color': card.bgColor }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="pf-card-number">{card.id}</div>
              <div className="pf-card-content">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
              <div className="pf-card-icon">{card.icon}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pf-center-col"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="pf-center-circle">
            <svg className="pf-center-svg" viewBox="0 0 280 280">
              {/* Outer dashed circle is in CSS border */}
              {/* Blue Arcs */}
              <g className="spin-slow">
                {/* Circumference = 753.98. C/3 = 251.32. Long arc, short gap */}
                <circle cx="140" cy="140" r="120" stroke="#1e293b" strokeWidth="10" strokeDasharray="200 51.32" strokeLinecap="round" fill="none" />
              </g>
              
              {/* Orange Arcs */}
              <g className="spin-reverse">
                {/* Circumference = 596.90. C/3 = 198.96. Long arc, short gap */}
                <circle cx="140" cy="140" r="95" stroke="#f97316" strokeWidth="10" strokeDasharray="160 38.96" strokeLinecap="round" fill="none" />
              </g>
            </svg>
            <div className="pf-center-text">
              <img src="/title.png" alt="Process Flow" className="pf-center-image" />
            </div>
          </div>
        </motion.div>

        <div className="pf-right-col">
          {rightCards.map((card, idx) => (
            <motion.div 
              key={card.id}
              className="pf-card pf-right"
              style={{ '--line-width': card.lineWidth, '--theme-color': card.themeColor, '--bg-color': card.bgColor }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="pf-card-number">{card.id}</div>
              <div className="pf-card-content">
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
              <div className="pf-card-icon">{card.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
