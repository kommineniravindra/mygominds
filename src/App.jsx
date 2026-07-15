import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import OnlineBatches from './Batch/onlinebatches'
import OfflineBatches from './Batch/offlinebatches'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import AboutUs from './components/AboutUs'
import Exam from './components/Exam/Exam'
import Alumni from './components/Alumni'
import PdfViewer from './components/PdfViewer'
import ServicesPage from './Services/ServicesPage'
import TechnicalSkillDevelopment from './ServicePages/TechnicalSkillDevelopment'
import WomenEmpowermentWorkshops from './ServicePages/WomenEmpowermentWorkshops'
import EntrepreneurshipBusinessDev from './ServicePages/EntrepreneurshipBusinessDev'
import PersonalizedCareerMentoring from './ServicePages/PersonalizedCareerMentoring'
import VisualMediaSkillDevelopment from './ServicePages/VisualMediaSkillDevelopment'
import ServiceDeskOperations from './ServicePages/ServiceDeskOperations'
import ModernToolsSkillLab from './ServicePages/ModernToolsSkillLab'
import MsmeFocusedWorkshops from './ServicePages/MsmeFocusedWorkshops'
import PlacementAssistance from './ServicePages/PlacementAssistance'
import SummerBootcamps from './ServicePages/SummerBootcamps'
import WorkshopsOrganised from './ServicePages/WorkshopsOrganised'
import MobileAppsWebDevelopment from './ServicePages/MobileAppsWebDevelopment'

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-SLBGF3GP0X', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const MainLayout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Navbar />
    <Outlet />
    <Whatsapp />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/online-batches" element={<OnlineBatches />} />
          <Route path="/offline-batches" element={<OfflineBatches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/exam" element={<Exam />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/technical-skill-development" element={<TechnicalSkillDevelopment />} />
          <Route path="/service/women-empowerment-workshops" element={<WomenEmpowermentWorkshops />} />
          <Route path="/service/entrepreneurship-business-dev" element={<EntrepreneurshipBusinessDev />} />
          <Route path="/service/personalized-career-mentoring" element={<PersonalizedCareerMentoring />} />
          <Route path="/service/visual-media-skill-development" element={<VisualMediaSkillDevelopment />} />
          <Route path="/service/service-desk-operations" element={<ServiceDeskOperations />} />
          <Route path="/service/modern-tools-skill-lab" element={<ModernToolsSkillLab />} />
          <Route path="/service/msme-focused-workshops" element={<MsmeFocusedWorkshops />} />
          <Route path="/service/placement-assistance" element={<PlacementAssistance />} />
          <Route path="/service/summer-bootcamps" element={<SummerBootcamps />} />
          <Route path="/service/workshops-organised" element={<WorkshopsOrganised />} />
          <Route path="/service/mobile-apps-web-development" element={<MobileAppsWebDevelopment />} />
        </Route>
        <Route path="/pdf/:title" element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App