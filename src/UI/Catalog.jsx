import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { FaStar, FaBrain, FaReact, FaDatabase, FaCloud, FaCogs, FaLaptopCode } from 'react-icons/fa';
import CourseLeadModal from '../components/CourseLeadModal';
import '../UIcss/Catalog.css';
const getCourseIcon = (category) => {
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
  return { bg: '#ffedd5', text: '#ea580c', iconBg: '#f97316' };
};
export const courses = [
  {
    id: 1,
    title: '.NET Fullstack\n Development',
    slug: 'dotnet-fullstack',
    category: 'DEVELOPMENT',
    rating: '4.8',
    reviews: '110 reviews',
    duration: '5 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹35,000',
      discountPrice: '₹15,000',
      description: "Become a professional full stack developer using Microsoft technologies. Learn to build scalable web applications using .NET, C#, and modern frontend tools.",
      coreCurriculum: [
        "C# Programming Fundamentals",
        "Object-Oriented Programming (OOP)",
        "ASP.NET Core MVC",
        "Web API Development",
        "Entity Framework & LINQ",
        "SQL Server Database",
        "HTML, CSS, JavaScript, Bootstrap",
        "Authentication & Authorization",
        "Deployment & Hosting"
      ],
      keyHighlights: [
        "Real-time Project Development",
        "Industry-Level Training",
        "Hands-on API Building",
        "Placement Assistance",
        "Live Case Studies"
      ]
    }
  },
  {
    id: 2,
    title: 'Java Fullstack\n Development',
    slug: 'java-fullstack',
    category: 'DEVELOPMENT',
    rating: '4.9',
    reviews: '128 reviews',
    duration: '4 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹30,000',
      discountPrice: '₹12,000',
      description: "Become a complete full stack developer by mastering frontend, backend, databases, and real-world project development using Java technologies.",
      coreCurriculum: [
        "Core Java & OOP Concepts",
        "JVM, Exception Handling, Multithreading",
        "MySQL, SQL, PL/SQL",
        "HTML, CSS, JavaScript, Bootstrap",
        "React js",
        "JDBC, Servlets, JSP",
        "Spring Boot, Hibernate, REST APIs",
        "Microservices & Design Patterns"
      ],
      keyHighlights: [
        "100+ Hours Training",
        "Live Projects & Internship",
        "Industry Expert Trainers",
        "Placement Assistance",
        "Real-world Case Studies"
      ]
    }
  },
  {
    id: 3,
    title: 'Python Fullstack\n with Django',
    slug: 'python-fullstack',
    category: 'DEVELOPMENT',
    rating: '4.8',
    reviews: '95 reviews',
    duration: '6 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹30,000',
      discountPrice: '₹12,000',
      description: "Become a complete full stack developer using Python by mastering backend development, frontend technologies, and building real-world scalable web applications.",
      coreCurriculum: [
        "Python Programming Fundamentals",
        "OOP Concepts in Python",
        "Django Framework",
        "REST APIs with Django REST Framework",
        "HTML, CSS, JavaScript, Bootstrap",
        "Database (MySQL / PostgreSQL)",
        "Authentication & Authorization",
        "Deployment & Hosting"
      ],
      keyHighlights: [
        "Hands-on Projects",
        "Live Application Development",
        "Industry-Level Training",
        "Placement Assistance",
        "Real-world Case Studies"
      ]
    }
  },
  {
    id: 5,
    title: 'Full Stack MEAN\n Development',
    slug: 'fullstack-mean',
    category: 'DEVELOPMENT',
    rating: '4.8',
    reviews: '105 reviews',
    duration: '5 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹35,000',
      discountPrice: '₹15,000',
      description: "Master the MEAN stack (MongoDB, Express.js, Angular, Node.js) and build dynamic, robust web applications from end to end.",
      coreCurriculum: [
        "JavaScript & TypeScript Advanced Concepts",
        "MongoDB & Mongoose",
        "Express.js Framework",
        "Angular Components & Services",
        "Node.js Runtime",
        "RESTful API Development",
        "Authentication & Security",
        "Deployment & Best Practices"
      ],
      keyHighlights: [
        "Real-time Project Development",
        "Industry-Level Training",
        "Placement Assistance",
        "Live Case Studies"
      ]
    }
  },
  {
    id: 6,
    title: 'Full Stack MERN\n Development',
    slug: 'fullstack-mern',
    category: 'DEVELOPMENT',
    rating: '4.9',
    reviews: '150 reviews',
    duration: '5 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹35,000',
      discountPrice: '₹15,000',
      description: "Become a proficient MERN stack developer (MongoDB, Express.js, React, Node.js). Build scalable single-page applications and powerful APIs.",
      coreCurriculum: [
        "Modern JavaScript (ES6+)",
        "React Hooks & Context API",
        "Node.js & Express.js",
        "MongoDB Database Management",
        "Redux State Management",
        "REST APIs & GraphQL",
        "Authentication with JWT",
        "Application Deployment"
      ],
      keyHighlights: [
        "100+ Hours Training",
        "Live Projects",
        "Industry Expert Trainers",
        "Placement Assistance"
      ]
    }
  },
    {
    id: 7,
    title: 'DA & POWER BI',
    slug: 'data-analytics-power-bi',
    category: 'DATA SCIENCE',
    rating: '4.9',
    reviews: '140 reviews',
    duration: '3 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹25,000',
      discountPrice: '₹10,000',
      description: "Learn data analytics and visualization using Power BI. Transform raw data into meaningful insights and interactive dashboards for business decision-making.",
      coreCurriculum: [
        "Introduction to Data Analytics",
        "Power BI Interface & Tools",
        "Data Cleaning & Transformation",
        "DAX (Data Analysis Expressions)",
        "Data Modeling",
        "Interactive Dashboards",
        "Charts, Graphs, Visualizations",
        "Connecting Multiple Data Sources",
        "Publishing Reports"
      ],
      keyHighlights: [
        "Real-time Business Case Studies",
        "Dashboard Projects",
        "Industry-Level Training",
        "Placement Assistance",
        "Hands-on Data Analysis"
      ]
    }
  },
  {
    id: 8,
    title: 'Generative AI & Gen AI',
    slug: 'generative-ai',
    category: 'AI',
    rating: '4.9',
    reviews: '180 reviews',
    duration: '4 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹45,000',
      discountPrice: '₹20,000',
      description: "Dive deep into the world of Generative AI. Learn to build, fine-tune, and deploy state-of-the-art LLMs, stable diffusion models, and advanced Gen AI applications.",
      coreCurriculum: [
        "Introduction to Generative AI",
        "Large Language Models (LLMs) & Prompt Engineering",
        "LangChain & LlamaIndex",
        "Fine-tuning Models",
        "Stable Diffusion & Image Generation",
        "RAG (Retrieval-Augmented Generation)",
        "Ethics in AI",
        "Deploying AI Models"
      ],
      keyHighlights: [
        "Hands-on AI Projects",
        "Live Application Development",
        "Industry-Level Training",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 9,
    title: 'React.js\n Framework',
    slug: 'reactjs',
    category: 'FRONTEND',
    rating: '4.9',
    reviews: '210 reviews',
    duration: '2 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹20,000',
      discountPrice: '₹8,000',
      description: "Master React.js to build fast, interactive, and modern single-page web applications from scratch.",
      coreCurriculum: [
        "React Fundamentals & JSX",
        "State & Props Management",
        "React Hooks (useState, useEffect, etc.)",
        "React Router & Navigation",
        "State Management with Redux/Zustand",
        "API Integration & Asynchronous Data"
      ],
      keyHighlights: [
        "Component-driven Development",
        "Live Projects",
        "Industry Expert Trainers",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 10,
    title: 'Angular\n Framework',
    slug: 'angular',
    category: 'FRONTEND',
    rating: '4.8',
    reviews: '160 reviews',
    duration: '2 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹22,000',
      discountPrice: '₹9,000',
      description: "Learn Angular to build scalable enterprise-level single-page applications using TypeScript and component-based architecture.",
      coreCurriculum: [
        "TypeScript Fundamentals",
        "Angular Components & Templates",
        "Directives & Pipes",
        "Services & Dependency Injection",
        "RxJS & Observables",
        "Routing & Forms"
      ],
      keyHighlights: [
        "Enterprise App Development",
        "Live Projects",
        "Industry Expert Trainers",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 11,
    title: 'Azure DevOps',
    slug: 'azure-devops',
    category: 'CLOUD',
    rating: '4.9',
    reviews: '145 reviews',
    duration: '2 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹40,000',
      discountPrice: '₹18,000',
      description: "Master CI/CD pipelines, version control, and cloud infrastructure management using Microsoft Azure DevOps tools.",
      coreCurriculum: [
        "Azure Fundamentals",
        "Azure Repos & Git",
        "CI/CD with Azure Pipelines",
        "Azure Artifacts & Test Plans",
        "Infrastructure as Code (ARM/Bicep)",
        "Monitoring & Security"
      ],
      keyHighlights: [
        "Hands-on Cloud Projects",
        "Live CI/CD Pipeline Building",
        "Certification Guidance",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 12,
    title: 'PostgreSQL\n Database',
    slug: 'postgresql',
    category: 'DATABASE',
    rating: '4.8',
    reviews: '90 reviews',
    duration: '1.5 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹15,000',
      discountPrice: '₹6,000',
      description: "Become an expert in PostgreSQL. Learn database design, complex querying, optimization, and administration.",
      coreCurriculum: [
        "Relational Database Concepts",
        "Advanced SQL Queries & Joins",
        "Stored Procedures & Functions",
        "Indexing & Performance Tuning",
        "Database Administration & Security",
        "Backup & Recovery"
      ],
      keyHighlights: [
        "Real-world Scenarios",
        "Hands-on Querying",
        "Industry-Level Training",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 13,
    title: 'Selenium\n Automation',
    slug: 'selenium-automation',
    category: 'TESTING',
    rating: '4.8',
    reviews: '130 reviews',
    duration: '2 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹25,000',
      discountPrice: '₹10,000',
      description: "Learn to automate web applications using Selenium WebDriver, Java, and TestNG framework.",
      coreCurriculum: [
        "Java for Automation",
        "Selenium WebDriver API",
        "Locators & Xpaths",
        "TestNG Framework",
        "Page Object Model (POM)",
        "CI/CD Integration"
      ],
      keyHighlights: [
        "Live Testing Frameworks",
        "Hands-on Automation",
        "Industry Expert Trainers",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 14,
    title: 'Playwright\n Automation',
    slug: 'playwright-automation',
    category: 'TESTING',
    rating: '4.9',
    reviews: '175 reviews',
    duration: '2 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹28,000',
      discountPrice: '₹12,000',
      description: "Master end-to-end modern web testing using Playwright with JavaScript/TypeScript for fast and reliable automation.",
      coreCurriculum: [
        "JavaScript/TypeScript Basics",
        "Playwright Setup & Configuration",
        "Locators & Actions",
        "Assertions & Auto-waiting",
        "Network Interception",
        "Continuous Integration with Playwright"
      ],
      keyHighlights: [
        "Modern Testing Approach",
        "Live Projects",
        "Industry-Level Training",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 15,
    title: 'SQL\n Database',
    slug: 'sql-database',
    category: 'DATABASE',
    rating: '4.8',
    reviews: '150 reviews',
    duration: '1.5 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹18,000',
      discountPrice: '₹7,000',
      description: "Learn SQL from scratch to manage, query, and analyze relational databases efficiently. Essential for backend developers and data analysts.",
      coreCurriculum: [
        "Relational Database Basics",
        "Writing Complex SQL Queries",
        "Joins, Subqueries & Views",
        "Database Design & Normalization",
        "Performance Optimization",
        "Data Analysis with SQL"
      ],
      keyHighlights: [
        "Interactive Query Practice",
        "Real-world Datasets",
        "Industry-Level Training",
        "Placement Assistance"
      ]
    }
  },
  {
    id: 16,
    title: 'MongoDB\n Mastery',
    slug: 'mongodb-mastery',
    category: 'DATABASE',
    rating: '4.9',
    reviews: '110 reviews',
    duration: '1 Month',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹15,000',
      discountPrice: '₹6,000',
      description: "Master NoSQL database concepts and MongoDB. Learn document-oriented data modeling, aggregation framework, and scaling.",
      coreCurriculum: [
        "NoSQL vs SQL Concepts",
        "MongoDB CRUD Operations",
        "Data Modeling & Schema Design",
        "Aggregation Framework",
        "Indexing & Performance",
        "Replication & Sharding"
      ],
      keyHighlights: [
        "Hands-on NoSQL Projects",
        "Live Application Database Design",
        "Industry Expert Trainers",
        "Placement Assistance"
      ]
    }
  },{
    id: 17,
    title: '.NET Fullstack\n with\n Real Time Project',
    slug: 'dotnet-fullstack',
    category: 'REAL TIME PROJECT',
    rating: '4.8',
    reviews: '110 reviews',
    duration: '5 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹35,000',
      discountPrice: '₹15,000',
      description: "Become a professional full stack developer using Microsoft technologies. Learn to build scalable web applications using .NET, C#, and modern frontend tools.",
      coreCurriculum: [
        "C# Programming Fundamentals",
        "Object-Oriented Programming (OOP)",
        "ASP.NET Core MVC",
        "Web API Development",
        "Entity Framework & LINQ",
        "SQL Server Database",
        "HTML, CSS, JavaScript, Bootstrap",
        "Authentication & Authorization",
        "Deployment & Hosting"
      ],
      keyHighlights: [
        "Real-time Project Development",
        "Industry-Level Training",
        "Hands-on API Building",
        "Placement Assistance",
        "Live Case Studies"
      ]
    }
  },
  {
    id: 2,
    title: 'Java Fullstack\nwith\n Real Time Project',
    slug: 'java-fullstack',
    category: 'REAL TIME PROJECT',
    rating: '4.9',
    reviews: '128 reviews',
    duration: '4 Months',
    lessons: 'Lessons',
    details: {
      originalPrice: '₹30,000',
      discountPrice: '₹12,000',
      description: "Become a complete full stack developer by mastering frontend, backend, databases, and real-world project development using Java technologies.",
      coreCurriculum: [
        "Core Java & OOP Concepts",
        "JVM, Exception Handling, Multithreading",
        "MySQL, SQL, PL/SQL",
        "HTML, CSS, JavaScript, Bootstrap",
        "React js",
        "JDBC, Servlets, JSP",
        "Spring Boot, Hibernate, REST APIs",
        "Microservices & Design Patterns"
      ],
      keyHighlights: [
        "100+ Hours Training",
        "Live Projects & Internship",
        "Industry Expert Trainers",
        "Placement Assistance",
        "Real-world Case Studies"
      ]
    }
  }
];
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
          <div className="mg-catalog-grid-animated">
            {/* Render the list twice for seamless infinite scrolling */}
            {[...courses, ...courses].map((course, index) => (
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
                    {getCourseIcon(course.category)}
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
