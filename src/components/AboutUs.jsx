import React from 'react';
import { FiUsers, FiAward, FiBookOpen, FiStar, FiBriefcase, FiCheckCircle, FiArrowRight, FiPlayCircle, FiUser, FiShield } from 'react-icons/fi';
import { FaUserTie, FaBuilding, FaRegBuilding, FaRegLightbulb, FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      {/* 1. Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="hero-left">
            <div className="orange-label">
              GET TO KNOW US
              <span className="label-line"></span>
            </div>
            <h1 className="main-heading">
              About <br />
              <span className="orange-heading">Mygo Minds</span>
            </h1>
            <p className="hero-desc">
              We are committed to empowering learners with the right skills, practical training, and real-world exposure to help them build successful and meaningful careers.
            </p>
            <button className="our-journey-btn">
              <FiPlayCircle className="play-icon" /> Our Journey
            </button>
          </div>
          <div className="hero-right">
             <div className="hero-image-wrapper">
               <img src="/aboutus.png" alt="Instructor" className="hero-img" />
             </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="stats-bar">
        <div className="stats-grid">
          <div className="stat-card">
             <div className="stat-icon-wrapper"><FiUsers /></div>
             <div className="stat-info">
               <h3>15,000+</h3>
               <p>Students Trained</p>
             </div>
          </div>
          <div className="stat-card">
             <div className="stat-icon-wrapper"><FaGraduationCap /></div>
             <div className="stat-info">
               <h3>300+</h3>
               <p>Expert Trainers</p>
             </div>
          </div>
          <div className="stat-card">
             <div className="stat-icon-wrapper"><FaRegBuilding /></div>
             <div className="stat-info">
               <h3>1,200+</h3>
               <p>Hiring Partners</p>
             </div>
          </div>
          <div className="stat-card">
             <div className="stat-icon-wrapper"><FiAward /></div>
             <div className="stat-info">
               <h3>98%</h3>
               <p>Placement Assistance</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Who We Are */}
      <section className="who-we-are">
         <div className="who-left">
            <div className="orange-label">
              WHO WE ARE
              <span className="label-line"></span>
            </div>
            <h2>
              Empowering Minds.<br />
              <span className="italic-orange">Building Futures.</span>
              <svg width="160" height="18" viewBox="0 0 160 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block', marginTop: '4px'}}>
                <path d="M2 15 Q 80 -4, 158 15" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </h2>
            <p>
              Mygo Minds is a leading training and placement institute dedicated to bridging the gap between education and industry. Our mission is to equip learners with the right skills, practical knowledge, and confidence to thrive in today's competitive world.
            </p>
            <button className="explore-btn-outline">
              Explore Courses <FiArrowRight style={{marginLeft: '4px', fontSize: '18px'}} />
            </button>
         </div>
         <div className="who-right">
            <div className="office-img-wrapper">
               <div className="bg-shape-outline"></div>
               <div className="bg-shape-light-orange"></div>
               <div className="bg-shape-solid-orange"></div>
               <img src="/aboutus1.png" alt="Office Interior" className="office-img" />
               <div className="bg-dots"></div>
            </div>
         </div>
      </section>

      {/* 4. Our Values */}
      <section className="our-values">
         <div className="values-header">
           <div className="orange-label" style={{justifyContent: 'center', marginBottom: '16px'}}>
             OUR CORE VALUES
             <span className="label-line"></span>
           </div>
           <h2>The Principles That Drive Us</h2>
           <div className="heading-underline"></div>
         </div>
         <div className="values-grid">
            <div className="value-card">
               <div className="value-icon"><FiUser /></div>
               <h4>Student First</h4>
               <div className="card-underline"></div>
               <p>We prioritize our students' growth, learning, and career success.</p>
            </div>
            <div className="value-card">
               <div className="value-icon"><FiBookOpen /></div>
               <h4>Quality Education</h4>
               <div className="card-underline"></div>
               <p>We deliver industry-focused training with practical learning approach.</p>
            </div>
            <div className="value-card">
               <div className="value-icon"><FiShield /></div>
               <h4>Integrity & Trust</h4>
               <div className="card-underline"></div>
               <p>We believe in transparency, honesty, and building lasting relationships.</p>
            </div>
            <div className="value-card">
               <div className="value-icon"><FaRegLightbulb /></div>
               <h4>Innovation</h4>
               <div className="card-underline"></div>
               <p>We constantly evolve our methods to keep up with industry trends.</p>
            </div>
            <div className="value-card">
               <div className="value-icon"><FiBriefcase /></div>
               <h4>Placement Focused</h4>
               <div className="card-underline"></div>
               <p>We are committed to providing the best placement opportunities.</p>
            </div>
         </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="cta-banner-section">
         <div className="cta-banner">
            {/* Left dark section */}
            <div className="cta-text-section">
               <div className="cta-label">READY TO BEGIN?</div>
               <h2>Let's Build Your<br />Bright Future Together!</h2>
               <p>Join thousands of successful students who started their journey with Mygo Minds.</p>
            </div>

            {/* Middle: dots + circle icon */}
            <div className="cta-middle">
               <div className="cta-dots-grid"></div>
               <div className="cta-circle-icon"><FiUsers /></div>
            </div>

            {/* Right peach section: instructor image */}
            <div className="cta-right-section">
               <img src="/contact.png" alt="Instructor" className="cta-instructor-img" />
            </div>

            {/* Buttons */}
            <div className="cta-button-section">
               <button className="solid-orange-btn">Book Free Demo <FiArrowRight /></button>
               <Link to="/contact" className="outline-orange-btn">Contact Us <FiArrowRight /></Link>
            </div>
         </div>
      </section>
    </div>
  );
};

export default AboutUs;
