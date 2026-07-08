import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../UIcss/Carousel.css';

const slidesData = [
  {
    id: 1,
    tag: "TRAINING & SOFTWARE DEVELOPMENT",
    title: (
      <>
        <span className="text-dark nowrap-desktop">Empowering Minds.</span><br/>
        <span className="text-blue nowrap-desktop title-highlight">Building Futures.</span>
      </>
    ),
    description: "We provide industry-focused training and custom software development services that empower individuals and businesses to grow, innovate, and succeed in the digital era.",
    features: [
      "Industry-aligned Training Programs",
      "Hands-on Projects & Real-world Skills",
      "Career Support & Placement Assistance"
    ],
    primaryBtn: { text: "Explore IT Programs", link: "/courses" },
    secondaryBtn: { text: "Our Services", link: "/services" },
    image: "/banners/landing1.png",
    imageStyle: { transform: "scaleY(1.15)", transformOrigin: "right center" },
  },
  {
    id: 2,
    tag: "TRAINING & SOFTWARE DEVELOPMENT",
    title: (
      <>
        <span className="text-dark nowrap-desktop">FULL STACK</span><br/>
        <span className="text-blue nowrap-desktop title-large">DEVELOPMENT</span><br/>
      </>
    ),
    description: "Master front-end, back-end, databases, and modern frameworks to build powerful, scalable web applications and enterprise-grade software solutions.",
    features: [
      "Industry-aligned Training Programs",
      "Hands-on Projects & Real-world Skills",
      "Career Support & Placement Assistance"
    ],
    primaryBtn: { text: "Full Stack Programs", link: "/courses" },
    secondaryBtn: { text: "View Curriculum", link: "/courses" },
    image: "/banners/java1.png",
    imageStyle: { 
      transform: "scale(1.3)", 
      transformOrigin: "center",
      objectFit: "contain",
      maxHeight: "500px"
    },
    bgColor: "#f3f7fb"
  },
  {
    id: 4,
    tag: "NI-MSME ALIGNED WORKSHOPS",
    tagStyle: { backgroundColor: "rgba(245, 158, 11, 0.15)", color: "#fcd34d", border: "1px solid rgba(245, 158, 11, 0.3)", letterSpacing: "1px" },
    dotStyle: { backgroundColor: "#fcd34d", boxShadow: "0 0 8px rgba(252, 211, 77, 0.8)" },
    title: (
      <>
        <span className="nowrap-desktop" style={{ color: '#ffffff', fontWeight: '800', letterSpacing: '-1px' }}>NI-MSME-Focused</span><br/>
        <span className="nowrap-desktop" style={{ color: '#f59e0b', fontSize: '1.1em', display: 'inline-block', marginTop: '10px' }}>Workshops</span><br/>
      </>
    ),
    description: "Tailored, practical workshops designed to accelerate digital transformation and sustainable growth for MSMEs. Empowering your business with the skills to compete globally.",
    descStyle: { color: "#d1fae5", fontSize: "1.15rem", lineHeight: "1.7" },
    features: [
      "Government & NI-MSME Certified Programs",
      "Intensive Summer Bootcamps",
      "Hands-on Workshops & Skill Development"
    ],
    primaryBtn: { text: "Explore Programs", link: "/service/msme-focused-workshops" },
    primaryBtnStyle: { backgroundColor: "#f59e0b", color: "#064e3b", boxShadow: "0 10px 25px rgba(245, 158, 11, 0.4)", border: "none", padding: "1rem 2rem", fontSize: "1.1rem" },
    secondaryBtn: null,
    image: "/clients/msme.png",
    imageStyle: { 
      height: "520px",
      width: "100%",
      objectFit: "contain",
      marginRight: "20px",
      marginTop: "10px",
      filter: "brightness(0) invert(1)",
      transform: "scale(1.3) translateX(-40px)"
    },
    bgColor: "#064e3b",
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 500000); // Auto-scroll every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const slide = slidesData[currentSlide];

  return (
    <div className="mg-hero-section" style={{ backgroundColor: slide.bgColor || '#fcfdfe', transition: 'background-color 0.5s ease' }}>
      {/* Navigation Arrows */}
      <button className="carousel-nav-btn prev-btn" onClick={prevSlide} aria-label="Previous slide">
        <FiChevronLeft />
      </button>
      <button className="carousel-nav-btn next-btn" onClick={nextSlide} aria-label="Next slide">
        <FiChevronRight />
      </button>

      <AnimatePresence mode="wait">
        <motion.div 
          key={slide.id}
          className="mg-hero-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Content */}
          <div className="mg-hero-content">
            <div className="mg-hero-tag" style={slide.tagStyle || {}}>
              <span className="mg-hero-dot" style={slide.dotStyle || {}}></span>
              {slide.tag}
            </div>
            
            <h1 className="mg-hero-title">
              {slide.title}
            </h1>
            
            <div className="mg-hero-divider">
              <span className="line-dark" style={slide.dividerDarkStyle || {}}></span>
              <span className="line-orange" style={slide.dividerOrangeStyle || {}}></span>
            </div>
            
            <p className="mg-hero-description" style={slide.descStyle || {}}>
              {slide.description}
            </p>
            
            {slide.features && slide.features.length > 0 && (
              <ul className="mg-hero-features">
                {slide.features.map((feature, idx) => (
                  <li key={idx} style={slide.descStyle ? { color: slide.descStyle.color } : {}}>
                    <FiCheckCircle className="feature-icon" style={slide.dotStyle ? { color: slide.dotStyle.backgroundColor } : {}} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="mg-hero-buttons">
              {slide.primaryBtn && (
                <Link to={slide.primaryBtn.link} className="btn-primary" style={slide.primaryBtnStyle || {}}>
                  {slide.primaryBtn.text} <FiArrowRight className="btn-icon" />
                </Link>
              )}
              {slide.secondaryBtn && (
                <Link to={slide.secondaryBtn.link} className="btn-secondary" style={slide.secondaryBtnStyle || {}}>
                  {slide.secondaryBtn.text} <FiArrowRight className="btn-icon" />
                </Link>
              )}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="mg-hero-image-wrapper">
            <img src={slide.image} alt="Hero banner" className="mg-hero-main-img" style={slide.imageStyle || {}} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
