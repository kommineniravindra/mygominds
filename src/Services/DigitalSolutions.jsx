import React from 'react';
import { FaGlobe, FaMobileAlt, FaRocket, FaLaptopCode, FaCloud, FaCog } from 'react-icons/fa';
import '../ServicesCss/DigitalSolutions.css';

const solutions = [
  {
    title: "Website Development",
    icon: <FaGlobe />,
    color: "blue"
  },
  {
    title: "Mobile Responsive Design",
    icon: <FaMobileAlt />,
    color: "orange"
  },
  {
    title: "SEO Optimized Website",
    icon: <FaRocket />,
    color: "blue"
  },
  {
    title: "Custom Web Applications",
    icon: <FaLaptopCode />,
    color: "orange"
  },
  {
    title: "Domain & Hosting Support",
    icon: <FaCloud />,
    color: "blue"
  },
  {
    title: "1 Year Maintenance",
    icon: <FaCog />,
    color: "orange"
  }
];

const DigitalSolutions = () => {
  return (
    <section className="digital-solutions-section">
      <div className="ds-header">
        <span className="ds-subtitle">OUR SERVICES</span>
        <h2>Complete Digital Solutions</h2>
        <p>We provide everything you need to build, grow and manage your online presence.</p>
      </div>
      
      <div className="ds-grid">
        {solutions.map((item, idx) => (
          <div key={idx} className="ds-card">
            <div className={`ds-icon-wrapper ${item.color}`}>
              {item.icon}
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalSolutions;
