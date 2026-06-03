import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Layers, 
  Cloud, 
  ShieldCheck, 
  Rocket,
  CheckCircle2,
  Cpu,
  Globe,
  Monitor,
  Workflow
} from 'lucide-react';
import '../UIcss/Roadmap.css';

const roadmapData = {
  'dotnet': {
    title: 'Full-stack .NET',
    color: '#8b5cf6',
    nodes: [
      { id: 1, title: 'Frontend Blazor/React', icon: <Globe size={24} />, detail: 'Modern C# Web UIs', tools: ['Blazor WebAssembly', 'React.js', 'Razor Pages', 'HTML5/CSS', 'Bootstrap', 'TypeScript'] },
      { id: 2, title: '.NET Core Backend', icon: <Terminal size={24} />, detail: 'Enterprise C# Servers', tools: ['C# 12', '.NET 8', 'ASP.NET Core', 'LINQ', 'Dependency Injection', 'xUnit'] },
      { id: 3, title: 'Data & EF Core', icon: <Database size={24} />, detail: 'Relational Data Access', tools: ['SQL Server', 'Entity Framework Core', 'PostgreSQL', 'Redis', 'Dapper', 'Azure SQL'] },
      { id: 4, title: 'Web APIs', icon: <Layers size={24} />, detail: 'Robust Microservices', tools: ['Minimal APIs', 'REST', 'gRPC', 'SignalR', 'Swagger', 'Ocelot'] },
      { id: 5, title: 'Azure Cloud', icon: <Rocket size={24} />, detail: 'Microsoft Ecosystem Deploy', tools: ['Azure App Service', 'Azure Functions', 'Docker', 'GitHub Actions', 'Azure DevOps', 'Bicep'] },
    ]
  },
  'java': {
    title: 'Full-stack Java',
    color: '#f97316',
    nodes: [
      { id: 1, title: 'Frontend UI', icon: <Globe size={24} />, detail: 'Modern Frontend Architecture', tools: ['React.js', 'Angular', 'HTML5/CSS3', 'TypeScript', 'Tailwind', 'Refine UI'] },
      { id: 2, title: 'Backend Engine', icon: <Terminal size={24} />, detail: 'Industrial Java Backend', tools: ['Java 17/21', 'Spring Boot 3', 'Spring Security', 'JUnit 5', 'Maven', 'IntelliJ'] },
      { id: 3, title: 'Database & ORM', icon: <Database size={24} />, detail: 'Data Persistence Layer', tools: ['MySQL', 'PostgreSQL', 'Hibernate', 'Spring Data JPA', 'Redis Cache', 'Liquibase'] },
      { id: 4, title: 'API & Microservices', icon: <Layers size={24} />, detail: 'System Integration', tools: ['REST/GraphQL', 'Microservices', 'Eureka', 'Apache Kafka', 'Feign Client', 'Swagger'] },
      { id: 5, title: 'DevOps & Cloud', icon: <Rocket size={24} />, detail: 'Professional Deployment', tools: ['AWS (EC2/S3)', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CloudWatch'] },
    ]
  },
  'mern': {
    title: 'MERN Stack',
    color: '#22c55e',
    nodes: [
      { id: 1, title: 'Frontend React', icon: <Monitor size={24} />, detail: 'Advanced Web Interfaces', tools: ['React 18', 'Redux Toolkit', 'Next.js', 'TypeScript', 'Framer Motion', 'Vite'] },
      { id: 2, title: 'Node Backend', icon: <Terminal size={24} />, detail: 'High-Performance Server', tools: ['Node.js', 'Express', 'JWT', 'Socket.io', 'Fastify', 'Passport.js'] },
      { id: 3, title: 'NoSQL Data', icon: <Database size={24} />, detail: 'Modern Data Systems', tools: ['MongoDB Atlas', 'Mongoose', 'Redis', 'Firebase', 'Compass', 'PostgreSQL'] },
      { id: 4, title: 'Cloud APIs', icon: <Layers size={24} />, detail: 'Full Stack Integration', tools: ['RESTful Services', 'Stripe API', 'Cloudinary', 'Axios', 'Postman', 'OAuth2.0'] },
      { id: 5, title: 'Production CI/CD', icon: <Rocket size={24} />, detail: 'Cloud Infrastructure', tools: ['Vercel/Netlify', 'Render', 'AWS S3', 'GitHub Actions', 'Docker', 'Nginx'] },
    ]
  },
  'mean': {
    title: 'MEAN Stack',
    color: '#dd0031',
    nodes: [
      { id: 1, title: 'Frontend Angular', icon: <Monitor size={24} />, detail: 'Enterprise Web Apps', tools: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Angular Material', 'HTML5/SCSS'] },
      { id: 2, title: 'Node Backend', icon: <Terminal size={24} />, detail: 'High-Performance Server', tools: ['Node.js', 'Express', 'JWT', 'Socket.io', 'NestJS', 'Passport.js'] },
      { id: 3, title: 'NoSQL Data', icon: <Database size={24} />, detail: 'Modern Data Systems', tools: ['MongoDB Atlas', 'Mongoose', 'Redis', 'Firebase', 'Compass', 'DynamoDB'] },
      { id: 4, title: 'Cloud APIs', icon: <Layers size={24} />, detail: 'Full Stack Integration', tools: ['RESTful Services', 'Stripe API', 'Cloudinary', 'Axios', 'Postman', 'OAuth2.0'] },
      { id: 5, title: 'Production CI/CD', icon: <Rocket size={24} />, detail: 'Cloud Infrastructure', tools: ['AWS S3/EC2', 'Docker', 'GitHub Actions', 'Jenkins', 'Vercel', 'Nginx'] },
    ]
  },
  'python': {
    title: 'Full-stack Python',
    color: '#3b82f6',
    nodes: [
      { id: 1, title: 'Frontend Vue/React', icon: <Monitor size={24} />, detail: 'Responsive Python Apps', tools: ['React.js', 'Vue.js', 'Jinja2 Templates', 'Tailwind', 'Bootstrap 5', 'NPM'] },
      { id: 2, title: 'Python Backend', icon: <Terminal size={24} />, detail: 'Scalable Python Servers', tools: ['Django', 'FastAPI', 'Flask', 'Celery', 'Pydantic', 'Pytest'] },
      { id: 3, title: 'Database Layer', icon: <Database size={24} />, detail: 'Structural Data Flow', tools: ['PostgreSQL', 'Redis', 'SQLAlchemyOR', 'Alembic', 'ElasticSearch', 'MongoDB'] },
      { id: 4, title: 'API Expert', icon: <Layers size={24} />, detail: 'Enterprise Connections', tools: ['Django Rest Framework', 'FastAPI Docs', 'Swagger', 'Postman', 'GraphQL', 'Insomnia'] },
      { id: 5, title: 'DevOps & Deploy', icon: <Rocket size={24} />, detail: 'Production Ecosystem', tools: ['AWS BeanStalk', 'Heroku', 'Docker Compose', 'Nginx', 'Gunicorn', 'Terraform'] },
    ]
  }
};

function Roadmap() {
  const [activeTab, setActiveTab] = useState('dotnet');
  const [selectedNode, setSelectedNode] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const currentPath = roadmapData[activeTab];

  // Auto-Cycle Engine
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setSelectedNode((prev) => {
          if (prev === 5) {
            // Move to next technology
            const keys = Object.keys(roadmapData);
            const nextIndex = (keys.indexOf(activeTab) + 1) % keys.length;
            setActiveTab(keys[nextIndex]);
            return 1;
          }
          return prev + 1;
        });
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeTab]);

  return (
    <section className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h3 className="roadmap-title">
            Interactive <span>Master Roadmap</span>
          </h3>
          {/* <p className="roadmap-description">
            Choose your technology track and visualize your journey from fundamental basics to high-impact career placement.
          </p> */}

          <div className="roadmap-switcher">
            {Object.keys(roadmapData).map((key) => (
              <button 
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  setSelectedNode(1);
                  setIsAutoPlaying(false);
                }}
                className={`roadmap-tab ${activeTab === key ? 'active' : ''}`}
                style={{ '--accent': roadmapData[key].color }}
              >
                {roadmapData[key].title}
              </button>
            ))}
          </div>
        </div>

        <div className="roadmap-content">
          {/* SVG Path Background */}
          <div className="roadmap-viz-area">
            <svg className="roadmap-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                key={activeTab}
                d="M 10 50 C 20 50 25 25 30 25 S 40 50 50 50 S 65 75 70 75 S 80 50 90 50"
                fill="transparent"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="0.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                key={`${activeTab}-glow`}
                d="M 10 50 C 20 50 25 25 30 25 S 40 50 50 50 S 65 75 70 75 S 80 50 90 50"
                fill="transparent"
                stroke={currentPath.color}
                strokeWidth="0.8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="path-glow"
              />
            </svg>

            {/* Interactive Nodes */}
            <div className="roadmap-nodes">
              {currentPath.nodes.map((node, index) => {
                const positions = [
                  { left: '10%', top: '50%' },
                  { left: '30%', top: '25%' },
                  { left: '50%', top: '50%' },
                  { left: '70%', top: '75%' },
                  { left: '90%', top: '50%' }
                ];

                return (
                  <motion.div
                    key={node.id}
                    className={`roadmap-node ${selectedNode === node.id ? 'active' : ''}`}
                    style={{ 
                      left: positions[index].left, 
                      top: positions[index].top,
                      '--node-color': currentPath.color 
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    onClick={() => {
                      setSelectedNode(node.id);
                      setIsAutoPlaying(false);
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="node-icon">{node.icon}</div>
                    <div className="node-label">{node.title}</div>
                    <div className="node-pulse"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Glass Detail Panel */}
          <div className="roadmap-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${selectedNode}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="node-glass-card"
              >
                <div className="node-card-header">
                  <div className="node-badge" style={{ background: currentPath.color }}>
                    Phase 0{selectedNode}
                  </div>
                  <h3>{currentPath.nodes.find(n => n.id === selectedNode).title}</h3>
                </div>

                <div className="tools-section">
                  <div className="tools-label">Tech Stack:</div>
                  <div className="tools-grid">
                    {currentPath.nodes.find(n => n.id === selectedNode).tools.map((tool, i) => (
                      <span key={i} className="tool-tag">{tool}</span>
                    ))}
                  </div>
                </div>

                <div className="node-card-footer">
                  <div className="status">
                    <CheckCircle2 size={16} color={currentPath.color} />
                    <span>Industry Aligned</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
