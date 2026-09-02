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
  FiMonitor 
} from 'react-icons/fi';
import api from '../api';
import SEO from './SEO';
import '../css/GitRegistration.css';

const GitRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    collegeName: '',
    branch: ''
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);

  const GIT_REPO_URL = 'https://github.com/mygomindsrepo2026';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(GIT_REPO_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.mobileNumber.trim() || !formData.collegeName.trim() || !formData.branch.trim()) {
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
        branch: formData.branch.trim()
      });

      if (response.status === 201 || response.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', mobileNumber: '', collegeName: '', branch: '' });
      } else {
        setErrorMsg('Failed to submit registration. Please try again.');
      }
    } catch (err) {
      console.error('Git registration error:', err);
      const msg = err.response?.data?.message || 'Server error. Please try again later.';
      setErrorMsg(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="git-page-wrapper">
      <SEO 
        title="Git Registration | MyGoMinds"
        description="Register for Git & Version Control Sessions with MyGoMinds."
        path="/git"
      />
      
      <div className="git-container">
        <div className="git-card">
          {!isSubmitted ? (
            <>
              <div className="git-header">
                <div className="git-badge">
                  <FiGitBranch /> Git Session Registration
                </div>
                <h1>Git <span>Workshop</span> Form</h1>
                <p>Please enter your details below to register for the Git program.</p>
              </div>

              {errorMsg && (
                <div className="git-alert git-alert-error">
                  <FiAlertCircle size={20} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form className="git-form" onSubmit={handleSubmit}>
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

                <button type="submit" className="git-submit-btn" disabled={loading}>
                  <FiSend /> {loading ? 'Submitting...' : 'Submit Registration'}
                </button>
              </form>
            </>
          ) : (
            <div className="git-success-card">
              <div className="success-icon-wrapper">
                <FiCheckCircle />
              </div>
              <h2>Registration Completed!</h2>
              <p>Your details have been successfully recorded. Access the GitHub Repository below:</p>

              <div className="repo-box">
                <div className="repo-box-header">
                  <FiGitBranch /> GitHub Repository URL
                </div>
                <div className="repo-input-group">
                  <a 
                    href={GIT_REPO_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="repo-url-link"
                    title="Click to open repository in new tab"
                  >
                    <FiExternalLink /> {GIT_REPO_URL}
                  </a>
                  <button 
                    onClick={handleCopy} 
                    className={`git-copy-btn ${copied ? 'copied' : ''}`}
                  >
                    <FiCopy /> {copied ? 'Copied!' : 'Copy Link'}
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setIsSubmitted(false)} 
                className="register-again-btn"
              >
                Submit Another Registration
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Advertisement Section for MyGoMinds */}
      <div className="mygominds-ad-section">
        <div className="ad-card">
          <div className="ad-header">
            <span className="ad-badge">Why Choose MyGoMinds</span>
            <h2>Master In-Demand Tech & AI Skills</h2>
            <p>Transform your career with industry-tailored IT training, hands-on projects, and expert mentorship.</p>
          </div>

          <div className="ad-features-grid">
            <div className="ad-feature-item">
              <FiMonitor className="ad-feature-icon" />
              <div className="ad-feature-title">Live Interactive Classes</div>
              <div className="ad-feature-desc">Online & Offline training with real industry experts.</div>
            </div>

            <div className="ad-feature-item">
              <FiBriefcase className="ad-feature-icon" />
              <div className="ad-feature-title">100% Placement Support</div>
              <div className="ad-feature-desc">Resume building, mock interviews & direct hiring drives.</div>
            </div>

            <div className="ad-feature-item">
              <FiAward className="ad-feature-icon" />
              <div className="ad-feature-title">Recognized Certification</div>
              <div className="ad-feature-desc">MSME & Startup India recognized completion certificates.</div>
            </div>
          </div>

          <div className="ad-cta-container">
            <div className="ad-buttons">
              <Link to="/courses" className="ad-btn-primary">
                Explore All Courses <FiArrowRight />
              </Link>
              <Link to="/contact" className="ad-btn-secondary">
                Book Free Counseling
              </Link>
            </div>
            <div className="ad-contact-strip">
              <span>📞 Helpline: +91 8885302122</span>
              <span>📍 Location: KPHB Colony, Hyderabad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitRegistration;
