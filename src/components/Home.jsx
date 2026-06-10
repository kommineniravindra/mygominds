import React from 'react';
import Landing from '../UI/Landing';
import Catalog from '../UI/Catalog';
import Carousel from '../UI/Carousel';
import Roadmap from '../UI/Roadmap';
import StudentPortal from '../UI/StudentPortal';
import Certificate from '../UI/Certificate';
import PopupAdModal from './PopupAdModal';

const Home = () => {
  return (
    <div className="home-page">
      <Carousel />
      {/* <Landing /> */}
      <Catalog />
      <StudentPortal />
      <Roadmap/>
      <Certificate />
      <PopupAdModal />
      {/* Additional homepage sections can be added here in the future */}
    </div>
  );
};

export default Home;
