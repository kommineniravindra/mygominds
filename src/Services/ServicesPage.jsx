import React from 'react';
import Softwarelanding from './Softwarelanding';
import DigitalSolutions from './DigitalSolutions';
import WhyChooseUs from './WhyChooseUs';
import TechnologyPartners from './TechnologyPartners';
import Carousel from '../UI/Carousel';
import Catalog from '../UI/Catalog';
import ProcessFlow from '../UI/ProcessFlow';
import StudentPortal from '../UI/StudentPortal';
import Features from '../UI/Features';
import Certificate from '../UI/Certificate';
import PopupAdModal from '../components/PopupAdModal';

const ServicesPage = () => {
  return (
    <div className="services-page-wrapper">
      {/* <Softwarelanding />
      <TechnologyPartners />
      <DigitalSolutions />
      <WhyChooseUs /> */}
      <Carousel />
      {/* <Landing /> */}
      <Catalog/>
      {/* <ITServices /> */}
      <ProcessFlow />
      <StudentPortal />
      {/* <Roadmap/> */}
      <Features />
      {/* <GoogleReviews /> */}
      <Certificate />
      <PopupAdModal />
      {/* Additional homepage sections can be added here in the future */}
    </div>
  );
};

export default ServicesPage;
