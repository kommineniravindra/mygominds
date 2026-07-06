import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaIndustry, FaDigitalTachograph, FaHandshake, FaChartPie, FaStore } from 'react-icons/fa';
import { FiArrowRight, FiX } from 'react-icons/fi';
import './css/MsmeWorkshops.css';

const MsmeFocusedWorkshops = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModal = () => setSelectedImage(null);
  const galleryImages = [
    '/msme/img1.jpg',
    '/msme/img2.jpg',
    '/msme/img3.jpg',
    '/msme/img5.jpg',
    '/msme/img6.jpg',
    'https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199609/_MG_6346_ozpwqe.jpg',
    'https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220679/IMG_20231012_145725_uxkxy3.jpg',
    'https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220671/IMG_1736_ojkvol.jpg',
    'https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220661/IMG_0492_f1dx7s.jpg',
  ];

  const topics = [
    { image: 'https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198970/IMG_3252_wjtvra.jpg', title: 'National Conferences', desc: 'Participate in our national-level conferences to network, learn, and grow your business footprint.' },
    { image: "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198453/imresizer-_MG_6359_cwcofq.jpg", title: 'Green Hydrogen', desc: 'Explore opportunities in the emerging Green Hydrogen sector and how to transition to sustainable energy solutions.' },
    { image: '/msme/bootcamp.jpg', title: 'Summer Bootcamps', desc: 'Join our intensive summer bootcamps focused on developing new skills and driving excellence.' },
    { image: '/msme/innovation.jpg', title: 'Innovations', desc: 'Discover cutting-edge innovations and modern methodologies to stay ahead in a competitive landscape.' },
    { image: '/msme/thub.jpg', title: 'T-Hub Visit with NI-MSME', desc: 'Experience the innovation ecosystem at T-Hub through our exclusive visit program with NI-MSME.' },
    { image: '/msme/hacktons.jpg', title: 'Hackathons with NI-MSME', desc: 'Participate in exciting hackathons to build innovative solutions and showcase your skills.' },
  ];

  return (
    <div className="msme-page">
      <section className="msme-hero">
        <motion.div className="msme-hero-content" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="msme-badge">Ni-MSME Aligned Workshops</div>
          <h1 className="msme-title">NI-MSME Focused<br/><span>Workshops</span></h1>
          <p className="msme-desc">
            Tailored, practical workshops designed to accelerate digital transformation and sustainable growth for MSMEs. Empowering your business with the skills to compete globally.
          </p>
          <a href="/contact" className="msme-cta-btn">Join a Workshop <FiArrowRight /></a>
        </motion.div>

        <motion.div className="msme-hero-visual" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="msme-image-wrapper">
            <img src="https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198453/imresizer-_MG_6359_cwcofq.jpg" alt="MSME Business" />
          </div>
        </motion.div>
      </section>

      <section className="msme-topics-section">
        <h2 className="msme-section-title">Workshop <span>Topics</span></h2>
        <div className="msme-list">
          {topics.map((item, i) => (
            <motion.div key={i} className="msme-list-item" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="msme-image-box">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="msme-item-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="msme-gallery-section">
        <h2 className="msme-section-title">Glimpses of <span>Our Workshops</span></h2>
        <div className="msme-gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div key={i} className="msme-gallery-item" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`Workshop glimpse ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="msme-modal-overlay" 
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button className="msme-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <motion.div 
              className="msme-modal-content" 
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <img src={selectedImage} alt="Full Size Memory" className="msme-modal-image" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MsmeFocusedWorkshops;
