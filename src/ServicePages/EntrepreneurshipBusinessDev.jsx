import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FaChartLine, FaRocket, FaBullseye, FaHandshake, FaLightbulb, FaSeedling, FaPlay, FaUsers, FaChalkboardTeacher, FaFileAlt, FaSearch, FaGraduationCap, FaStore, FaUserTie } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle, FiUsers as FiUsersAlt, FiAward, FiTrendingUp } from 'react-icons/fi';
import './css/ServicePage.css';
import './css/Entrepreneurship.css';

const EntrepreneurshipBusinessDev = () => {
  return (
    <div className="ent-page">
      <SEO 
        title="Entrepreneurship Business Dev | MyGoMinds Services"
        description="Learn more about Entrepreneurship Business Dev offered by MyGoMinds Pvt Ltd. Expert training and services in Hyderabad."
        path="/service/entrepreneurship-business-dev"
      />
      <section className="ent-hero">
        <motion.div className="ent-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="ent-hero-badge">ENTREPRENEURSHIP & BUSINESS DEVELOPMENT</div>
          <h1 className="ent-hero-title">
            Entrepreneurship &<br />
            <span style={{ color: '#ea580c' }}>Business Development</span><br />
            Programs
          </h1>
          <p className="ent-hero-desc">
            Empowering aspiring entrepreneurs with the mindset, skills, and strategies to build, grow, and scale successful businesses.
          </p>
        </motion.div>
        
        <motion.div className="ent-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="ent-hero-image-container">
            <img src="/services/business.png" alt="Entrepreneurship" className="ent-hero-img" />
          </div>
        </motion.div>
      </section>

      {/* Features Bar */}
      <div className="ent-features-bar">
        <div className="ent-feature-item">
          <div className="ent-feature-icon"><FaRocket /></div>
          <div className="ent-feature-text">
            <h4>Practical Learning</h4>
            <p>Hands-on projects & real-world case studies</p>
          </div>
        </div>
        <div className="ent-feature-item">
          <div className="ent-feature-icon"><FaChalkboardTeacher /></div>
          <div className="ent-feature-text">
            <h4>Expert Mentorship</h4>
            <p>Learn from successful entrepreneurs</p>
          </div>
        </div>
        <div className="ent-feature-item">
          <div className="ent-feature-icon"><FaChartLine /></div>
          <div className="ent-feature-text">
            <h4>Business Growth Focus</h4>
            <p>Skills to start, manage & scale your business</p>
          </div>
        </div>
        <div className="ent-feature-item">
          <div className="ent-feature-icon"><FaSeedling /></div>
          <div className="ent-feature-text">
            <h4>Startup Support</h4>
            <p>Resources, guidance & network to succeed</p>
          </div>
        </div>
      </div>

      <section className="ent-programs-section">
        <div className="ent-programs-header">
          <h2>Our <span style={{ color: '#ea580c' }}>Entrepreneurship &<br/>Business Development</span> Programs</h2>
          <p>From idea to impact — we help you build and grow with confidence.</p>
        </div>
        <div className="ent-programs-grid">
          <div className="ent-program-card theme-orange">
            <div className="epc-icon-col">
              <div className="epc-icon-box"><FaStore /></div>
            </div>
            <div className="epc-content-col">
              <h3><span className="epc-num">01.</span> How to Start a<br/>Small Business</h3>
              <ul>
                <li>Step-by-step launch guide</li>
                <li>Legal registration basics</li>
                <li>Validating your business idea</li>
              </ul>
            </div>
          </div>
          
          <div className="ent-program-card theme-yellow">
            <div className="epc-icon-col">
              <div className="epc-icon-box"><FaLightbulb /></div>
            </div>
            <div className="epc-content-col">
              <h3><span className="epc-num">02.</span> Startup Mindset<br/>for Beginners</h3>
              <ul>
                <li>Thinking like an entrepreneur</li>
                <li>Overcoming fear of failure</li>
                <li>Goal setting & resilience</li>
              </ul>
            </div>
          </div>
          
          <div className="ent-program-card theme-green">
            <div className="epc-icon-col">
              <div className="epc-icon-box"><FaBullseye /></div>
            </div>
            <div className="epc-content-col">
              <h3><span className="epc-num">03.</span> Branding for<br/>Small Businesses</h3>
              <ul>
                <li>Building a strong brand identity</li>
                <li>Creating a unique value proposition</li>
                <li>Connecting with your target audience</li>
              </ul>
            </div>
          </div>
          
          <div className="ent-program-card theme-blue">
            <div className="epc-icon-col">
              <div className="epc-icon-box"><FaChartLine /></div>
            </div>
            <div className="epc-content-col">
              <h3><span className="epc-num">04.</span> Basics of<br/>Accounting for Non-<br/>Commerce People</h3>
              <ul>
                <li>Simple bookkeeping techniques</li>
                <li>Tracking income and expenses</li>
                <li>Understanding profit & cash flow</li>
              </ul>
            </div>
          </div>
          
          <div className="ent-program-card theme-purple">
            <div className="epc-icon-col">
              <div className="epc-icon-box"><FaSeedling /></div>
            </div>
            <div className="epc-content-col">
              <h3><span className="epc-num">05.</span> Digital Marketing<br/>on a Budget</h3>
              <ul>
                <li>Social media for small business</li>
                <li>Low-cost customer acquisition</li>
                <li>Engaging with your community</li>
              </ul>
            </div>
          </div>
          
          <div className="ent-program-card theme-pink">
            <div className="epc-icon-col">
              <div className="epc-icon-box"><FiTrendingUp /></div>
            </div>
            <div className="epc-content-col">
              <h3><span className="epc-num">06.</span> Scaling &<br/>Operations</h3>
              <ul>
                <li>Streamlining daily operations</li>
                <li>Hiring and team building</li>
                <li>Strategies for steady growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ent-join-section">
        <div className="ent-join-content">
          <div className="ent-join-badge">WHO CAN JOIN?</div>
          <h2>Programs for Every Aspiring Entrepreneur</h2>
          <p>Whether you're a student, professional, freelancer, or aspiring business owner — our programs are designed for your success.</p>
        </div>
        <div className="ent-join-grid">
          <div className="ent-join-item">
            <div className="ent-join-icon"><FaSearch /></div>
            <h4>Aspiring Entrepreneurs</h4>
          </div>
          <div className="ent-join-item">
            <div className="ent-join-icon"><FaGraduationCap /></div>
            <h4>Students & Fresh Graduates</h4>
          </div>
          <div className="ent-join-item">
            <div className="ent-join-icon"><FaStore /></div>
            <h4>Small Business Owners</h4>
          </div>
          <div className="ent-join-item">
            <div className="ent-join-icon"><FaUserTie /></div>
            <h4>Professionals & Freelancers</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntrepreneurshipBusinessDev;
