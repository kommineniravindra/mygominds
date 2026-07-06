import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaHeadset, FaTicketAlt, FaCogs, FaClipboardCheck, FaNetworkWired, FaUserShield } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/ServiceDesk.css';

const ServiceDeskOperations = () => {
  const modules = [
    { icon: <FaTicketAlt />, title: 'Ticketing Systems', desc: 'Master ServiceNow, JIRA, Zendesk, and effective incident management tools.' },
    { icon: <FaCogs />, title: 'ITIL Fundamentals', desc: 'Understand the service lifecycle, change management, and industry best practices.' },
    { icon: <FaClipboardCheck />, title: 'SLA Management', desc: 'Manage Service Level Agreements, track KPIs, and perform precise performance monitoring.' },
    { icon: <FaNetworkWired />, title: 'Infrastructure Support', desc: 'Handle network troubleshooting, server management, and system monitoring.' },
    { icon: <FaUserShield />, title: 'Customer Service', desc: 'Improve professional communication, escalation handling, and customer satisfaction.' },
    { icon: <FaHeadset />, title: 'Operations Management', desc: 'Optimize resource planning, shift management, and overall process optimization.' },
  ];

  return (
    <div className="sd-page">
      <SEO 
        title="Service Desk Operations | MyGoMinds Services"
        description="Learn more about Service Desk Operations offered by MyGoMinds Pvt Ltd. Expert training and services in Hyderabad."
        path="/service/service-desk-operations"
      />
      <section className="sd-hero">
        <div className="sd-hero-grid"></div>
        <motion.div className="sd-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="sd-badge">IT Operations Excellence</div>
          <h1 className="sd-title">Service Desk &<br/><span>Operations</span></h1>
          <p className="sd-desc">
            Elevate your IT career with elite training in operational efficiency, ticketing systems, and ITIL frameworks. Become the backbone of enterprise support.
          </p>
          <a href="/contact" className="sd-cta-btn">Start Training <FiArrowRight /></a>
        </motion.div>

        <motion.div className="sd-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="sd-dashboard-mockup">
            <div className="sd-mockup-header">
              <div className="sd-dot sd-dot-1"></div>
              <div className="sd-dot sd-dot-2"></div>
              <div className="sd-dot sd-dot-3"></div>
            </div>
            <div className="sd-mockup-body">
              <div className="sd-mockup-widget"></div>
              <div className="sd-mockup-widget"></div>
            </div>
            <div style={{ padding: '0 20px 20px' }}>
              <div className="sd-mockup-widget-full"></div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="sd-modules-section">
        <h2 className="sd-section-title">Training <span>Modules</span></h2>
        <div className="sd-grid">
          {modules.map((item, i) => (
            <motion.div key={i} className="sd-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="sd-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDeskOperations;
