import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
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
        </Route>
        <Route path="/pdf/:title" element={<PdfViewer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App