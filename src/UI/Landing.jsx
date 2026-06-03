import React, { useState } from 'react';
import { FiPlay, FiAward, FiBarChart2, FiCheckCircle, FiCalendar } from 'react-icons/fi';
import { FaUsers, FaStar, FaGraduationCap } from 'react-icons/fa';
import '../UIcss/Landing.css';

const VIDEO_ID = 'l8_GwdXmo2A';

const Landing = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const startPlay = (e) => {
    e.preventDefault();
    setIsPlaying(true);
  };

  return (
    <div className="landing-page">
      {/* Background Elements */}
      <div className="bg-dots-top-left"></div>
      <div className="bg-dots-bottom-right"></div>
      <div className="bg-gradient-orb"></div>

      <div className="landing-container">
        {/* Left Column: Content */}
        <div className="landing-left">
          <div className="welcome-badge">
            <span className="badge-icon"><FaStar /></span>
            <span>WELCOME TO MYGO MINDS</span>
          </div>
          
          <h1 className="main-heading">
            Mygo Minds, <br />
            <span className="italic-orange">Train Your Brain.</span>
          </h1>
          
          <p className="sub-description">
            Empowering aspiring professionals with expert-led training and guaranteed placement assistance in the most in-demand tech domains.
          </p>
          
          <div className="action-group">
            <button className="primary-btn">
              <span className="calendar-icon" style={{ display: 'flex', fontSize: '18px' }}><FiCalendar /></span> Free Demo Class
            </button>
            <button
              onClick={startPlay}
              className="watch-video-btn"
              style={{ background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <div className="play-icon-wrapper">
                <FiPlay className="play-icon" />
              </div>
              <div className="video-text">
                <span className="video-title">Watch Overview</span>
                <span className="video-time">2 min video</span>
              </div>
            </button>
          </div>
          
          <div className="social-proof">
            <div className="avatars-group">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Student" className="avatar" />
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Student" className="avatar" />
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Student" className="avatar" />
              <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Student" className="avatar" />
              <div className="avatar more-count">5K+</div>
            </div>
            <div className="proof-text">
              <span className="proof-highlight">5000+ Students</span>
              <span className="proof-sub">already enrolled</span>
            </div>
          </div>
        </div>

        {/* Right Column: Media */}
        <div className="landing-right">
          {/* Arrow connection to video */}
          <div className="connection-arrow">
            <svg width="90" height="180" viewBox="0 0 90 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10,170 C -30,110 100,120 70,90 C 40,60 -20,70 80,10" stroke="#f47e38" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <polygon points="72,13 84,14 80,5" fill="#f47e38" />
            </svg>
          </div>

          <div className={`media-container ${isPlaying ? 'is-playing' : ''}`}>
            {isPlaying ? (
              /* Inline YouTube Player */
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Mygo Minds Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '24px', display: 'block' }}
              ></iframe>
            ) : (
              <>
                {/* Top Left User Tag */}
                <div className="video-top-tag">
                  <div className="tag-avatar">MG</div>
                  <div className="tag-info">
                    <span className="tag-title">#genai #aspnetcore</span>
                    <span className="tag-subtitle">mygo minds</span>
                  </div>
                </div>

                {/* YouTube Shorts Play Button */}
                <button
                  onClick={startPlay}
                  className="yt-play-button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.94 122.88" width="60" height="75">
                    <path d="M63.49 2.71c11.59-6.04 25.94-1.64 32.04 9.83 6.1 11.47 1.65 25.66-9.94 31.7l-9.53 5.01c8.21.3 16.04 4.81 20.14 12.52 6.1 11.47 1.66 25.66-9.94 31.7l-50.82 26.7c-11.59 6.04-25.94 1.64-32.04-9.83-6.1-11.47-1.65-25.66 9.94-31.7l9.53-5.01c-8.21-.3-16.04-4.81-20.14-12.52-6.1-11.47-1.65-25.66 9.94-31.7l50.82-26.7zM36.06 42.53l30.76 18.99-30.76 18.9V42.53z" fill="#ff0000"/>
                    <path d="M36.06,42.53 V 80.42 L 66.82,61.52Z" fill="#ffffff"/>
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Floating Badges */}
          <div className="badges-wrapper">
            <div className="floating-badge top-right">
              <div className="badge-icon-box orange">
                <FaUsers />
              </div>
              <div className="badge-content">
                <span className="badge-label">PLACEMENT</span>
                <span className="badge-main">100% Assistance</span>
                <span className="badge-sub green">Till You Get Placed</span>
              </div>
            </div>

            <div className="floating-badge bottom-left">
              <div className="badge-icon-box green">
                <FiAward />
              </div>
              <div className="badge-content">
                <span className="badge-label">CERTIFIED</span>
                <span className="badge-main">Industry Recognized</span>
                <span className="badge-sub">Trusted by Top Companies</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Bar & Footer */}
    </div>
  );
};

export default Landing;

