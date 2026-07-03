import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGrid, FiTrendingUp, FiCpu, FiCode, FiCloud, 
  FiBarChart2, FiBriefcase, FiBookOpen, FiUsers, 
  FiUser, FiTarget, FiAward, FiMonitor,
  FiArrowRight, FiClock, FiSettings, FiDatabase,
  FiStar, FiSmartphone, FiLayout, FiPieChart, FiServer
} from 'react-icons/fi';
import { 
  FaLaptopCode, FaChartBar, FaRobot, FaPaintBrush, 
  FaCloud, FaDatabase as FaDb, FaVial, FaGraduationCap,
  FaJava, FaMicrosoft, FaPython, FaReact, FaAngular, FaNodeJs
} from 'react-icons/fa';
import coursesData from '../CourseContent/courses.json';
import '../UIcss/CourseCategories.css';

const getCourseSpecificIcon = (course) => {
  const title = (course.title || '').toUpperCase();
  if (title.includes('JAVA')) return <FaJava />;
  if (title.includes('.NET')) return <FaMicrosoft />;
  if (title.includes('PYTHON')) return <FaPython />;
  if (title.includes('MERN') || title.includes('REACT')) return <FaReact />;
  if (title.includes('MEAN') || title.includes('ANGULAR')) return <FaAngular />;
  if (title.includes('NODE')) return <FaNodeJs />;
  
  // Fallback to category icon
  switch((course.category || '').toUpperCase()) {
    case 'DEVELOPMENT': return <FaLaptopCode />;
    case 'DATA SCIENCE': return <FaChartBar />;
    case 'ARTIFICIAL INTELLIGENCE': return <FaRobot />;
    case 'FRONTEND': return <FaPaintBrush />;
    case 'CLOUD': return <FaCloud />;
    case 'DATABASE': return <FaDb />;
    case 'TESTING': return <FaVial />;
    default: return <FaGraduationCap />;
  }
};

const SIDEBAR_CATEGORIES = [
  { id: 'most-popular', label: 'Most Popular', icon: <FiTrendingUp style={{ color: '#ea580c' }} /> },
  { id: 'DEVELOPMENT', label: 'Full Stack Development', icon: <FiCode /> },
  { id: 'FRONTEND', label: 'Frontend Frameworks', icon: <FiMonitor /> },
  { id: 'AI', label: 'Artificial Intelligence', icon: <FiCpu /> },
  { id: 'CLOUD', label: 'Cloud & DevOps', icon: <FiCloud /> },
  { id: 'DATA SCIENCE', label: 'Data Science & BI', icon: <FiBarChart2 /> },
  { id: 'DATABASE', label: 'Database Administration', icon: <FiDatabase /> },
  { id: 'TESTING', label: 'Software Testing', icon: <FiSettings /> },
  { id: 'corporate', label: 'Corporate Training', icon: <FiBriefcase /> },
  { id: 'fdp', label: 'Faculty Development (FDP)', icon: <FiBookOpen /> },
  { id: 'sdp', label: 'Student Development (SDP)', icon: <FiUsers /> },
  { id: 'pdp', label: 'Personality Development (PDP)', icon: <FiUser /> },
  { id: 'entrepreneurship', label: 'Entrepreneurship', icon: <FiTarget /> },
  { id: 'events', label: 'Conferences & Events', icon: <FiAward /> },
  { id: 'mobile', label: 'Mobile Apps Development', icon: <FiSmartphone /> },
  { id: 'app-dev', label: 'Application Development', icon: <FiLayout /> },
  { id: 'marketing', label: 'Marketing', icon: <FiPieChart /> },
  { id: 'hosting', label: 'Hostings', icon: <FiServer /> }
];

const FILTER_PILLS = [
  'All Programs', 'Trending', 'AI', 'Java', 'Python', 'Cloud', 'Corporate', 'Students', 'Faculty', 'Certification'
];

