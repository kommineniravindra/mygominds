import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../css/ECertificate.css';
import api from '../api';

const ECertificate = () => {
  // 'landing' | 'mygominds-form' | 'nimsme'
  const [activeView, setActiveView] = useState('landing');

  // MyGoMinds form state
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [completionDate, setCompletionDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [feeCompleted, setFeeCompleted] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const certificateRef = useRef(null);

  // Restore previous submission from localStorage to prevent multiple registrations
  useEffect(() => {
    const saved = localStorage.getItem('mgCertificateSubmitted');
    if (saved) {
      setCertificateData(JSON.parse(saved));
      setGenerated(true);
    }
  }, []);

  // Pre-fill Institution Name for MyGoMinds
  useEffect(() => {
    if (activeView === 'mygominds-form') {
      setCollegeName('MYGOMINDS');
    } else {
      setCollegeName('');
    }
  }, [activeView]);


  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!name.trim() || !collegeName.trim() || !mobileNumber.trim() || !email.trim() || !course.trim() || !completionDate || !endDate) {
      setErrorMsg('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const data = {
      provider: 'mygominds',
      name,
      collegeName,
      mobileNumber,
      email,
      course,
      completionDate,
      endDate,
      feeCompleted,
    };

    try {
      await api.post('/api/e-certificate', data);
      setCertificateData(data);
      setGenerated(true);
      // Save to localStorage so this device can't register again
      localStorage.setItem('mgCertificateSubmitted', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
      setErrorMsg('Failed to generate certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNimsmeGenerate = async (e) => {
    e.preventDefault();
    if (!name.trim() || !collegeName.trim() || !mobileNumber.trim()) {
      setErrorMsg('Please fill in all fields');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const liveDate = new Date().toLocaleDateString(undefined, dateOptions);

    const data = {
      provider: 'nimsme',
      name,
      collegeName,
      mobileNumber,
      date: liveDate,
    };

    try {
      await api.post('/api/e-certificate', data);
      setCertificateData(data);
      setGenerated(true);
      localStorage.setItem('eCertificateData', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data:', error);
      setErrorMsg('Failed to generate certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setGenerated(false);
    setName('');
    setCollegeName(activeView === 'mygominds-form' ? 'MYGOMINDS' : '');
    setMobileNumber('');
    setEmail('');
    setCourse('');
    setCompletionDate('');
    setEndDate('');
    setFeeCompleted(false);
    setCertificateData(null);
  };

  const downloadPDF = () => {
    const input = certificateRef.current;
    if (!input) return;

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${certificateData.name.replace(/\s+/g, '_')}_Certificate.pdf`);
    });
  };

  // ─── LANDING: Two provider cards ──────────────────────────────────────────
  if (activeView === 'landing') {
    return (
      <div className="e-certificate-container">
        <div className="e-certificate-content">
          <h2 className="e-certificate-title">E-Certificate Portal</h2>
          <p className="e-certificate-subtitle">
            Select your certificate provider to get started
          </p>

          <div className="cert-card-grid">
            {/* MyGoMinds Card */}
            <div
              className="cert-provider-card mygominds-card"
              onClick={() => setActiveView('mygominds-form')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveView('mygominds-form')}
            >
              <div className="cert-card-icon">🎓</div>
              <h3 className="cert-card-name">MyGoMinds</h3>
              <p className="cert-card-desc">
                Generate your personalised MyGoMinds participation certificate instantly.
              </p>
              <span className="cert-card-btn">Get Certificate →</span>
            </div>

            {/* NI-MSME Card */}
            <div
              className="cert-provider-card nimsme-card"
              onClick={() => setActiveView('nimsme')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveView('nimsme')}
            >
              <div className="cert-card-icon">🏛️</div>
              <h3 className="cert-card-name">NI-MSME</h3>
              <p className="cert-card-desc">
                Access and download your NI-MSME certified programme certificate.
              </p>
              <span className="cert-card-btn">Get Certificate →</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─── NI-MSME: Existing certificate flow ───────────────────────────────────
  if (activeView === 'nimsme') {
    return (
      <div className="e-certificate-container">
        <div className="e-certificate-content">
          <button className="back-btn" onClick={() => setActiveView('landing')}>
            ← Back
          </button>
          <h2 className="e-certificate-title">NI-MSME E-Certificate</h2>

          {!generated ? (
            <form className="e-certificate-form" onSubmit={handleNimsmeGenerate}>
              {errorMsg && <div className="error-message">{errorMsg}</div>}
              <div className="form-group">
                <label htmlFor="nameInputNimsme">Enter Full Name:</label>
                <input
                  id="nameInputNimsme"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="collegeInputNimsme">Enter College Name:</label>
                <input
                  id="collegeInputNimsme"
                  type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="e.g. Example Institute of Technology"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobileInputNimsme">Enter Mobile Number:</label>
                <input
                  id="mobileInputNimsme"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="e.g. 9876543210"
                  required
                />
              </div>
              <button type="submit" className="generate-btn" disabled={loading}>
                {loading ? 'Generating...' : 'Generate Certificate'}
              </button>
            </form>
          ) : (
            <div className="certificate-display-section">
              <div className="action-buttons">
                <button onClick={handleReset} className="reset-btn-secondary">Change Name</button>
                <button onClick={downloadPDF} className="download-btn">Download as PDF</button>
              </div>
              <div className="certificate-wrapper" ref={certificateRef}>
                <img
                  src="/certificate/img.png"
                  alt="Certificate Template"
                  className="certificate-image"
                />
                <div className="certificate-text-overlay">
                  <div className="certificate-name">{certificateData?.name}</div>
                  <div className="certificate-date">{certificateData?.date}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="promotions-section">
          <h3>Advance Your Career with Mygominds</h3>
          <p>Explore our premium courses and programs to upgrade your skills.</p>
          <div className="promo-contact">
            <p><strong>Contact Us:</strong></p>
            <p>📞 +91 8885302120 | 📧 info@mygominds.com</p>
          </div>
        </div>
      </div>
    );
  }

  // ─── MYGOMINDS FORM ───────────────────────────────────────────────────────
  return (
    <div className="e-certificate-container">
      <div className="e-certificate-content">
        <h2 className="e-certificate-title">MyGoMinds E-Certificate</h2>
        <p className="e-cert-page-subtitle">Fill in your details — we'll take care of the rest</p>

        {!generated ? (
          <form className="e-certificate-form" onSubmit={handleGenerate}>
            {errorMsg && <div className="error-message">⚠ {errorMsg}</div>}

            <div className="form-section-label">Personal Information</div>

            <div className="form-group">
              <label htmlFor="nameInput">Full Name <span className="required-star">*</span></label>
              <input
                id="nameInput"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="collegeInput">Institution Name <span className="required-star">*</span></label>
              <input
                id="collegeInput"
                type="text"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                placeholder="e.g. Example Institute of Technology"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobileInput">Mobile Number <span className="required-star">*</span></label>
              <input
                id="mobileInput"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g. 9876543210"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="emailInput">Email Address <span className="required-star">*</span></label>
              <input
                id="emailInput"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. john@example.com"
                required
              />
            </div>

            <div className="form-section-label">Course Details</div>

            <div className="form-group">
              <label htmlFor="courseInput">Course Name <span className="required-star">*</span></label>
              <input
                id="courseInput"
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder="e.g. Full Stack Web Development"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="completionDateInput">Course Start Date <span className="required-star">*</span></label>
                <input
                  id="completionDateInput"
                  type="date"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDateInput">Course End Date <span className="required-star">*</span></label>
                <input
                  id="endDateInput"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group fee-checkbox-group">
              <label className="checkbox-label" htmlFor="feeCompletedInput">
                <input
                  id="feeCompletedInput"
                  type="checkbox"
                  checked={feeCompleted}
                  onChange={(e) => setFeeCompleted(e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                Fee Fully Paid / Completed
              </label>
            </div>

            <button type="submit" className="generate-btn" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Details'}
            </button>
          </form>
        ) : (
          /* ── Success Card ── */
          <div className="mg-success-card">
            <div className="mg-success-icon">✅</div>
            <h3 className="mg-success-title">Details Submitted!</h3>
            <p className="mg-success-msg">
              Your certificate will be sent to <strong>{certificateData?.email}</strong> within <strong>1–2 working days</strong> after payment verification.
            </p>
            <div className="mg-success-summary">
              <div className="mg-summary-row">
                <span className="mg-summary-label">Course</span>
                <span className="mg-summary-value">{certificateData?.course}</span>
              </div>
              <div className="mg-summary-row">
                <span className="mg-summary-label">Duration</span>
                <span className="mg-summary-value">{certificateData?.completionDate} → {certificateData?.endDate}</span>
              </div>
              <div className="mg-summary-row">
                <span className="mg-summary-label">Fee Status</span>
                <span className={`mg-summary-badge ${certificateData?.feeCompleted ? 'badge-paid' : 'badge-pending'}`}>
                  {certificateData?.feeCompleted ? '✔ Paid' : '⏳ Pending'}
                </span>
              </div>
            </div>
            <p className="mg-already-note">📌 You have already submitted your details. If you need any help, contact us at info@mygominds.com</p>
          </div>
        )}
      </div>

      <div className="promotions-section">
        <h3>Advance Your Career with Mygominds</h3>
        <p>Explore our premium courses and programs to upgrade your skills.</p>
        <div className="promo-contact">
          <p><strong>Contact Us:</strong></p>
          <p>📞 +91 8885302120 | 📧 info@mygominds.com</p>
        </div>
      </div>
    </div>
  );
};

export default ECertificate;
