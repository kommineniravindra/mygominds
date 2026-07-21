import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { FaStar, FaGraduationCap, FaMedal, FaChartLine, FaBrain, FaReact, FaDatabase, FaCloud, FaCogs, FaLaptopCode, FaJava, FaPython, FaMicrosoft, FaNodeJs, FaAngular, FaChartBar, FaTheaterMasks, FaProjectDiagram } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiOpenai, SiSelenium, SiExpress } from 'react-icons/si';
import { VscAzureDevops } from 'react-icons/vsc';
import { courses } from '../UI/Catalog';
import CourseLeadModal from './CourseLeadModal';
import SEO from './SEO';
import '../css/courses.css';

const getThemeColor = (id) => {
  return `theme-${id}`;
};

const getCourseIcon = (course) => {
  const title = course.title || '';
  const category = course.category || '';
  
  if (title.includes('.NET')) return <FaMicrosoft />;
  if (title.includes('Java')) return <FaJava />;
  if (title.includes('Python')) return <FaPython />;
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
  if (title.includes('DSA') || title.includes('Data Structures')) return <FaProjectDiagram />;

  if (category.includes('FRONTEND')) return <FaReact />;
  if (category.includes('DATABASE') || category.includes('SQL')) return <FaDatabase />;
  if (category.includes('CLOUD')) return <FaCloud />;
  if (category.includes('AI') || category.includes('DATA SCIENCE')) return <FaBrain />;
  if (category.includes('TESTING')) return <FaCogs />;
  return <FaLaptopCode />;
};

const truncateText = (text, length) => {
  if (!text) return "";
  if (text.length <= length) return text;
  return text.substring(0, length) + "...";
};

