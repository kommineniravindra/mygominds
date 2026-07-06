import React, { useState, useEffect } from 'react';
import api from '../api';
import { 
  FiSearch, FiFilter, FiCalendar, FiClock, FiFileText, 
  FiMoreHorizontal, FiChevronLeft, FiChevronRight,
  FiTrendingUp, FiCode, FiEdit3, FiMonitor, FiSpeaker, FiVideo, FiX
} from 'react-icons/fi';
import { BsStopwatch } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import '../Batchcss/onlinebatches.css';

const iconMap = [
  { icon: <FiTrendingUp />, iconColor: '#f97316', iconBg: '#ffedd5' },
  { icon: <FiCode />, iconColor: '#3b82f6', iconBg: '#dbeafe' },
  { icon: <FiEdit3 />, iconColor: '#22c55e', iconBg: '#dcfce7' },
  { icon: <FiMonitor />, iconColor: '#a855f7', iconBg: '#f3e8ff' },
  { icon: <FiSpeaker />, iconColor: '#eab308', iconBg: '#fef9c3' }
];

const getBatchIcon = (index) => iconMap[index % iconMap.length];

const OnlineBatches = () => {
  const [batchesData, setBatchesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [selectedBatchForZoom, setSelectedBatchForZoom] = useState(null);
  const [zoomFormData, setZoomFormData] = useState({ name: '', mobile: '', email: '' });
  const [isZoomSubmitting, setIsZoomSubmitting] = useState(false);

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await api.get('/api/online-batches');
        if (response.status === 200) {
          setBatchesData(response.data);
        }
      } catch (error) {
        console.error('Error fetching online batches:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBatches();
  }, []);

  const handleZoomClick = (batch) => {
    if (!batch.actionLink) return;
    setSelectedBatchForZoom(batch);
    setIsZoomModalOpen(true);
  };

  const handleZoomFormSubmit = async (e) => {
    e.preventDefault();
    setIsZoomSubmitting(true);
    try {
      const response = await api.post('/api/zoom-leads', {
        name: zoomFormData.name,
        mobile: zoomFormData.mobile,
        email: zoomFormData.email,
        courseName: selectedBatchForZoom.courseName,
        batchDate: selectedBatchForZoom.date
      });

      if (response.status === 200 || response.status === 201) {
        window.open(selectedBatchForZoom.actionLink, '_blank');
        setIsZoomModalOpen(false);
        setZoomFormData({ name: '', mobile: '', email: '' });
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting zoom form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsZoomSubmitting(false);
    }
  };

  const availableDates = [...new Set(batchesData.map(b => b.date))];

  const filteredBatches = batchesData.filter((batch) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      batch.courseName.toLowerCase().includes(searchLower) ||
      batch.facultyName.toLowerCase().includes(searchLower) ||
      (batch.experience && batch.experience.toLowerCase().includes(searchLower));

    const matchesDate = filterDate === '' || batch.date === filterDate;

    return matchesSearch && matchesDate;
  });

  const sortedBatches = [...filteredBatches].sort((a, b) => {
    const parseDate = (dateStr) => {
      if (!dateStr) return Number.MAX_SAFE_INTEGER; // Put empty dates at the end
      const parts = dateStr.includes('-') ? dateStr.split('-') : dateStr.split('/');
      if (parts.length === 3) {
        const [day, month, year] = parts;
        return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
      }
      const time = new Date(dateStr).getTime();
      return isNaN(time) ? Number.MAX_SAFE_INTEGER : time;
    };
    
    const dateDiff = parseDate(a.date) - parseDate(b.date);
    if (dateDiff !== 0) return dateDiff;

    // Secondary sort by time if dates are identical
    const parseTime = (timeStr) => {
      if (!timeStr) return 0;
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return 0;
      let hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const ampm = match[3].toUpperCase();
      
      if (ampm === 'PM' && hours < 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;
      
      return hours * 60 + minutes; // Returns total minutes from midnight
    };

    return parseTime(a.time) - parseTime(b.time);
  });

  return (
    <div className="online-batches-page">
      {/* Header Section */}
      <div className="ob-header-wrapper">
        <div className="ob-header-dots"></div>
        <div className="ob-header-dots-right"></div>
        <div className="ob-header-content">
          <div className="ob-title-section">
            <h1 className="ob-title">
              Online Training <span className="text-blue">Batches</span>
            </h1>
            <p className="ob-subtitle">Manage and view all upcoming online training batches</p>
          </div>
          <div className="ob-actions">
            <div className="ob-search-box">
              <FiSearch className="ob-search-icon" />
              <input 
                type="text" 
                placeholder="Search batches..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ob-search-input"
              />
            </div>
            <div className="ob-date-dropdown-container">
              <button 
                className="ob-filter-btn" 
                onClick={() => setShowDatePicker(!showDatePicker)}
              >
                <FiFilter /> {filterDate ? filterDate : 'Filter by Date'}
              </button>
              
              {showDatePicker && (
                <div className="ob-date-dropdown">
                  <div 
                    className={`ob-date-option ${filterDate === '' ? 'active' : ''}`}
                    onClick={() => { setFilterDate(''); setShowDatePicker(false); }}
                  >
                    All Dates
                  </div>
                  {availableDates.map(date => (
                    <div 
                      key={date}
                      className={`ob-date-option ${filterDate === date ? 'active' : ''}`}
                      onClick={() => { setFilterDate(date); setShowDatePicker(false); }}
                    >
                      {date}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="ob-table-container">
        <div className="ob-table">
          {/* Table Header */}
          <div className="ob-table-header">
            <div className="ob-th col-course">Course Name</div>
            <div className="ob-th col-faculty">Faculty</div>
            <div className="ob-th col-date">Date</div>
            <div className="ob-th col-duration">Duration</div>
            <div className="ob-th col-timings">Timings</div>
            <div className="ob-th col-action">Action</div>
          </div>

          {/* Table Body */}
          <div className="ob-table-body">
            {loading ? (
              <div className="ob-no-results">Loading batches...</div>
            ) : sortedBatches.length > 0 ? (
              sortedBatches.map((batch, index) => {
                const batchIcon = getBatchIcon(index);
                return (
              <div className="ob-table-row" key={batch._id || index}>
                {/* Course Name */}
                <div className="ob-td col-course">
                  <div className="ob-course-icon-wrapper" style={{ backgroundColor: batchIcon.iconBg, color: batchIcon.iconColor }}>
                    {batchIcon.icon}
                  </div>
                  <div className="ob-course-info">
                    <h3 className="ob-course-name">{batch.courseName}</h3>
                  </div>
                </div>

                {/* Faculty */}
                <div className="ob-td col-faculty">
                  <div className="ob-faculty-icon">
                    <FaUserTie />
                  </div>
                  <div className="ob-faculty-info">
                    <span className="ob-faculty-name">{batch.facultyName}</span>
                    <span className="ob-faculty-role">{batch.experience}</span>
                  </div>
                </div>

                {/* Date */}
                <div className="ob-td col-date">
                  <div className="ob-date-icon-box">
                    <FiCalendar />
                  </div>
                  <div className="ob-cell-info">
                    <span className="ob-primary-text">{batch.date}</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="ob-td col-duration">
                  <div className="ob-time-icon-box">
                    <BsStopwatch />
                  </div>
                  <div className="ob-cell-info">
                    <span className="ob-primary-text">{batch.durationMonths}</span>
                  </div>
                </div>

                {/* Timings */}
                <div className="ob-td col-timings">
                  <div className="ob-timings-icon-box">
                    <FiClock />
                  </div>
                  <div className="ob-cell-info">
                    <span className="ob-primary-text">{batch.time}</span>
                  </div>
                </div>

                {/* Action */}
                <div className="ob-td col-action">
                  {batch.actionLink ? (
                    <button onClick={() => handleZoomClick(batch)} className="ob-zoom-btn" style={{cursor: 'pointer'}}>
                      <FiVideo /> Zoom
                    </button>
                  ) : (
                    <button className="ob-zoom-btn" disabled style={{opacity: 0.5, cursor: 'not-allowed'}}>
                      <FiVideo /> Zoom
                    </button>
                  )}
                </div>
              </div>
            );
          })
          ) : (
            <div className="ob-no-results">
              No batches found matching your criteria.
            </div>
          )}
          </div>
        </div>

      </div>

      {/* Zoom Lead Form Modal */}
      {isZoomModalOpen && (
        <div className="ob-zoom-modal-overlay">
          <div className="ob-zoom-modal-content">
            <button className="ob-zoom-modal-close" onClick={() => setIsZoomModalOpen(false)}>
              <FiX />
            </button>
            <div className="ob-zoom-modal-header">
              <h2>Join Zoom Session</h2>
              <p>Please enter your details to access the meeting link for <strong>{selectedBatchForZoom?.courseName}</strong>.</p>
            </div>
            <form className="ob-zoom-form" onSubmit={handleZoomFormSubmit}>
              <div className="ob-form-group">
                <label>Course Name</label>
                <input 
                  type="text" 
                  readOnly 
                  value={selectedBatchForZoom?.courseName || ''} 
                  style={{ backgroundColor: '#f8fafc', color: '#64748b', cursor: 'not-allowed' }}
                />
              </div>
              <div className="ob-form-group">
                <label>Name <span className="ob-required">*</span></label>
                <input 
                  type="text" 
                  required 
                  value={zoomFormData.name} 
                  onChange={(e) => setZoomFormData({...zoomFormData, name: e.target.value})} 
                  placeholder="Enter your full name" 
                />
              </div>
              <div className="ob-form-group">
                <label>Mobile Number <span className="ob-required">*</span></label>
                <input 
                  type="tel" 
                  required 
                  value={zoomFormData.mobile} 
                  onChange={(e) => setZoomFormData({...zoomFormData, mobile: e.target.value})} 
                  placeholder="Enter your mobile number" 
                />
              </div>
              <div className="ob-form-group">
                <label>Email Address <span className="ob-required">*</span></label>
                <input 
                  type="email" 
                  required 
                  value={zoomFormData.email} 
                  onChange={(e) => setZoomFormData({...zoomFormData, email: e.target.value})} 
                  placeholder="Enter your email address" 
                />
              </div>
              <button type="submit" className="ob-zoom-submit-btn" disabled={isZoomSubmitting}>
                {isZoomSubmitting ? 'Joining...' : 'Join Meeting'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default OnlineBatches;
