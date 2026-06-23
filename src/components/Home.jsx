import React from 'react';
import Landing from '../UI/Landing';
import Catalog from '../UI/Catalog';
import Carousel from '../UI/Carousel';
import Roadmap from '../UI/Roadmap';
import StudentPortal from '../UI/StudentPortal';
import Certificate from '../UI/Certificate';
import Features from '../UI/Features';
import GoogleReviews from '../UI/GoogleReviews';
import PopupAdModal from './PopupAdModal';
import ProcessFlow from '../UI/ProcessFlow';

const Home = () => {
  return (
    <div className="home-page">
      <Carousel />
      {/* <Landing /> */}
      <Catalog />
      <ProcessFlow />
      <StudentPortal />
      <Roadmap/>
      <Features />
      {/* <GoogleReviews /> */}
      <Certificate />
      <PopupAdModal />
      {/* Additional homepage sections can be added here in the future */}
    </div>
  );
};

export default Home;
