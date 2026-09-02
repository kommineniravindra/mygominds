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
  FiFolder,
  FiCpu
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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
  const [copiedDrive, setCopiedDrive] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);

  const DRIVE_URL = 'https://drive.google.com/drive/folders/1r6krrvncVf_5XtyvfayNss7RNAVcnDCL?usp=drive_link';
  const WHATSAPP_URL = 'https://chat.whatsapp.com/DYLkIQ8Gf0gGGsVNR4WSuL?s=sh&p=a&mlu=4&ilr=4';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleCopyDrive = () => {
    navigator.clipboard.writeText(DRIVE_URL);
    setCopiedDrive(true);
    setTimeout(() => setCopiedDrive(false), 3000);
  };

  const handleCopyWhatsapp = () => {
    navigator.clipboard.writeText(WHATSAPP_URL);
    setCopiedWhatsapp(true);
    setTimeout(() => setCopiedWhatsapp(false), 3000);
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
        title="AI Workshop Registration | MyGoMinds"
        description="Register for AI & Artificial Intelligence Workshops with MyGoMinds."
        path="/link"
      />
      
      <div className="git-container">
        <div className="git-card">
          {!isSubmitted ? (
            <>
              <div className="git-header">
                <div className="git-badge">
                  <FiCpu /> AI Session Registration
                </div>
                <h1>AI <span>Workshop</span> Form</h1>
                <p>Please enter your details below to register for the AI program.</p>
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
              <p>Your details have been successfully recorded. Access your course materials and join our WhatsApp group below:</p>

              {/* Google Drive Link Box */}
              <div className="repo-box drive-box">
                <div className="repo-box-header drive-header">
                  <FiFolder /> Google Drive Folder URL
                </div>
                <div className="repo-input-group">
                  <a 
                    href={DRIVE_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="repo-url-link drive-link"
                    title="Click to open Google Drive folder"
                  >
                    <FiExternalLink /> Access Drive Folder
                  </a>
                  <button 
                    onClick={handleCopyDrive} 
                    className={`git-copy-btn drive-copy-btn ${copiedDrive ? 'copied' : ''}`}
                  >
                    <FiCopy /> {copiedDrive ? 'Copied!' : 'Copy Drive Link'}
                  </button>
                </div>
              </div>

              {/* WhatsApp Link Box */}
              <div className="repo-box whatsapp-box">
                <div className="repo-box-header whatsapp-header">
                  <FaWhatsapp /> WhatsApp Group URL
                </div>
                <div className="repo-input-group">
                  <a 
                    href={WHATSAPP_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="repo-url-link whatsapp-link"
                    title="Click to join WhatsApp group"
                  >
                    <FiExternalLink /> Join WhatsApp Group
                  </a>
                  <button 
                    onClick={handleCopyWhatsapp} 
                    className={`git-copy-btn whatsapp-copy-btn ${copiedWhatsapp ? 'copied' : ''}`}
                  >
                    <FiCopy /> {copiedWhatsapp ? 'Copied!' : 'Copy Group Link'}
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
