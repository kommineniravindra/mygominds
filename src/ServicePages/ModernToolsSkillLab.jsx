import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaGitAlt, FaDocker, FaJira, FaSlack, FaFigma } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import './css/ModernTools.css';

const ModernToolsSkillLab = () => {
  const tools = [
    { icon: <FaGitAlt />, title: 'Git & Version Control', desc: 'Master Git, GitHub, GitLab, complex branching strategies, and CI/CD workflows.' },
    { icon: <FaDocker />, title: 'Docker & Containers', desc: 'Learn modern containerization, Docker Compose, and deployment pipelines.' },
    { icon: <FaJira />, title: 'Project Management', desc: 'Become an expert in JIRA, Trello, Asana, and agile project management tools.' },
    { icon: <FaSlack />, title: 'Collaboration Tools', desc: 'Optimize modern workplace communication with Slack, Teams, and Notion.' },
    { icon: <FaFigma />, title: 'Design Tools', desc: 'Accelerate rapid prototyping and UI design workflows using Figma and Canva.' },
    { icon: <FaTools />, title: 'DevOps Tools', desc: 'Automate deployments with Jenkins, Kubernetes, Terraform, and monitoring solutions.' },
  ];

  return (
    <div className="mt-page">
      <section className="mt-hero">
        <div className="mt-grid-overlay"></div>
        <motion.div className="mt-hero-content" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mt-badge">Hands-On Tech Labs</div>
          <h1 className="mt-title">Modern Tools<br/><span>Skill Lab</span></h1>
          <p className="mt-desc">
            Immerse yourself in our futuristic labs. Master the latest software tools and industry frameworks, and stay ahead with the tech stack that top companies use every day.
          </p>
          <a href="/contact" className="mt-cta-btn">Join the Lab <FiArrowRight /></a>
        </motion.div>
      </section>

      <section className="mt-tools-section">
        <h2 className="mt-section-title">Tools You'll <span>Master</span></h2>
        <div className="mt-grid">
          {tools.map((item, i) => (
            <motion.div key={i} className="mt-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="mt-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModernToolsSkillLab;
