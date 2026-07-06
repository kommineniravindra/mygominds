import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaExternalLinkAlt } from 'react-icons/fa';
import api from '../api';
import '../UIcss/GoogleReviews.css';

const GoogleReviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [overallRating, setOverallRating] = useState(4.7);
  const [totalReviews, setTotalReviews] = useState(130);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get('/api/google-reviews');
        
        if (response.status === 200 && response.data.success) {
          const data = response.data;
          setReviewsData(data.reviews);
          setOverallRating(data.overallRating);
          setTotalReviews(data.totalReviews);
        } else {
          setError(response.data?.message || 'Failed to fetch reviews');
          // Fallback data if API fails or keys aren't set
          useFallbackData();
        }
      } catch (err) {
        console.error('Error fetching Google Reviews:', err);
        setError(err.message);
        useFallbackData();
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const useFallbackData = () => {
    setReviewsData([
      {
        id: 1,
        name: "Sravani",
        timeAgo: "2 months ago",
        content: "The Java Fullstack course completely changed my career trajectory. The hands-on projects and expert guidance helped me land a job. Excellent teaching and environment.",
        rating: 5,
        avatarColor: "#ea4335"
      },
      {
        id: 2,
        name: "Rakesh Kumar",
        timeAgo: "3 months ago",
        content: "MyGoMinds offers the most comprehensive React curriculum I've seen. The instructors break down complex concepts into easily understandable modules. Highly recommended for beginners.",
        rating: 5,
        avatarColor: "#34a853"
      },
      {
        id: 3,
        name: "Anjali Reddy",
        timeAgo: "5 months ago",
        content: "I started with zero coding experience. The bootcamp structure was intense but incredibly rewarding. I now feel confident building full applications from scratch. Great placement support.",
        rating: 4,
        avatarColor: "#fbbc04"
      }
    ]);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} style={{ opacity: 0.3 }} />);
    }
    return stars;
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '100px 20px' }}>Loading Google Reviews...</div>;
  }

  return (
    <section className="mg-google-reviews-section">
      <div className="mg-google-reviews-container">
        <motion.div 
          className="mg-google-reviews-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google" 
              className="mg-google-logo-large" 
            />
            Google Reviews
          </h2>
          
          <div className="mg-overall-rating">
            <span className="mg-overall-score">{overallRating}</span>
            <div>
              <div className="mg-overall-stars">
                {renderStars(overallRating)}
              </div>
              <span className="mg-review-count">Based on {totalReviews} reviews</span>
            </div>
          </div>
          
          {error && (
            <div style={{ color: '#ea4335', marginTop: '10px', fontSize: '0.9rem' }}>
              Note: Using fallback reviews because Google API integration is pending API Key setup.
            </div>
          )}
        </motion.div>

        <div className="mg-reviews-grid">
          {reviewsData.map((review, index) => (
            <motion.div 
              key={review.id}
              className="mg-review-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mg-review-author-header">
                <div className="mg-author-info">
                  {review.profilePhoto ? (
                    <img src={review.profilePhoto} alt={review.name} className="mg-author-avatar" />
                  ) : (
                    <div className="mg-author-avatar" style={{ backgroundColor: review.avatarColor || '#3b82f6' }}>
                      {review.name ? review.name.charAt(0).toUpperCase() : 'A'}
                    </div>
                  )}
                  <div className="mg-author-details">
                    <h4>{review.name}</h4>
                    <p>{review.timeAgo}</p>
                  </div>
                </div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                  alt="Google" 
                  className="mg-google-icon-small" 
                />
              </div>
              
              <div className="mg-review-stars">
                {[...Array(5)].map((star, i) => (
                  <FaStar key={i} color={i < review.rating ? "#fbbc04" : "#e2e8f0"} />
                ))}
              </div>
              
              <p className="mg-review-content">{review.content}</p>
              
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mg-review-footer">
                Read full review <FaExternalLinkAlt size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
