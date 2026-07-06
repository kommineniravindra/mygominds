import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaMobileAlt, FaBuilding, FaUserTie, 
  FaVideo, FaHeadset, FaTools, FaIndustry, 
  FaUserGraduate, FaSun, FaChalkboardTeacher, FaFemale 
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import '../ServicesCss/ServiceOfferings.css';

const servicesList = [
  {
    id: 1,
    title: 'Mobile Apps & Web Development',
    desc: 'Custom, scalable, and responsive applications tailored to your business needs.',
    icon: <FaMobileAlt />,
    path: '/service/mobile-apps-web-development'
  },
  {
    id: 2,
    title: 'Technical Skill Development',
    desc: 'Empower your workforce with the latest technical skills and programming languages.',
    icon: <FaCode />,
    path: '/service/technical-skill-development'
  },
  {
    id: 3,
    title: 'Women Empowerment Workshops',
    desc: 'Dedicated programs to support, train, and empower women in technology and business.',
    icon: <FaFemale />,
    path: '/service/women-empowerment-workshops'
  },
  {
    id: 4,
    title: 'Entrepreneurship & Business Dev',
    desc: 'Strategic guidance and training to help you build and scale your startup.',
    icon: <FaBuilding />,
    path: '/service/entrepreneurship-business-dev'
  },
  {
    id: 5,
    title: 'Personalized Career Mentoring',
    desc: 'One-on-one mentorship to guide your career path and maximize your potential.',
    icon: <FaUserTie />,
    path: '/service/personalized-career-mentoring'
  },
  {
    id: 6,
    title: 'Visual Media Skill Development',
    desc: 'Master graphic design, video editing, and digital media creation tools.',
    icon: <FaVideo />,
    path: '/service/visual-media-skill-development'
  },
  {
    id: 7,
    title: 'Service Desk Operations',
    desc: 'Efficient IT support and service desk solutions to streamline your operations.',
    icon: <FaHeadset />,
    path: '/service/service-desk-operations'
  },
  {
    id: 8,
    title: 'Modern Tools Skill Lab',
    desc: 'Hands-on training with the latest industry-standard software and development tools.',
    icon: <FaTools />,
    path: '/service/modern-tools-skill-lab'
  },
  {
    id: 9,
    title: 'MSME Focused Workshops',
    desc: 'Specialized training programs designed specifically for Micro, Small and Medium Enterprises.',
    icon: <FaIndustry />,
    path: '/service/msme-focused-workshops'
  },
  {
    id: 10,
    title: 'Placement Assistance',
    desc: 'Dedicated support to connect our trained professionals with top industry employers.',
    icon: <FaUserGraduate />,
    path: '/service/placement-assistance'
  },
  {
    id: 11,
    title: 'Summer Bootcamps',
    desc: 'Intensive, short-term training programs during summer breaks for rapid skill acquisition.',
    icon: <FaSun />,
    path: '/service/summer-bootcamps'
  },
  {
    id: 12,
    title: 'Workshops Organised',
    desc: 'Custom-tailored corporate and institutional workshops on various technology topics.',
    icon: <FaChalkboardTeacher />,
    path: '/service/workshops-organised'
  }
];

const ServiceOfferings = () => {
  return (
    <section className="so-container">
      <div className="so-header">
        <span className="so-badge">Our Expertise</span>
        <h2 className="so-title">Explore Our Services</h2>
      </div>
      
      <div className="so-grid">
        {servicesList.map((service) => (
          <Link to={service.path} key={service.id} className="so-card">
            <div className="so-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="so-card-title">{service.title}</h3>
            <p className="so-card-desc">{service.desc}</p>
            <span className="so-card-link">
              Learn More <FiArrowRight />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceOfferings;
