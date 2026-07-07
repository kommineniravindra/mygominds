import React, { useState, useEffect, useRef } from 'react';
import { FiX, FiPhone, FiCheckCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api, { getImageUrl } from '../api';
import '../css/PopupAdModal.css';

const PopupAdModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [adConfigs, setAdConfigs] = useState([]);
  const [isConfigLoaded, setIsConfigLoaded] = useState(false);
  const [mobileNumbers, setMobileNumbers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState({});
  const [successes, setSuccesses] = useState({});
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const fetchSettingsAndShow = async () => {
      try {
        const response = await api.get('/api/popup-settings/active');
        if (response.status === 200) {
          let settings = [];
          if (Array.isArray(response.data)) {
            settings = response.data;
          } else if (response.data && response.data.isActive) {
            settings = [response.data];
          }
          
          if (settings.length > 0) {
            setAdConfigs(settings);
            setIsConfigLoaded(true);

            // If any settings exist, show the popup after a 3-second delay
            // (Temporarily disabled the hasSeenPopup check so you can test it easily)
            // const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
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

  // Auto-scroll logic
  useEffect(() => {
    if (!isOpen || adConfigs.length <= 1 || !isAutoScrolling) return;

    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If we reached the end, rewind to start, otherwise scroll right by one slide
        if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(intervalId);
  }, [isOpen, adConfigs.length, isAutoScrolling]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e, ad) => {
    e.preventDefault();
    const currentNumber = mobileNumbers[ad._id] || '';
    
    if (!currentNumber || currentNumber.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    setIsSubmitting(prev => ({ ...prev, [ad._id]: true }));
    try {
      const response = await api.post('/api/popup-leads', {
        title: ad.adTitle || "Special Offer",
        mobileNumber: currentNumber
      });

      if (response.status !== 200 && response.status !== 201) {
        throw new Error('Failed to register');
      }

      setSuccesses(prev => ({ ...prev, [ad._id]: true }));
      
      // Only close if this is the last one or they want to close it manually
      setTimeout(() => {
        if (adConfigs.length === 1) setIsOpen(false);
      }, 3000); 
      
    } catch (error) {
      console.error('Error submitting popup lead:', error);
      alert('Failed to register. Please try again.');
    } finally {
      setIsSubmitting(prev => ({ ...prev, [ad._id]: false }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-modal-overlay">
      <div className="popup-modal-content">
        <button className="popup-close-btn" onClick={handleClose}>
          <FiX />
        </button>
        <div 
          className="popup-carousel-container"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {adConfigs.length > 1 && (
            <button className="carousel-nav-btn prev-btn" onClick={scrollLeft}>
              <FiChevronLeft />
            </button>
          )}

          <div className="popup-carousel" ref={carouselRef}>
            {adConfigs.map((ad, index) => (
              <div key={ad._id || index} className="popup-carousel-item">
                <div className="popup-image-container">
                  <img 
                    src={ad.adImage ? getImageUrl(ad.adImage) : "/aboutus.png"} 
                    alt="Special Offer" 
                    className="popup-image" 
                  />
                </div>
                
                <div className="popup-body">
                  {successes[ad._id] ? (
                    <div className="popup-success-msg">
                      <FiCheckCircle size={28} />
                      <span>Registration Successful!</span>
                    </div>
                  ) : (
                    <>
                      <h2 className="popup-title">{ad.adTitle || "Special Offer"}</h2>
                      <p className="popup-subtitle">{ad.adSubtitle || ""}</p>
                      
                      <form onSubmit={(e) => handleSubmit(e, ad)} className="popup-form">
                        <div className="popup-input-group">
                          <input
                            type="tel"
                            className="popup-input"
                            placeholder="Enter your mobile number"
                            value={mobileNumbers[ad._id] || ''}
                            onChange={(e) => setMobileNumbers(prev => ({ ...prev, [ad._id]: e.target.value }))}
                            required
                          />
                        </div>
                        
                        <button 
                          type="submit" 
                          className="popup-submit-btn"
                          disabled={isSubmitting[ad._id]}
                        >
                          {isSubmitting[ad._id] ? 'Registering...' : 'Register Now'}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {adConfigs.length > 1 && (
            <button className="carousel-nav-btn next-btn" onClick={scrollRight}>
              <FiChevronRight />
            </button>
          )}
        </div>
        
        {adConfigs.length > 1 && (
          <div className="popup-carousel-indicators">
            <span className="indicator-text">Swipe for more</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupAdModal;
