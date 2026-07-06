import React from 'react';
import Softwarelanding from './Softwarelanding';
import DigitalSolutions from './DigitalSolutions';
import WhyChooseUs from './WhyChooseUs';
import TechnologyPartners from './TechnologyPartners';
import ServiceOfferings from './ServiceOfferings';
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
      <Softwarelanding />
      <ServiceOfferings />
      <TechnologyPartners />
      <DigitalSolutions />
      <WhyChooseUs />
    </div>
  );
};

export default ServicesPage;
