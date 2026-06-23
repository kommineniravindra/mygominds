import React from 'react';
import { motion } from 'framer-motion';
import { FiUserCheck, FiMonitor, FiVideo, FiBriefcase, FiMessageSquare, FiFileText, FiUsers, FiHeadphones } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import '../UIcss/Features.css';

const featuresData = [
  {
    id: 1,
    number: "01",
    icon: <FiUserCheck />,
    title: "Industry Mentors",
    description: "Learn from experienced industry professionals.",
    themeClass: "theme-1"
  },
  {
    id: 2,
    number: "02",
    icon: <FiMonitor />,
    title: "Real-Time Projects",
    description: "Work on real-world projects and build your portfolio.",
    themeClass: "theme-2"
  },
  {
    id: 3,
    number: "03",
    icon: <FiVideo />,
    title: "Recorded Sessions",
    description: "Missed a class? No worries. Learn at your own pace.",
    themeClass: "theme-3"
  },
  {
    id: 4,
    number: "04",
    icon: <FiBriefcase />,
    title: "Placement Assistance",
    description: "Get placed in top companies with our dedicated support.",
    themeClass: "theme-4"
  },
  {
    id: 5,
    number: "05",
    icon: <FiMessageSquare />,
    title: "Mock Interviews",
    description: "Practice interviews and get expert feedback.",
    themeClass: "theme-5"
  },
  {
    id: 6,
    number: "06",
    icon: <FiFileText />,
    title: "Resume Building",
    description: "Create a professional resume that gets you noticed.",
    themeClass: "theme-6"
  },
  {
    id: 7,
    number: "07",
    icon: <FiUsers />,
    title: "Career Guidance",
    description: "Personalized career guidance to help you grow faster.",
    themeClass: "theme-7"
  },
  {
    id: 8,
    number: "08",
    icon: <FiHeadphones />,
    title: "24/7 Support",
    description: "Our support team is always here when you need us.",
    themeClass: "theme-8"
  }
];

const Features = () => {
  return (
    <section className="mg-features-section">
      <div className="mg-features-container">
        <motion.div 
          className="mg-features-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative Left Purple Arrow */}
          <svg className="mg-deco-arrow mg-arrow-left" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 80,10 C 30,20 10,50 20,80 C 25,95 45,95 45,80 C 45,65 25,65 25,80 C 25,95 60,95 90,85" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M 75,70 L 90,85 L 75,95" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>

          {/* Decorative Right Orange Arrow */}
          <svg className="mg-deco-arrow mg-arrow-right" width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 90,10 C 90,50 80,95 50,95 C 35,95 35,75 50,75 C 65,75 65,95 50,95 C 30,95 15,80 10,60" stroke="#f97316" strokeWidth="3" strokeLinecap="round" fill="none"/>
            <path d="M 25,50 L 10,60 L 15,75" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>

          <div className="mg-promise-badge">
            ✦ OUR PROMISE TO YOU ✦
          </div>
          <h2>Why Students Choose <span>MyGoMinds</span>?</h2>
          <p>We don't just teach — we <span>mentor, guide & support</span> you until you achieve your dream career.</p>
        </motion.div>

        <div className="mg-features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className={`mg-feature-card ${feature.themeClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mg-card-number">{feature.number}</div>
              <div className="mg-feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="mg-card-line"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
