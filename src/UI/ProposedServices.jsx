import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaFemale, FaChartLine, FaUserTie, FaPaintBrush, FaHeadset, FaTools, FaBuilding, FaBriefcase, FaSun, FaChalkboardTeacher, FaMobileAlt, FaUserGraduate } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import '../UIcss/ProposedServices.css';

const servicesData = [
  {
    id: 1,
    title: "Technical Skill Development",
    icon: <FaLaptopCode />,
    desc: "Empowering individuals with in-demand technical skills for the modern IT landscape.",
    color: "blue",
    slug: "technical-skill-development"
  },
  {
    id: 2,
    title: "Women Empowerment Workshops",
    icon: <FaFemale />,
    desc: "Dedicated programs designed to foster leadership and technical prowess in women.",
    color: "pink",
    slug: "women-empowerment-workshops"
  },
  {
    id: 3,
    title: "Entrepreneurship & Business Dev",
    icon: <FaChartLine />,
    desc: "Guiding aspiring entrepreneurs through the nuances of business strategy and growth.",
    color: "orange",
    slug: "entrepreneurship-business-dev"
  },
  {
    id: 4,
    title: "Personalized Career Mentoring",
    icon: <FaUserTie />,
    desc: "One-on-one mentorship to navigate career paths and achieve professional milestones.",
    color: "purple",
    slug: "personalized-career-mentoring"
  },
  {
    id: 5,
    title: "Visual Media Skill Development",
    icon: <FaPaintBrush />,
    desc: "Creative programs focusing on design, multimedia, and visual storytelling.",
    color: "teal",
    slug: "visual-media-skill-development"
  },
  {
    id: 6,
    title: "Service Desk & Operations",
    icon: <FaHeadset />,
    desc: "Training programs focused on operational efficiency and IT service desk management.",
    color: "blue",
    slug: "service-desk-operations"
  },
  {
    id: 7,
    title: "Modern Tools Skill Lab",
    icon: <FaTools />,
    desc: "Hands-on labs for mastering the latest software tools and industry frameworks.",
    color: "orange",
    slug: "modern-tools-skill-lab"
  },
  {
    id: 8,
    title: "MSME-Focused Workshops",
    icon: <FaBuilding />,
    desc: "Tailored workshops to accelerate digital transformation and growth for MSMEs.",
    color: "purple",
    slug: "msme-focused-workshops"
  },
  {
    id: 9,
    title: "Placement Assistance",
    icon: <FaBriefcase />,
    desc: "Comprehensive support for interviews, resume building, and job placements.",
    color: "teal",
    slug: "placement-assistance"
  },
  {
    id: 10,
    title: "Summer Bootcamps",
    icon: <FaSun />,
    desc: "Intensive, short-term bootcamps to rapidly build skills during the summer.",
    color: "pink",
    slug: "summer-bootcamps"
  },
  {
    id: 11,
    title: "Workshops Organised",
    icon: <FaChalkboardTeacher />,
    desc: "Regular industry-oriented workshops designed to keep you ahead of the curve.",
    color: "blue",
    slug: "workshops-organised"
  },
  {
    id: 12,
    title: "Mobile Apps & Web Development",
    icon: <FaMobileAlt />,
    desc: "End-to-end mobile and web application development with cutting-edge technologies.",
    color: "orange",
    slug: "mobile-apps-web-development"
  }
];

const ProposedServices = () => {
  return (
    <section className="proposed-services-section">
      <div className="ps-header">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Proposed <span>Services</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A comprehensive suite of programs designed to empower individuals, businesses, and communities.
        </motion.p>
      </div>

      <div className="ps-grid">
        {servicesData.map((service, index) => (
          <motion.div 
            key={service.id} 
            className={`ps-card ${service.color}-card`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <div className={`ps-icon-wrapper ${service.color}-icon-bg`}>
              {service.icon}
            </div>
            <h3 className="ps-card-title">{service.title}</h3>
            <p className="ps-card-desc">{service.desc}</p>
            <Link to={`/service/${service.slug}`} className="ps-card-footer">
              <span className={`ps-explore-text ${service.color}-text`}>Explore Now</span>
              <div className={`ps-card-arrow ${service.color}-arrow-bg`}>
                <FiChevronRight />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProposedServices;
