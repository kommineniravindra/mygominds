import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PdfViewer = () => {
  const { title } = useParams();
  const [pdfUrl, setPdfUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBrochure = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/brochures/${title}`);
        if (!response.ok) {
          throw new Error('Brochure not found');
        }
        const data = await response.json();
        // Construct the full URL to the backend uploads directory
        setPdfUrl(`http://localhost:3000${data.pdfPath}`);
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
