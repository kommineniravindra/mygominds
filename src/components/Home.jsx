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
import OurDivisions from '../UI/OurDivisions';
import ProposedServices from '../UI/ProposedServices';
import Clients from '../UI/Clients';
import Softwarelanding from '../Services/Softwarelanding';
import TechnologyPartners from '../Services/TechnologyPartners';
import DigitalSolutions from '../Services/DigitalSolutions';
import WhyChooseUs from '../Services/WhyChooseUs';

const Home = () => {
  return (
    <div className="home-page">

      <Carousel />
      <ProcessFlow />
      {/* <Catalog/> */}
      <OurDivisions />
      {/* <ProposedServices /> */}
      <Clients />
      <Features />
      <PopupAdModal />


      {/* <Landing /> */}
      {/* <StudentPortal /> */}
      {/* <GoogleReviews /> */}
      {/* <Roadmap/> */}
      <Certificate />


    </div>
  );
};

export default Home; 
