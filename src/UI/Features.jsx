import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiCode, FiUsers, FiBriefcase, FiLayers, FiTarget, FiAward, FiHeadphones, FiBookOpen, FiUser, FiUserCheck, FiStar } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';
import '../UIcss/Features.css';

const featuresData = [
  {
    id: 1,
    number: "01",
    icon: <FiMonitor />,
    title: "Expert IT Training",
    description: "Learn from industry professionals with hands-on, job-ready curriculum.",
    themeClass: "theme-1"
  },
  {
    id: 2,
    number: "02",
    icon: <FiCode />,
    title: "Custom Software Dev",
    description: "Robust, scalable, and agile software solutions tailored to your needs.",
    themeClass: "theme-2"
  },
  {
    id: 3,
    number: "03",
    icon: <FiUsers />,
    title: "Corporate Services",
    description: "Empowering organizations through Corporate & Faculty Development programs.",
    themeClass: "theme-3"
  },
  {
    id: 4,
    number: "04",
    icon: <FiBriefcase />,
    title: "Real-Time Projects",
    description: "Bridge the gap between theory and practice with live industry projects.",
    themeClass: "theme-4"
  },
  {
    id: 5,
    number: "05",
    icon: <FiLayers />,
    title: "End-to-End Delivery",
    description: "From requirements gathering to final deployment and maintenance.",
    themeClass: "theme-5"
  },
  {
    id: 6,
    number: "06",
    icon: <FiTarget />,
    title: "Placement Support",
    description: "Dedicated career assistance, resume building, and interview preparation.",
    themeClass: "theme-6"
  },
  {
    id: 7,
    number: "07",
    icon: <FiAward />,
    title: "Events & Networking",
    description: "Fostering innovation and collaboration through impactful conferences.",
    themeClass: "theme-7"
  },
  {
    id: 8,
    number: "08",
    icon: <FiHeadphones />,
    title: "24/7 Dedicated Support",
    description: "Our support and maintenance teams are always here when you need us.",
    themeClass: "theme-8"
  },
  {
    id: 9,
    number: "09",
    icon: <FiBriefcase />,
    title: "Corporate Training",
    description: "Customized training programs to upskill your workforce and drive business growth.",
    themeClass: "theme-1"
  },
  {
    id: 10,
    number: "10",
    icon: <FiBookOpen />,
    title: "Faculty Development (FDP)",
    description: "Empowering educators with latest teaching methodologies and technical expertise.",
    themeClass: "theme-3"
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
          <h2>Why Choose <span>MyGoMinds</span>?</h2>
          <p>We deliver excellence across <span>IT Training, Software Development & Services</span> to help you scale and succeed.</p>
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
