import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import '../UIcss/Carousel.css';

const Carousel = ({ images = ['/banners/bootcamp.png', '/banners/hackton.png', '/banners/industry.png', '/banners/intern.png', '/banners/projects.png'], autoPlay = true, autoPlayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because 0 is the cloned last slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone first and last images for the infinite loop effect
  const extendedImages = images.length > 1 
    ? [images[images.length - 1], ...images, images[0]] 
    : images;

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, autoPlayInterval, images.length]);

  const handleNext = () => {
    if (currentIndex >= extendedImages.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1); // +1 because the first element is a clone
  };

  // When the CSS transition finishes, quietly jump back if we're on a cloned slide
  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(images.length);
    } else if (currentIndex === extendedImages.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  if (!images || images.length === 0) {
    return <div className="mg-carousel-empty">No images to display</div>;
  }

  return (
    <motion.div 
      className="mg-carousel-container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="mg-carousel-track" 
        style={{ 
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedImages.map((imgSrc, index) => (
          <div className="mg-carousel-slide" key={index}>
            <img src={imgSrc} alt={`Slide ${index}`} className="mg-carousel-image" />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button className="mg-carousel-btn prev" onClick={handlePrev} aria-label="Previous Slide">
            <FiChevronLeft />
          </button>
          <button className="mg-carousel-btn next" onClick={handleNext} aria-label="Next Slide">
            <FiChevronRight />
          </button>

          <div className="mg-carousel-indicators">
            {images.map((_, index) => {
              // Calculate real active index for the dots
              let activeIndex = currentIndex - 1;
              if (activeIndex === -1) activeIndex = images.length - 1;
              if (activeIndex === images.length) activeIndex = 0;

              return (
                <button
                  key={index}
                  className={`mg-carousel-dot ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Carousel;