const CourseCategories = ({ title = 'Categories' }) => {
  const [activeCategory, setActiveCategory] = useState('most-popular');
  const [activeFilter, setActiveFilter] = useState('All Programs');

  // Filter logic based on Category and Pill
  let filteredCourses = coursesData.filter(course => !course.isHidden);

  if (activeCategory !== 'most-popular') {
    // If it's a specific category in courses.json
    if (coursesData.some(c => c.category === activeCategory || c.category.toLowerCase() === activeCategory.toLowerCase())) {
       filteredCourses = filteredCourses.filter(c => c.category === activeCategory || c.category.toLowerCase() === activeCategory.toLowerCase());
    } else {
       // Dummy categories that don't have courses yet
       filteredCourses = [];
    }
  } else {
    // Exclude the 'REAL TIME PROJECT' duplicate courses from the default Most Popular feed
    filteredCourses = filteredCourses.filter(c => c.category !== 'REAL TIME PROJECT');
  }

  // Ensure every category displays a maximum of 12 cards
  filteredCourses = filteredCourses.slice(0, 12);

  // Very basic pill filtering
  if (activeFilter !== 'All Programs') {
    if (activeFilter === 'Trending') {
      filteredCourses = filteredCourses.filter(c => parseFloat(c.rating) >= 4.9);
    } else {
      filteredCourses = filteredCourses.filter(c => 
        c.title.toLowerCase().includes(activeFilter.toLowerCase()) || 
        c.category.toLowerCase().includes(activeFilter.toLowerCase())
      );
    }
  }

  return (
    <section className="mg-categories-section">
      <div className="mg-categories-container">
        
        {/* Left Sidebar */}
        <div className="mg-sidebar">
          <div className="mg-sidebar-header">
            <FiGrid className="mg-sidebar-icon" />
            <h3>{title}</h3>
          </div>
          <ul className="mg-sidebar-list">
            {SIDEBAR_CATEGORIES.map(cat => (
              <li 
                key={cat.id} 
                className={`mg-sidebar-item ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveFilter('All Programs');
                }}
              >
                <span className="mg-item-icon">{cat.icon}</span>
                <span className="mg-item-label">{cat.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Main Content */}
        <div className="mg-main-content">
          
          {/* Grid of Course Cards */}
          <div className="mg-course-grid">
            <AnimatePresence mode="popLayout">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, idx) => {
                  // Determine badge
                  const badgeText = parseFloat(course.rating) >= 4.9 ? 'Trending' : 'Bestseller';
                  
                  return (
                    <motion.div 
                      key={course.id}
                      className="mg-cat-card"
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Card Header Background */}
                      <div className={`mg-cat-card-header bg-${(idx % 6) + 1}`}>
                        <div className="mg-cat-badge">{badgeText}</div>
                           <div className="mg-cat-fallback-icon">
                             {getCourseSpecificIcon(course)}
                           </div>
                        
                        <div className="mg-cat-badge">{badgeText}</div>
                      </div>
                      
                      {/* Card Body */}
                      <div className="mg-cat-card-body">
                        <h4 className="mg-cat-title">{course.title.replace('\n', ' ')}</h4>
                        <div className="mg-cat-meta">
                          <div className="mg-meta-item">
                            <FiClock className="mg-meta-icon" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="mg-meta-item">
                            <FiStar className="mg-meta-icon" />
                            <span>Live Projects</span>
                          </div>
                        </div>
                        <button 
                          className="mg-cat-btn"
                          onClick={() => window.location.href = `/course/${course.slug}`}
                        >
                          View Program <FiArrowRight className="mg-btn-arrow" />
                        </button>
                      </div>
                    </motion.div>
                  )
                })
              ) : (
                <motion.div 
                  className="mg-no-courses"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <img src="/logo.png" alt="MyGoMinds" className="mg-empty-logo" style={{opacity: 0.2, maxWidth: '100px', marginBottom: '20px'}}/>
                  <h3>Exciting programs coming soon!</h3>
                  <p>We are actively working on adding new courses to this category. Check back later.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseCategories;
