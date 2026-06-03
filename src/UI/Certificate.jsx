import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiAward, FiShield, FiStar, FiChevronRight } from 'react-icons/fi';
import '../UIcss/Certificate.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const rightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.7, ease: "easeOut" } 
  }
};

const Certificate = () => {
  const navigate = useNavigate();
  return (
    <motion.section 
      className="cert-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="cert-container">
        <div className="cert-content">
          
          {/* Certificate Image Side (Now on the left) */}
          <motion.div className="cert-right" variants={leftVariants}>
            <div className="cert-image-wrapper">
              <div className="cert-bg-dots top-right"></div>
              <div className="cert-bg-dots bottom-left"></div>
              <div className="cert-bg-glow"></div>
              <img 
                src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775209171/ChatGPT_Image_Apr_3_2026_03_09_11_PM_ebwdbp.png" 
                alt="MyGo Minds Certificate" 
                className="cert-main-img" 
              />
            </div>
          </motion.div>

          {/* Content Side (Now on the right) */}
          <motion.div className="cert-left" variants={rightVariants}>
            <div className="cert-tag">GET YOUR QUALITY</div>
            <h2 className="cert-title">
              Skills certificate from the <span className="highlight-italic">MyGo Minds</span>
            </h2>
            <p className="cert-desc">
              Industry-recognized certificates that validate your skills, boost your career, and set you apart from the rest.
            </p>

            <div className="cert-features">
              <div className="cert-feature">
                <div className="cert-feature-icon">
                  <FiAward />
                </div>
                <h4>Industry Recognized</h4>
                <p>Trusted by top companies worldwide</p>
              </div>

              <div className="cert-feature">
                <div className="cert-feature-icon">
                  <FiShield />
                </div>
                <h4>Boost Your Career</h4>
                <p>Enhance your profile and unlock better opportunities</p>
              </div>

              <div className="cert-feature">
                <div className="cert-feature-icon">
                  <FiStar />
                </div>
                <h4>Showcase Your Skills</h4>
                <p>Highlight your expertise with confidence</p>
              </div>
            </div>

            <div className="cert-cta">
              <button className="cert-btn" onClick={() => navigate('/courses')}>
                Get Started Now
                <span className="cert-btn-icon"><FiChevronRight /></span>
              </button>
              <div className="cert-trust">
                <div className="cert-avatars">
                  {/* Using standard placeholder faces to match the 10,000+ learners vibe */}
                  <img src="https://i.pravatar.cc/100?img=68" alt="learner" />
                  <img src="https://i.pravatar.cc/100?img=47" alt="learner" />
                  <img src="https://i.pravatar.cc/100?img=33" alt="learner" />
                </div>
                <p>Trusted by <strong>1,000+</strong> Learners</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Certificate;
