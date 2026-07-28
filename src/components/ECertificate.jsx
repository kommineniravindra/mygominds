import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../css/ECertificate.css';
import api from '../api';

const ECertificate = () => {
  const [name, setName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [generated, setGenerated] = useState(false);
  const [certificateData, setCertificateData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const certificateRef = useRef(null);

  // Load existing data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('eCertificateData');
    if (savedData) {
      setCertificateData(JSON.parse(savedData));
      setGenerated(true);
    }
  }, []);

  const handleGenerate = async (e) => {
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
      name: name,
      collegeName: collegeName,
      mobileNumber: mobileNumber,
      date: liveDate,
    };

    try {
      await api.post('/api/e-certificate', {
        name,
        collegeName,
        mobileNumber
      });
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
    setCollegeName('');
    setMobileNumber('');
    setCertificateData(null);
    localStorage.removeItem('eCertificateData');
  };

  const downloadPDF = () => {
    const input = certificateRef.current;
    if (!input) return;

    html2canvas(input, {
      scale: 2, // higher scale for better resolution
      useCORS: true,
      backgroundColor: null, // Transparent background for canvas
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      
      // Create a PDF with the exact dimensions of the certificate
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });

      // Add the image filling the entire PDF page (no white borders)
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save(`${certificateData.name.replace(/\s+/g, '_')}_Certificate.pdf`);
    });
  };

  return (
    <div className="e-certificate-container">
      <div className="e-certificate-content">
        <h2 className="e-certificate-title">Mygominds E-certificate</h2>
        
        {!generated ? (
          <form className="e-certificate-form" onSubmit={handleGenerate}>
            {errorMsg && <div className="error-message">{errorMsg}</div>}
            <div className="form-group">
              <label htmlFor="nameInput">Enter Full Name:</label>
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
              <label htmlFor="collegeInput">Enter College Name:</label>
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
              <label htmlFor="mobileInput">Enter Mobile Number:</label>
              <input
                id="mobileInput"
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
};

export default ECertificate;
