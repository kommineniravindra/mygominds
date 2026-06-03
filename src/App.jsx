import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import OnlineBatches from './Batchcss/onlinebatches'
import OfflineBatches from './Batchcss/offlinebatches'
import Gallery from './components/Gallery'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import AboutUs from './components/AboutUs'
import Exam from './components/Exam/Exam'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/online-batches" element={<OnlineBatches />} />
          <Route path="/offline-batches" element={<OfflineBatches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/exam" element={<Exam />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App