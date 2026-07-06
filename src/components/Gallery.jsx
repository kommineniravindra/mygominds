import React, { useState } from 'react';
import { FiX, FiZoomIn, FiImage } from 'react-icons/fi';
import SEO from './SEO';
import '../css/Gallery.css';

const galleryImages = [
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198453/imresizer-_MG_6359_cwcofq.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198970/IMG_3252_wjtvra.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775224537/WhatsApp_Image_2026-04-03_at_6.46.46_PM_1_sk1ocb.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199163/IMG_3258_xcopow.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775200183/IMG_3352_tunp5p.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199664/IMG_3282_uzuahd.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775222175/WhatsApp_Image_2026-04-03_at_5.21.38_PM_qc4tzj.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199586/_MG_6294_oditq4.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775199609/_MG_6346_ozpwqe.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775221695/Newyearsathya_kcmwmn.png",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220679/IMG_20231012_145725_uxkxy3.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220692/IMG_7547_dykmbb.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220671/IMG_1736_ojkvol.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220685/IMG_20240216_181708_mkxazi.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775223138/WhatsApp_Image_2026-04-03_at_6.44.47_PM_jj7bvt.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775222755/WhatsApp_Image_2026-04-03_at_6.46.46_PM_i399ai.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220675/IMG_20230730_121049_ll9qua.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220674/IMG_20230730_131857_349_wgxu1i.webp",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220671/IMG_1662_l03ipx.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220661/IMG_0492_f1dx7s.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220627/IMG20191024142726_akr2wn.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775219246/IMG_2199_tp1nx5.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220729/IMG_7936_zl8seu.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220714/IMG_7661_qypyfz.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775220667/IMG_1637_qvj93b.jpg",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1776493784/IMG_1736_vooiit.webp",
    "https://res.cloudinary.com/dslbwf2g9/image/upload/v1775198970/IMG_3252_wjtvra.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <SEO 
        title="Gallery | MyGoMinds - Training Events & Workshops"
        description="Photos from our training sessions, bootcamps, hackathons, workshops & student events at MyGoMinds Hyderabad."
        path="/gallery"
      />
      <div className="gallery-header-section">
        <div className="gallery-header-wrapper">
          <h1 className="gallery-title">Our Memories</h1>
          <p className="gallery-subtitle">A glimpse into our training sessions, events, and community moments.</p>
        </div>
        
        <div className="gallery-masonry">
          {galleryImages.slice(0, 18).map((imgUrl, index) => (
            <div className="gallery-item" key={index} onClick={() => setSelectedImage(imgUrl)}>
              <img src={imgUrl} alt={`Memory ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-view-text">View Image</span>
              </div>
            </div>
          ))}
          
          <div className="gallery-bottom-cta">
            <h2 className="gallery-cta-title">Want to see more?</h2>
            <p className="gallery-cta-desc">Join our community and be a part of our next big event!</p>
            <button className="gallery-cta-btn">Follow Us on Instagram</button>
          </div>

          {galleryImages.slice(18).map((imgUrl, index) => (
            <div className="gallery-item" key={index + 18} onClick={() => setSelectedImage(imgUrl)}>
              <img src={imgUrl} alt={`Memory ${index + 19}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-view-text">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal-overlay" onClick={closeModal}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={closeModal}>
              <FiX />
            </button>
            <img src={selectedImage} alt="Full Size Memory" className="gallery-modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
