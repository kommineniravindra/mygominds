import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { FaStar, FaBrain, FaReact, FaDatabase, FaCloud, FaCogs, FaLaptopCode, FaJava, FaPython, FaMicrosoft, FaNodeJs, FaAngular, FaChartBar, FaTheaterMasks, FaProjectDiagram } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiOpenai, SiSelenium, SiExpress } from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import CourseLeadModal from '../components/CourseLeadModal';
import '../UIcss/Catalog.css';
import coursesData from '../CourseContent/courses.json';
const getCourseIcon = (course) => {
  const title = course.title || '';
  const category = course.category || '';
  
  if (title.includes('.NET')) return <FaMicrosoft />;
  if (title.includes('Java')) return <FaJava />;
  if (title.includes('Python')) return <FaPython />;
  if (title.includes('DSA')) return <FaProjectDiagram />;
  if (title.includes('MEAN')) return (
    <div className="multi-icon-watermark">
      <SiMongodb /> <SiExpress /> <FaAngular /> <FaNodeJs />
    </div>
  );
  if (title.includes('MERN')) return (
    <div className="multi-icon-watermark">
      <SiMongodb /> <SiExpress /> <FaReact /> <FaNodeJs />
    </div>
  );
  if (title.includes('React')) return <FaReact />;
  if (title.includes('Angular')) return <FaAngular />;
  if (title.includes('PostgreSQL')) return <SiPostgresql />;
  if (title.includes('MongoDB')) return <SiMongodb />;
  if (title.includes('POWER BI')) return <FaChartBar />;
  if (title.includes('Generative AI')) return <SiOpenai />;
  if (title.includes('Selenium')) return <SiSelenium />;
  if (title.includes('Playwright')) return <FaTheaterMasks />;
  if (title.includes('Azure DevOps')) return <VscAzureDevops />;

  if (category.includes('FRONTEND')) return <FaReact />;
  if (category.includes('DATABASE') || category.includes('SQL')) return <FaDatabase />;
  if (category.includes('CLOUD')) return <FaCloud />;
  if (category.includes('AI') || category.includes('DATA SCIENCE')) return <FaBrain />;
  if (category.includes('TESTING')) return <FaCogs />;
  return <FaLaptopCode />;
};
const getCourseColors = (title) => {
  if (title.includes('.NET')) return { bg: '#f3e8ff', text: '#9333ea', iconBg: '#a855f7' };
  if (title.includes('Java')) return { bg: '#e0f2fe', text: '#0284c7', iconBg: '#3b82f6' };
  if (title.includes('Python')) return { bg: '#dcfce7', text: '#16a34a', iconBg: '#22c55e' };
  if (title.includes('React') || title.includes('Angular')) return { bg: '#e0f2fe', text: '#0284c7', iconBg: '#3b82f6' };
  if (title.includes('DSA')) return { bg: '#ffe4e6', text: '#f43f5e', iconBg: '#e11d48' };
  return { bg: '#ffedd5', text: '#ea580c', iconBg: '#f97316' };
};
export const courses = coursesData;
const Catalog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();
  const handleCourseClick = async (e, course) => {
    const unlockedCourses = JSON.parse(localStorage.getItem('unlockedCourses') || '[]');
    if (unlockedCourses.includes(course.title)) {
      return;
    }
    e.preventDefault();
    // Always show the modal for new courses
    setSelectedCourse(course);
    setIsModalOpen(true);
  };
  const groupedCourses = courses.reduce((acc, course) => {
    let groupName = course.category;
    if (groupName === 'DATA SCIENCE' || groupName === 'AI') {
      groupName = 'DATA SCIENCE & AI';
    }
    if (!acc[groupName]) acc[groupName] = [];
    acc[groupName].push(course);
    return acc;
  }, {});
  return (
    <motion.div 
      className="catalog-section" 
      id="courses"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="catalog-container">
        <div className="mg-catalog-grid-wrapper">
          <div className="mg-catalog-grid">
            {courses.filter(course => (course.category === 'DEVELOPMENT' || course.category === 'AI' || course.category === 'DSA' || course.title.includes('DSA') || course.title.includes('Agentic AI')) && !course.isHidden).map((course, index) => (
              <Link 
                to={`/course/${course.slug}`} 
                className={`mg-catalog-card theme-${course.id}`} 
                key={`${course.id}-${index}`} 
                style={{ textDecoration: 'none' }}
                onClick={(e) => handleCourseClick(e, course)}
              >
                {/* Image Section */}
                <div className="mg-catalog-image-container">
                  <div className="course-bg-watermark">
                    {getCourseIcon(course)}
                  </div>
                  <h3 className="course-bg-title">{course.title}</h3>
                </div>
                {/* Body Section */}
                <div className="mg-catalog-body">
                  <div className="mg-catalog-rating">
                    <FaStar className="star-icon" />
                    <span className="rating-score">{course.rating}</span>
                    <span className="reviews">({course.reviews})</span>
                  </div>
                  <h3 className="mg-catalog-title">{course.title}</h3>
                  <div className="mg-catalog-footer">
                    <div className="footer-item">
                      <FiClock className="footer-icon" /> {course.duration}
                    </div>
                    <div className="footer-item">
                      <FiBookOpen className="footer-icon" /> {course.lessons}
                    </div>
                  </div>
                  {/* Action Button Section */}
                  <div className="mg-catalog-action-bar">
                    <span className="mg-catalog-view-btn" style={{ 
                      backgroundColor: getCourseColors(course.title).bg, 
                      color: getCourseColors(course.title).text 
                    }}>
                      View Course
                    </span>
                    <span className="mg-catalog-arrow-btn" style={{ 
                      backgroundColor: getCourseColors(course.title).iconBg 
                    }}>
                      <FiArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <CourseLeadModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          course={selectedCourse} 
        />
      </div>
    </motion.div>
  );
};
export default Catalog;
