import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaLaptopCode, FaProjectDiagram, FaUserTie, FaUserGraduate, FaUsers, FaChalkboardTeacher, FaBriefcase, FaCertificate, FaLaptop, FaHandshake, FaTrophy, FaUserFriends, FaHeadset, FaGraduationCap, FaCode } from 'react-icons/fa';
import '../UIcss/OurDivisions.css';

const OurDivisions = () => {
  return (
    <section className="learning-paths-section">
      <div className="learning-paths-header">
        <h2>Explore Our <span>Top Programs</span></h2>
        <p>Choose from our core domains: IT Training, Software Development, and Services.</p>
      </div>

      <div className="learning-paths-container">
        
        {/* IT Training Programs (01) - LIGHT THEME */}
        <div className="lp-row-container lp-light-card">
          <div className="lp-main-content">
            <div className="lp-content-col">
              <div className="lp-content-top">
                <div className="lp-title-container">
                  <div className="lp-icon-box blue-box">
                    <FaGraduationCap className="lp-title-icon" />
                  </div>
                  <h3 className="lp-title">
                    IT Training <br/> <span className="blue-text">Programs</span>
                  </h3>
                </div>
                
                <p className="lp-desc">
                  Build future-ready IT skills with industry-aligned courses designed for real-world application.
                </p>
                
                <ul className="lp-list blue-list">
                  <li><BsCheckCircleFill className="check-icon" /> Programming & Development</li>
                  <li><BsCheckCircleFill className="check-icon" /> Cloud & DevOps</li>
                  <li><BsCheckCircleFill className="check-icon" /> Data Science & AI</li>
                  <li><BsCheckCircleFill className="check-icon" /> Cyber Security</li>
                  <li><BsCheckCircleFill className="check-icon" /> Testing & QA</li>
                  <li><BsCheckCircleFill className="check-icon" /> And More...</li>
                </ul>

                <button className="lp-btn-primary blue-btn" onClick={() => window.location.href = '/'}>
                  Explore IT Courses <FiArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            
            <div className="lp-image-col">
              <img src="/banners/img2.png" alt="IT Training" className="lp-illustration" width="400" height="400" />
            </div>
          </div>

          <div className="lp-stats-bar lp-light-stats">
            <div className="stat-item">
              <FaUserGraduate className="stat-icon blue-text" />
              <span>1000+ <br/> Students</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaBriefcase className="stat-icon blue-text" />
              <span>Placement <br/> Support</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaCertificate className="stat-icon blue-text" />
              <span>Global <br/> Certifications</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaLaptop className="stat-icon blue-text" />
              <span>LMS <br/> Portal</span>
            </div>
          </div>
        </div>

        {/* Software Development Programs (02) - LIGHT THEME */}
        <div className="lp-row-container lp-light-card">
          <div className="lp-main-content">
            <div className="lp-content-col">
              <div className="lp-content-top">
                <div className="lp-title-container">
                  <div className="lp-icon-box orange-box">
                    <FaCode className="lp-title-icon" />
                  </div>
                  <h3 className="lp-title">
                    Software Development <br/> <span className="orange-text">Programs</span>
                  </h3>
                </div>
                
                <p className="lp-desc">
                  From code to product—learn, build & deploy real-world software.
                </p>
                
                <ul className="lp-list orange-list">
                  <li><BsCheckCircleFill className="check-icon" /> Web Development</li>
                  <li><BsCheckCircleFill className="check-icon" /> Mobile App Development</li>
                  <li><BsCheckCircleFill className="check-icon" /> Full Stack Development</li>
                  <li><BsCheckCircleFill className="check-icon" /> Software Engineering</li>
                  <li><BsCheckCircleFill className="check-icon" /> Tools & Frameworks</li>
                  <li><BsCheckCircleFill className="check-icon" /> And More...</li>
                </ul>

                <button className="lp-btn-primary orange-btn" onClick={() => window.location.href = '/services'}>
                  Explore Software projects <FiArrowRight className="btn-icon" />
                </button>
              </div>
            </div>
            
            <div className="lp-image-col">
              <img src="/banners/img1.png" alt="Software Development" className="lp-illustration" width="400" height="400" />
            </div>
          </div>

          <div className="lp-stats-bar lp-light-stats">
            <div className="stat-item">
              <FaLaptopCode className="stat-icon orange-text" />
              <span>50+ <br/> Tech Stacks</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaProjectDiagram className="stat-icon orange-text" />
              <span>Real-world <br/> Projects</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaHeadset className="stat-icon orange-text" />
              <span>24/7 <br/> Support</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <FaUserTie className="stat-icon orange-text" />
              <span>Career <br/> Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDivisions;
