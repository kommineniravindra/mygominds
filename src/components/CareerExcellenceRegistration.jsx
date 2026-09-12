import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUser, 
  FiPhone, 
  FiBookOpen, 
  FiGitBranch, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiCopy, 
  FiExternalLink, 
  FiArrowRight, 
  FiAward, 
  FiBriefcase, 
  FiMonitor,
  FiStar,
  FiCalendar
} from 'react-icons/fi';
import api from '../api';
import SEO from './SEO';
import '../css/CareerExcellence.css';

const CareerExcellenceRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    collegeName: '',
    branch: '',
    passedOutYear: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copiedTestUrl, setCopiedTestUrl] = useState(false);

  const TEST_URL = 'https://online-test.classplusapp.com/?testId=6aa4fcaac8df8a6af3852dfa&defaultLanguage=en';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleCopyTestUrl = () => {
    navigator.clipboard.writeText(TEST_URL);
    setCopiedTestUrl(true);
    setTimeout(() => setCopiedTestUrl(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.mobileNumber.trim() || !formData.collegeName.trim() || !formData.branch.trim() || !formData.passedOutYear.trim()) {
      setErrorMsg('Please fill in all the required fields.');
      return;
    }

    if (!/^\d{10}$/.test(formData.mobileNumber.trim())) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/api/git-registrations', {
        name: formData.name.trim(),
        mobileNumber: formData.mobileNumber.trim(),
        collegeName: formData.collegeName.trim(),
        branch: formData.branch.trim(),
        passedOutYear: formData.passedOutYear.trim()
      });

      if (response.status === 201 || response.status === 200) {
        setIsSubmitted(true);
      } else {
        setErrorMsg('Failed to submit registration. Please try again.');
      }
    } catch (err) {
      console.error('Career Excellence registration error:', err);
      const msg = err.response?.data?.message || 'Server error. Please try again later.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cep-page-wrapper">
      <SEO 
        title="Career Excellence Program Registration | MyGoMinds"
        description="Register for the Career Excellence Program at MyGoMinds and take your online assessment test."
        path="/career-excellence"
      />
      
      {/* Top Compact Header */}
      <div className="cep-hero-header">
        <div className="cep-badge">
          <FiStar /> Career Excellence Program
        </div>
        <h2>Elevate Your Career with <span>MyGoMinds</span></h2>
      </div>

      {/* Main 2-Column Section */}
      <div className="cep-main-container">
        {/* Left Column: Video Container */}
        <div className="cep-video-section">
          <div className="cep-card video-card">
            <div className="cep-video-wrapper">
              <video 
                src="/v1.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline
                className="cep-video-element"
              >
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>

        {/* Right Column: Registration Form / Test Link */}
        <div className="cep-form-section">
          <div className="cep-card form-card">
            {!isSubmitted ? (
              <>
                <div className="cep-card-header">
                  <span className="cep-mini-badge"><FiUser /> Student Registration</span>
                  <h2>Register for Program</h2>
                  <p>Fill out your details to get instant access to the assessment test.</p>
                </div>

                {errorMsg && (
                  <div className="cep-alert cep-alert-error">
                    <FiAlertCircle size={20} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <form className="cep-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser /> Full Name *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mobileNumber">
                      <FiPhone /> Mobile Number *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Enter 10-digit mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        maxLength={10}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="collegeName">
                      <FiBookOpen /> College Name *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="collegeName"
                        name="collegeName"
                        placeholder="Enter your college or university name"
                        value={formData.collegeName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="branch">
                      <FiGitBranch /> Branch / Department *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="branch"
                        name="branch"
                        placeholder="e.g. CSE, ECE, IT, Mechanical"
                        value={formData.branch}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="passedOutYear">
                      <FiCalendar /> Passed Out Year *
                    </label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="passedOutYear"
                        name="passedOutYear"
                        placeholder="e.g. 2024, 2025, 2026"
                        value={formData.passedOutYear}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="cep-submit-btn" disabled={loading}>
                    <FiSend /> {loading ? 'Submitting...' : 'Submit & Proceed to Test'}
                  </button>
                </form>
              </>
            ) : (
              <div className="cep-success-card">
                <div className="success-icon-wrapper">
                  <FiCheckCircle />
                </div>
                <h2>Registration Completed!</h2>
                <p>Your registration for the <strong>Career Excellence Program</strong> is confirmed. Please click below to start your online assessment test.</p>

                {/* Online Test Link Box */}
                <div className="test-box">
                  <div className="test-box-header">
                    <FiAward /> Career Excellence Assessment Test
                  </div>
                  <div className="test-url-display">
                    <code>{TEST_URL}</code>
                  </div>
                  <div className="test-actions">
                    <a 
                      href={TEST_URL} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="take-test-btn"
                    >
                      Take Test Now <FiExternalLink />
                    </a>
                    <button 
                      onClick={handleCopyTestUrl} 
                      className={`copy-test-btn ${copiedTestUrl ? 'copied' : ''}`}
                    >
                      <FiCopy /> {copiedTestUrl ? 'Copied Link!' : 'Copy Test Link'}
                    </button>
                  </div>
                </div>

                <div className="test-instructions">
                  <h4>Instructions to Take Test:</h4>
                  <ol>
                    <li>Click the <strong>Take Test Now</strong> button above or copy the URL into your browser.</li>
                    <li>Log in with your registered mobile number on the test portal.</li>
                    <li>Complete all questions within the allocated time.</li>
                  </ol>
                </div>

                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', mobileNumber: '', collegeName: '', branch: '', passedOutYear: '' });
                  }} 
                  className="register-again-btn"
                >
                  Register Another Candidate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Promotional Banner Section */}
      <div className="cep-ad-section">
        <div className="ad-card">
          <div className="ad-header">
            <span className="ad-badge">Why Choose MyGoMinds</span>
            <h2>Accelerate Your Career with Industry Experts</h2>
            <p>Master top technologies like Full Stack Development, Data Science, AI/ML & DevOps with 100% placement guidance.</p>
          </div>

          <div className="ad-features-grid">
            <div className="ad-feature-item">
              <FiMonitor className="ad-feature-icon" />
              <div className="ad-feature-title">Live Hands-on Projects</div>
              <div className="ad-feature-desc">Work on real production-grade codebases and projects.</div>
            </div>

            <div className="ad-feature-item">
              <FiBriefcase className="ad-feature-icon" />
              <div className="ad-feature-title">100% Placement Support</div>
              <div className="ad-feature-desc">Resume building, mock interviews & direct referral drives.</div>
            </div>

            <div className="ad-feature-item">
              <FiAward className="ad-feature-icon" />
              <div className="ad-feature-title">Verified Certifications</div>
              <div className="ad-feature-desc">Government & MSME recognized completion credentials.</div>
            </div>
          </div>

          <div className="ad-cta-container">
            <div className="ad-buttons">
              <Link to="/courses" className="ad-btn-primary">
                Explore All Courses <FiArrowRight />
              </Link>
              <Link to="/contact" className="ad-btn-secondary">
                Get Free Counseling
              </Link>
            </div>
            <div className="ad-contact-strip">
              <span>📞 Helpline: +91 8885302122</span>
              <span>📍 KPHB Colony, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExcellenceRegistration;
