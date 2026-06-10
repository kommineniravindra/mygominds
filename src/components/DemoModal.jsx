import React, { useState } from 'react';
import '../css/courseLeadModal.css'; // Reusing the same CSS

const DemoModal = ({ isOpen, onClose, batchName, courseName, batchType, actionLink }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) {
      setError('Please fill in all required fields.');
      return;
    }
    if (mobile.length < 10) {
      setError('Please enter a valid mobile number.');
      return;
    }
    
    setIsLoading(true);
    setError('');

    try {
      // Save to database
      const response = await fetch('http://localhost:3000/api/demo-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          mobileNumber: mobile,
          courseName: courseName || batchName,
          batchType: batchType || 'Offline'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to save demo request');
      }

      // Save to localStorage so they don't have to fill it again
      localStorage.setItem('demoRegistered', 'true');
      localStorage.setItem('demoUserName', name);
      localStorage.setItem('demoUserEmail', email);
      localStorage.setItem('demoUserMobile', mobile);
      
      // Clear form
      setName('');
      setEmail('');
      setMobile('');

      if (actionLink) {
        window.open(actionLink, '_blank');
        onClose();
      } else {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 3000);
      }

    } catch (err) {
      console.error('API Error:', err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSuccess = () => {
    setSuccess(false);
    onClose();
  };

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal-content">
        <button className="lead-modal-close" onClick={handleCloseSuccess} disabled={isLoading}>&times;</button>
        <div className="lead-modal-header">
          <h2>Book a Free Demo</h2>
          <p>Register for the demo session for <strong>{courseName || batchName}</strong></p>
        </div>

        {success ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', color: '#059669' }}>
            <h3>Success!</h3>
            <p>Your demo request has been received.</p>
            {actionLink ? (
              <div style={{ marginTop: '2rem' }}>
                <p style={{ color: '#475569', marginBottom: '1rem', fontSize: '1.1rem' }}>Click the link below to join the session now:</p>
                <a href={actionLink} target="_blank" rel="noreferrer" className="lead-submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }} onClick={handleCloseSuccess}>
                  Join Demo Now
                </a>
              </div>
            ) : (
              <p style={{ marginTop: '0.5rem' }}>Our team will contact you shortly.</p>
            )}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="lead-modal-form">
            <div className="lead-form-group">
              <label>Course Name</label>
              <input 
                type="text" 
                readOnly 
                value={courseName || batchName || ''} 
                style={{ backgroundColor: '#f8fafc', color: '#64748b', cursor: 'not-allowed' }}
              />
            </div>

            <div className="lead-form-group">
              <label htmlFor="demoName">Full Name <span className="required">*</span></label>
              <input 
                type="text" 
                id="demoName" 
                placeholder="Enter your full name" 
                value={name} 
                onChange={(e) => { setName(e.target.value); setError(''); }}
                disabled={isLoading}
              />
            </div>
            
            <div className="lead-form-group">
              <label htmlFor="demoEmail">Email Address <span className="required">*</span></label>
              <input 
                type="email" 
                id="demoEmail" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => { setEmail(e.target.value); setError(''); }}
                disabled={isLoading}
              />
            </div>

            <div className="lead-form-group">
              <label htmlFor="demoMobile">Mobile Number <span className="required">*</span></label>
              <input 
                type="tel" 
                id="demoMobile" 
                placeholder="Enter your mobile number" 
                value={mobile} 
                onChange={(e) => { setMobile(e.target.value); setError(''); }}
                disabled={isLoading}
              />
            </div>

            {error && <span className="error-text">{error}</span>}
            
            <button type="submit" className="lead-submit-btn" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Demo Link'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
