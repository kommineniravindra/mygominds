import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import '../css/courseLeadModal.css';

const CourseLeadModal = ({ isOpen, onClose, course }) => {
  const [mobile, setMobile] = useState(() => localStorage.getItem('userMobileNumber') || '');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (!isOpen || !course) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      setError('Please enter a valid mobile number.');
      return;
    }
    
    try {
      // Save to database
      const response = await api.post('/api/course-leads', {
        courseName: course.title,
        mobileNumber: mobile
      });

      if (response.status !== 200 && response.status !== 201) {
        console.error('Failed to save lead to database');
      }
    } catch (err) {
      console.error('API Error:', err);
    }

    // Save to localStorage globally so they don't have to enter it again for other courses
    localStorage.setItem('userMobileNumber', mobile);
    
    const unlockedCourses = JSON.parse(localStorage.getItem('unlockedCourses') || '[]');
    if (!unlockedCourses.includes(course.title)) {
      unlockedCourses.push(course.title);
      localStorage.setItem('unlockedCourses', JSON.stringify(unlockedCourses));
    }
    
    // Close modal
    onClose();
    
    // Navigate to course
    navigate(`/course/${course.slug}`);
  };

  return (
    <div className="lead-modal-overlay">
      <div className="lead-modal-content">
        <button className="lead-modal-close" onClick={onClose}>&times;</button>
        <div className="lead-modal-header">
          <h2>Unlock Course Details</h2>
          <p>You are about to view <strong>{course.title}</strong></p>
        </div>
        <form onSubmit={handleSubmit} className="lead-modal-form">
          <div className="lead-form-group">
            <label htmlFor="courseName">Course</label>
            <input type="text" id="courseName" value={course.title} readOnly disabled />
          </div>
          <div className="lead-form-group">
            <label htmlFor="mobile">Mobile Number <span className="required">*</span></label>
            <input 
              type="tel" 
              id="mobile" 
              placeholder="Enter your mobile number" 
              value={mobile} 
              onChange={(e) => {
                setMobile(e.target.value);
                setError('');
              }}
            />
            {error && <span className="error-text">{error}</span>}
          </div>
          <button type="submit" className="lead-submit-btn">Continue to Course</button>
        </form>
      </div>
    </div>
  );
};

export default CourseLeadModal;
