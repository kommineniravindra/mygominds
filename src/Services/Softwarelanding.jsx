import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../ServicesCss/Softwarelanding.css';

const Softwarelanding = () => {
  return (
    <section className="software-landing-container">
      <div className="sl-content-wrapper">
        
        {/* Left Column: Text & Buttons */}
        <div className="sl-text-col">
          <div className="sl-badge">
            <span style={{fontSize: '14px', lineHeight: 1}}>✨</span> Welcome to MyGoMinds
          </div>
          
          <h1 className="sl-heading">
            <span>Empowering Growth Through</span><br></br>
             <span>Cutting-Edge Technology &</span><br></br>
              <span className="text-orange">Skill Development</span>
          </h1>
          
          <p className="sl-desc">
            MyGoMinds is the all-in-one platform: Software development, IT training, CRM, ERP, AI calling and WhatsApp automation — under one roof.
          </p>
          
          <div className="sl-btn-group">
            <button className="sl-btn-primary">
              Start building free <FiArrowRight />
            </button>
            <button className="sl-btn-secondary">
              Browse templates
            </button>
          </div>
        </div>

        {/* Right Column: Banner Visual */}
        <div className="sl-visual-col">
          <img src="/banners/service.png" alt="Services Banner" className="sl-banner-img" />
        </div>
        
      </div>
    </section>
  );
};

export default Softwarelanding;
