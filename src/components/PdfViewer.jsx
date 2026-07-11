import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const PdfViewer = () => {
  const { title } = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Lead capture state
  const [hasProvidedNumber, setHasProvidedNumber] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    // Check if they already provided a number for this brochure
    const stored = localStorage.getItem(`brochure_${title}`);
    if (stored) {
      setHasProvidedNumber(true);
    }

    const fetchBrochure = async () => {
      try {
        const response = await api.get(`/api/brochures/${title}`);
        if (response.status !== 200) {
          throw new Error('Brochure not found');
        }
        
        // Since proxy handles /uploads locally and api handles it in production
        const baseUrl = import.meta.env.MODE === 'production' ? 'https://api.mygominds.com' : '';
        setPdfUrl(`${baseUrl}${response.data.pdfPath}`);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (title) {
      fetchBrochure();
    }
  }, [title]);

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!mobileNumber || mobileNumber.length < 10) {
      setSubmitError('Please enter a valid mobile number.');
      return;
    }

    setSubmitting(true);
    setSubmitError('');

    try {
      await api.post(`/api/brochures/${title}/leads`, { mobileNumber });
      localStorage.setItem(`brochure_${title}`, 'true');
      setHasProvidedNumber(true);
    } catch (err) {
      console.error('Error submitting lead:', err);
      setSubmitError('Failed to verify mobile number. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
        <h2>Loading Brochure...</h2>
      </div>
    );
  }

  if (error || !pdfUrl) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', flexDirection: 'column' }}>
        <h2 style={{ color: '#ef4444' }}>Oops!</h2>
        <p>{error || 'Brochure could not be loaded.'}</p>
      </div>
    );
  }

  if (!hasProvidedNumber) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: '100vh', width: '100%', backgroundColor: '#f3f4f6', fontFamily: 'Inter, sans-serif'
      }}>
        <div style={{
          backgroundColor: '#ffffff', padding: '40px', borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '90%', textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '10px', color: '#111827', fontSize: '24px' }}>Access Brochure</h2>
          <p style={{ marginBottom: '24px', color: '#6b7280', fontSize: '14px' }}>
            Please enter your mobile number to view the {title.replace(/-/g, ' ')} brochure.
          </p>
          <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              style={{
                padding: '12px 16px', borderRadius: '8px', border: '1px solid #d1d5db',
                fontSize: '16px', outline: 'none', transition: 'border-color 0.2s'
              }}
              required
            />
            {submitError && <span style={{ color: '#ef4444', fontSize: '13px', textAlign: 'left' }}>{submitError}</span>}
            <button
              type="submit"
              disabled={submitting}
              style={{
                backgroundColor: submitting ? '#9ca3af' : '#2563eb', color: '#ffffff',
                padding: '12px', borderRadius: '8px', border: 'none', fontSize: '16px',
                fontWeight: '600', cursor: submitting ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              {submitting ? 'Verifying...' : 'View Brochure'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        title={`${title} Brochure`}
      />
    </div>
  );
};

export default PdfViewer;