const Courses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const navigate = useNavigate();

  const handleCourseClick = async (e, course) => {
    const unlockedCourses = JSON.parse(localStorage.getItem('unlockedCourses') || '[]');

    if (unlockedCourses.includes(course.title)) {
      // Already unlocked this specific course
      return;
    }

    e.preventDefault(); // Stop default link navigation
    
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

  const renderCategory = (category, categoryCourses, isSpecial = false, spanClass = '') => {
    if (!categoryCourses) return null;
    return (
      <div key={category} className={`course-category-section ${isSpecial ? `special-category ${spanClass}` : ''}`} style={isSpecial ? {} : { marginBottom: '4rem' }}>
        <h2 style={{ marginTop: '0', marginBottom: '2rem', color: '#0f172a', fontSize: '2rem', fontWeight: 'bold', borderBottom: '3px solid #ea580c', display: 'inline-block', paddingBottom: '0.5rem', fontFamily: "'Outfit', sans-serif", whiteSpace: isSpecial ? 'nowrap' : 'normal' }}>
          {category} COURSES
        </h2>
        <div className="mg-courses-grid">
          {categoryCourses.map((course) => {
            const themeClass = getThemeColor(course.id);
            return (
              <Link 
                to={`/course/${course.slug}`} 
                className={`mg-courses-card ${themeClass}`} 
                key={course.id} 
                style={{ textDecoration: 'none' }}
                onClick={(e) => handleCourseClick(e, course)}
              >
                
                {/* Image Section */}
                <div className="mg-courses-image-container">
                  <div className="course-bg-watermark">
                    {getCourseIcon(course)}
                  </div>
                  <h3 className="course-bg-title">{course.title}</h3>
                </div>
                
                {/* Body Section */}
                <div className="mg-courses-body">
                  <div className="mg-courses-rating">
                    <FaStar className="star-icon" />
                    <span className="rating-score">{course.rating}</span>
                    <span className="reviews">({course.reviews})</span>
                  </div>
                  <h3 className="mg-courses-title">{course.title}</h3>
                  
                  <div className="mg-courses-meta">
                    <div className="meta-item">
                      <FiClock /> {course.duration}
                    </div>
                    <div className="meta-item">
                      <FiBookOpen /> {course.lessons}
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mg-courses-footer">
                  <span className="view-course-btn">View Course</span>
                  <div className="view-course-icon">
                    <FiArrowRight />
                  </div>
                </div>
              </Link>
            )})}
        </div>
      </div>
    );
  };

  const coursesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "url": `https://www.mygominds.com/course/${course.slug}`,
        "name": course.title,
        "description": `Comprehensive ${course.title} training at MyGoMinds.`,
        "provider": {
          "@type": "EducationalOrganization",
          "name": "MyGoMinds Pvt Ltd",
          "sameAs": "https://www.mygominds.com"
        }
      }
    }))
  };

  return (
    <div className="courses-page">
      <SEO 
        title="All Courses | MyGoMinds - Software Training Hyderabad"
        description="Browse 30+ industry-leading tech courses. Java Full Stack, .NET, Python, MERN, Data Science, Cloud, Testing & more. Online & offline batches available."
        keywords="software training hyderabad, java full stack course, python training, .net courses, data science classes, mern stack training, best IT institute"
        path="/courses"
        schemaData={coursesSchema}
      />
      
      {/* Hero Section */}
      <div className="courses-hero-section">
        <div className="courses-hero-content">
          <div className="courses-badge">
            <FaGraduationCap size={16} /> EXPLORE. LEARN. GROW.
          </div>
          <h1 className="courses-main-title">
            All Our <span className="courses-gradient-text">Courses</span>
          </h1>
          <p className="courses-subtitle">
            Browse through our extensive library of industry-leading courses and take the next step in your career.
          </p>
          
          <div className="courses-features-grid">
            <div className="course-feature-item cf-item-blue">
              <div className="course-feature-icon"><FiBookOpen /></div>
              <div className="course-feature-text">
                <span className="course-feature-title">Expert Instructors</span>
                <span className="course-feature-sub">Learn from industry experts</span>
              </div>
            </div>
            <div className="course-feature-item cf-item-orange">
              <div className="course-feature-icon"><FaMedal /></div>
              <div className="course-feature-text">
                <span className="course-feature-title">Hands-on Learning</span>
                <span className="course-feature-sub">Practical knowledge</span>
              </div>
            </div>
            <div className="course-feature-item cf-item-green">
              <div className="course-feature-icon"><FaChartLine /></div>
              <div className="course-feature-text">
                <span className="course-feature-title">Career Growth</span>
                <span className="course-feature-sub">Boost your future</span>
              </div>
            </div>
          </div>
        </div>

        <div className="courses-hero-image">
          <img src="/img.png" alt="Learn on Laptop" />
        </div>
      </div>

      {/* Grid Container */}
      <div className="courses-grid-container">
        {renderCategory('DEVELOPMENT', groupedCourses['DEVELOPMENT'])}
        
        <div className="special-courses-row">
          {renderCategory('DATA SCIENCE & AI', groupedCourses['DATA SCIENCE & AI'], true, 'span-2')}
          {renderCategory('FRONTEND', groupedCourses['FRONTEND'], true, 'span-2')}
          {renderCategory('CLOUD', groupedCourses['CLOUD'], true, 'span-1')}
        </div>

        <div className="special-courses-row">
          {renderCategory('DATABASE', groupedCourses['DATABASE'], true, 'span-3')}
          {renderCategory('TESTING', groupedCourses['TESTING'], true, 'span-2')}
        </div>

        {renderCategory('SQL & MONGODB', groupedCourses['SQL & MONGODB'])}
        <div className="special-courses-row">
          {renderCategory('DSA', groupedCourses['DSA'], true, 'span-2')}
          {renderCategory('REAL TIME PROJECT', groupedCourses['REAL TIME PROJECT'], true, 'span-3')}
        </div>
      </div>
      
      <CourseLeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        course={selectedCourse} 
      />
    </div>
  );
};

export default Courses;
