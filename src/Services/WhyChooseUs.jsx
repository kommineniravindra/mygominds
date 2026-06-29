import React from 'react';
import { FaBolt, FaHeadset } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';
import '../ServicesCss/WhyChooseUs.css';

const reasons = [
  {
    title: "Fast Delivery",
    desc: "We follow a smart process to deliver your project on time with 100% quality.",
    icon: <FaBolt />,
    color: "orange"
  },
  {
    title: "Affordable Pricing",
    desc: "We offer the best packages that fit your budget and business goals.",
    icon: <FiShield />,
    color: "orange"
  },
  {
    title: "Professional Support",
    desc: "Our team is always ready to help you with maintenance, updates and support.",
    icon: <FaHeadset />,
    color: "blue"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="wcu-header">
        <span className="wcu-subtitle">WHY CHOOSE US?</span>
        <h2>We Focus on Quality & Results</h2>
      </div>
      
      <div className="wcu-grid">
        {reasons.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="wcu-item">
              <div className={`wcu-icon-wrapper ${item.color}`}>
                {item.icon}
              </div>
              <div className="wcu-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
            {idx < reasons.length - 1 && <div className="wcu-divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
