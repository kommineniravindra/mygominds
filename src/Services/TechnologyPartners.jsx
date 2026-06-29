import React from 'react';
import '../ServicesCss/TechnologyPartners.css';
import { FaAws, FaGithub, FaDigitalOcean, FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiVercel, SiNetlify, SiCpanel, SiMongodb, SiCloudflare, SiMeta, SiGodaddy } from 'react-icons/si';

const MicrosoftLogo = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="10" height="10" fill="#F25022" />
    <rect x="12.5" y="1.5" width="10" height="10" fill="#7FBA00" />
    <rect x="1.5" y="12.5" width="10" height="10" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="10" height="10" fill="#FFB900" />
  </svg>
);

const partners = [
  { name: 'AWS', icon: <FaAws color="#FF9900" /> },
  { name: 'Google', icon: <FcGoogle /> },
  { name: 'Microsoft', icon: <MicrosoftLogo /> },
  { name: 'GoDaddy', icon: <SiGodaddy color="#1BDBDB" /> },
  { name: 'Meta', icon: <SiMeta color="#0668E1" /> },
  { name: 'Vercel', icon: <SiVercel color="#000000" /> },
  { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
  { name: 'cPanel', icon: <SiCpanel color="#FF6C2C" /> },
  { name: 'DigitalOcean', icon: <FaDigitalOcean color="#0080FF" /> },
  { name: 'Cloudflare', icon: <SiCloudflare color="#F38020" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
  { name: 'GitHub', icon: <FaGithub color="#181717" /> }
];

const TechnologyPartners = () => {
  return (
    <section className="tech-partners-section">
      <div className="tp-container">
        <div className="tp-header">
          <span className="tp-subtitle">POWERING OUR SOLUTIONS</span>
          <h2>Our Technology Partners</h2>
        </div>
        
        <div className="tp-grid">
          {partners.map((partner, idx) => (
            <div key={idx} className="tp-card">
              <div className="tp-icon-wrapper">
                {partner.icon}
              </div>
              <p className="tp-name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
