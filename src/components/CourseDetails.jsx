import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../UI/Catalog';
import { FiArrowLeft, FiClock, FiBookOpen, FiAward, FiVideo, FiMonitor, FiCheckCircle, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaCheckCircle as FaCheckSolid } from 'react-icons/fa';
import '../css/CourseDetails.css';

const CourseDetails = () => {
  const { slug } = useParams();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="course-not-found-wrapper">
        <h2>Course not found</h2>
        <Link to="/courses" className="course-not-found-link">&larr; Back to Courses</Link>
      </div>
    );
  }

  const { details } = course;

  return (
    <div className="course-details-wrapper">
      
      <style>{`
        .course-hero-dynamic-bg {
          background-image: url('${course.image}');
        }
      `}</style>
      {/* Premium Hero Section */}
      <div className="course-hero course-hero-dynamic-bg">
         <div className="course-hero-content">
            <div className="back-to-courses-wrapper">
               <Link to="/courses" className="back-link">
                 <FiArrowLeft /> Back to Courses
               </Link>
            </div>
            
            <span className="course-category-badge">
              {course.category}
            </span>
            <h1 className="course-title">
              {course.title}
            </h1>
            <p className="course-description">
              {details?.description || "Master the skills needed to excel in this field with our comprehensive, industry-led curriculum."}
            </p>
            
            <div className="course-meta-info">
               <span className="meta-item"><FiClock className="meta-icon"/> {course.duration}</span>
               <span className="meta-item"><FiBookOpen className="meta-icon"/> {course.lessons}</span>
               <span className="meta-item"><FiAward className="meta-icon"/> Certificate</span>
            </div>
         </div>
      </div>

      {/* Main Content Layout */}
      <div className="course-main-layout">
        
        {/* Left Column: Details */}
        <div className="course-left-column">
          {details ? (
            <>
              {/* Curriculum Section */}
              {details.coreCurriculum && (
                <div className="section-margin">
                  <h3 className="section-title">Core Curriculum</h3>
                  <div className="module-list">
                    {details.coreCurriculum.map((item, idx) => (
                      <div key={idx} className="module-item">
                        <div className="module-bullet"></div>
                        <h4 className="module-title">Module {idx + 1}: {item}</h4>
                        <p className="module-desc">Deep dive into the core concepts and practical applications of {item}.</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights Section */}
              {details.keyHighlights && (
                <div className="section-margin">
                  <h3 className="section-title">Why Choose This Course?</h3>
                  <div className="highlights-grid">
                    {details.keyHighlights.map((item, idx) => (
                      <div key={idx} className="highlight-item">
                        <div className="highlight-icon-wrapper">
                          <FiCheckCircle size={20} />
                        </div>
                        <span className="highlight-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="coming-soon">
              <p>Detailed course syllabus is coming soon.</p>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div className="course-right-column">
          
          {/* Pricing / Enrollment Card */}
          <div className="enrollment-card">
            <div className="enrollment-logo-container">
              <img src="/logo.png" alt="MyGoMinds Logo" className="enrollment-logo" />
            </div>
            <a 
              href="https://vncoyt.on-app.in/app/home?orgCode=vncoyt&referrer=utm_source=whatsapp&utm_medium=tutor-app-referral"
              target="_blank"
              rel="noopener noreferrer"
              className="enroll-btn"
              style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
            >
              Access to Portal
            </a>
            {/* <p className="guarantee-text">30-Day Money-Back Guarantee</p> */}

            <hr className="card-divider" />
            
            <h4 className="includes-title">This course includes:</h4>
            <ul className="includes-list">
              <li className="includes-item"><FiMonitor className="includes-icon"/> Access on Mobile & TV</li>
              <li className="includes-item"><FiVideo className="includes-icon"/> Live Interactive Classes</li>
              <li className="includes-item"><FiBookOpen className="includes-icon"/> Comprehensive Study Material</li>
              <li className="includes-item"><FiAward className="includes-icon"/> Certificate of Completion</li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Course Bottom Image */}
      {details.bottomImage && (
        <div className="course-bottom-image-container">
          <img 
            src={details.bottomImage} 
            alt={`${course.title} Details`} 
            className="course-bottom-image"
          />
        </div>
      )}
      {/* FAQ Section */}
              {details.faqs && details.faqs.length > 0 && (
                <div className="section-margin faq-section-wrapper">
                  <h3 className="section-title faq-title">Frequently Asked Questions</h3>
                  <div className="faq-list">
                    {details.faqs.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className={`faq-item ${openFAQ === idx ? 'open' : ''}`}
                        onClick={() => toggleFAQ(idx)}
                      >
                        <div className="faq-question">
                          <span>{faq.question}</span>
                          {openFAQ === idx ? <FiChevronUp className="faq-icon" /> : <FiChevronDown className="faq-icon" />}
                        </div>
                        <div className="faq-answer-wrapper">
                          <div className="faq-answer">
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
    </div>
  );
};

export default CourseDetails;