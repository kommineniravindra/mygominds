import React, { useState, useEffect } from 'react';
import { FiX, FiPhone, FiCheckCircle } from 'react-icons/fi';
import '../css/PopupAdModal.css';

const PopupAdModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Dynamic configuration state
  const [adConfig, setAdConfig] = useState(null);
  const [isConfigLoaded, setIsConfigLoaded] = useState(false);

  useEffect(() => {
    const fetchSettingsAndShow = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/popup-settings/active');
        if (response.ok) {
          const settings = await response.json();
          setAdConfig(settings);
          setIsConfigLoaded(true);

          // If settings say it's active
          // (Temporarily disabled the hasSeenPopup check so you can test it easily)
          // const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
          if (settings.isActive /* && !hasSeenPopup */) {
            // Show the popup after a 3-second delay
            setTimeout(() => {
              setIsOpen(true);
              sessionStorage.setItem('hasSeenPopup', 'true');
            }, 3000);
          }
        }
      } catch (err) {
        console.error('Failed to fetch popup settings:', err);
      }
    };

    fetchSettingsAndShow();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!mobileNumber || mobileNumber.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3000/api/popup-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: adConfig?.adTitle || "Special Offer: Full Stack Masterclass",
          mobileNumber: mobileNumber
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      setSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000); // Close automatically after 3 seconds of success
      
    } catch (error) {
      console.error('Error submitting popup lead:', error);
      alert('Failed to register. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal-content">
        <button className="popup-close-btn" onClick={handleClose}>
          <FiX />
        </button>
        
        <div className="popup-image-container">
          <img 
            src={adConfig?.adImage || "/aboutus.png"} 
            alt="Special Offer" 
            className="popup-image" 
          />
        </div>
        
        <div className="popup-body">
          {success ? (
            <div className="popup-success-msg">
              <FiCheckCircle size={28} />
              <span>Registration Successful!</span>
            </div>
          ) : (
            <>
              <h2 className="popup-title">{adConfig?.adTitle || "Special Offer"}</h2>
              <p className="popup-subtitle">{adConfig?.adSubtitle || ""}</p>
              
              <form onSubmit={handleSubmit} className="popup-form">
                <div className="popup-input-group">
          
                  <input
                    type="tel"
                    className="popup-input"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="popup-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Registering...' : 'Register Now'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopupAdModal;
