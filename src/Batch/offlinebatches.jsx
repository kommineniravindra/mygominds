import React, { useState, useEffect } from 'react';
import { 
  FiSearch, FiFilter, FiCalendar, FiClock, FiFileText, 
  FiMoreHorizontal, FiChevronLeft, FiChevronRight,
  FiTrendingUp, FiCode, FiEdit3, FiMonitor, FiSpeaker, FiMapPin,
  FiVideo,
  FiPlay
} from 'react-icons/fi';
import { BsStopwatch } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import '../Batchcss/offlinebatches.css';
import DemoModal from '../components/DemoModal';

const iconMap = [
  { icon: <FiTrendingUp />, iconColor: '#f97316', iconBg: '#ffedd5' },
  { icon: <FiCode />, iconColor: '#3b82f6', iconBg: '#dbeafe' },
  { icon: <FiEdit3 />, iconColor: '#22c55e', iconBg: '#dcfce7' },
  { icon: <FiMonitor />, iconColor: '#a855f7', iconBg: '#f3e8ff' },
  { icon: <FiSpeaker />, iconColor: '#eab308', iconBg: '#fef9c3' },
  { icon: <FiMapPin />, iconColor: '#ef4444', iconBg: '#fee2e2' }
];

const getBatchIcon = (index) => iconMap[index % iconMap.length];

const OfflineBatches = () => {
  const [batchesData, setBatchesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedDemoBatch, setSelectedDemoBatch] = useState(null);

  const openDemoModal = (batch) => {
    // Need to fill the form every time
    setSelectedDemoBatch(batch);
    setIsDemoModalOpen(true);
  };

  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/offline-batches');
        if (response.ok) {
          const data = await response.json();
          setBatchesData(data);
        }
      } catch (error) {
        console.error('Error fetching offline batches:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBatches();
  }, []);

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

  return (
    <div className="offline-batches-page">
      {/* Header Section */}
      <div className="ob-header-wrapper">
        <div className="ob-header-dots"></div>
        <div className="ob-header-dots-right"></div>
        <div className="ob-header-content">
          <div className="ob-title-section">
            <h1 className="ob-title">
              Offline Training <span className="text-blue">Batches</span>
            </h1>
            <p className="ob-subtitle">Manage and view all upcoming offline training batches</p>
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
            <div className="ob-th col-syllabus">Syllabus</div>
            <div className="ob-th col-action">Action</div>
          </div>

          {/* Table Body */}
          <div className="ob-table-body">
            {loading ? (
              <div className="ob-no-results">Loading batches...</div>
            ) : filteredBatches.length > 0 ? (
              filteredBatches.map((batch, index) => {
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

                {/* Syllabus */}
                <div className="ob-td col-syllabus">
                  {batch.syllabusFile ? (
                    <a href={`http://localhost:3000/${batch.syllabusFile}`} target="_blank" rel="noreferrer" className="ob-syllabus-btn" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'}}>
                      <FiFileText style={{marginRight: '5px'}}/> View
                    </a>
                  ) : (
                    <button className="ob-syllabus-btn" style={{opacity: 0.5, cursor: 'not-allowed'}} disabled>
                      <FiFileText style={{marginRight: '5px'}}/> View
                    </button>
                  )}
                </div>

                {/* Action */}
                <div className="ob-td col-action">
                  <button className="ob-zoom-btn" onClick={() => openDemoModal(batch)}>
                    <FiPlay /> Demo
                  </button>
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
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        courseName={selectedDemoBatch?.courseName} 
        batchType="Offline"
        actionLink={selectedDemoBatch?.actionLink}
      />
    </div>
  );
};

export default OfflineBatches;
