import React, { useState } from 'react';
import { 
  FiSearch, FiFilter, FiCalendar, FiClock, FiFileText, 
  FiMoreHorizontal, FiChevronLeft, FiChevronRight,
  FiTrendingUp, FiCode, FiEdit3, FiMonitor, FiSpeaker, FiVideo
} from 'react-icons/fi';
import { BsStopwatch } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa';
import '../Batches/onlinebatches.css';

const batchesData = [
  {
    id: 1,
    courseName: 'Full Stack Java with AI',
    level: 'Beginner to Advanced',
    facultyName: 'Mr. Rahul Verma',
    facultyRole: 'Excel Expert',
    date: '25 May 2024',
    day: 'Saturday',
    durationHours: '30 Hours',
    sessions: '10 Sessions',
    time: '7:00 PM - 9:00 PM',
    timezone: '(IST)',
    icon: <FiTrendingUp />,
    iconColor: '#f97316',
    iconBg: '#ffedd5'
  },
  {
    id: 2,
    courseName: 'Full Stack Web Development',
    level: 'Beginner to Advanced',
    facultyName: 'Mr. Sandeep Jha',
    facultyRole: 'Full Stack Developer',
    date: '28 May 2024',
    day: 'Tuesday',
    durationHours: '60 Hours',
    sessions: '20 Sessions',
    time: '8:00 PM - 10:00 PM',
    timezone: '(IST)',
    icon: <FiCode />,
    iconColor: '#3b82f6',
    iconBg: '#dbeafe'
  },
  {
    id: 3,
    courseName: 'Full Stack .NET with AI',
    level: 'Beginner to Advanced',
    facultyName: 'Ms. Priya Sharma',
    facultyRole: 'Tally Expert',
    date: '30 May 2024',
    day: 'Thursday',
    durationHours: '20 Hours',
    sessions: '10 Sessions',
    time: '6:00 PM - 8:00 PM',
    timezone: '(IST)',
    icon: <FiEdit3 />,
    iconColor: '#22c55e',
    iconBg: '#dcfce7'
  },
  {
    id: 4,
    courseName: 'Full Stack Python with AI',
    level: 'Beginner',
    facultyName: 'Mr. Amit Malhotra',
    facultyRole: 'Creative Designer',
    date: '01 June 2024',
    day: 'Saturday',
    durationHours: '15 Hours',
    sessions: '5 Sessions',
    time: '5:00 PM - 7:00 PM',
    timezone: '(IST)',
    icon: <FiMonitor />,
    iconColor: '#a855f7',
    iconBg: '#f3e8ff'
  },
  {
    id: 5,
    courseName: 'Real Time Project',
    level: 'Beginner to Advanced',
    facultyName: 'Ms. Neha Gupta',
    facultyRole: 'Digital Marketing Expert',
    date: '03 June 2024',
    day: 'Monday',
    durationHours: '40 Hours',
    sessions: '15 Sessions',
    time: '7:30 PM - 9:30 PM',
    timezone: '(IST)',
    icon: <FiSpeaker />,
    iconColor: '#eab308',
    iconBg: '#fef9c3'
  }
];

const OnlineBatches = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const availableDates = [...new Set(batchesData.map(b => b.date))];

  const filteredBatches = batchesData.filter((batch) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      batch.courseName.toLowerCase().includes(searchLower) ||
      batch.facultyName.toLowerCase().includes(searchLower) ||
      batch.facultyRole.toLowerCase().includes(searchLower);

    const matchesDate = filterDate === '' || batch.date === filterDate;

    return matchesSearch && matchesDate;
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
            <div className="ob-th col-syllabus">Syllabus</div>
            <div className="ob-th col-action">Action</div>
          </div>

          {/* Table Body */}
          <div className="ob-table-body">
            {filteredBatches.length > 0 ? (
              filteredBatches.map((batch) => (
              <div className="ob-table-row" key={batch.id}>
                {/* Course Name */}
                <div className="ob-td col-course">
                  <div className="ob-course-icon-wrapper" style={{ backgroundColor: batch.iconBg, color: batch.iconColor }}>
                    {batch.icon}
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
                    <span className="ob-faculty-role">{batch.facultyRole}</span>
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
                    <span className="ob-primary-text">{batch.durationHours}</span>
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
                  <button className="ob-syllabus-btn">
                    <FiFileText /> View Syllabus
                  </button>
                </div>

                {/* Action */}
                <div className="ob-td col-action">
                  <button className="ob-zoom-btn">
                    <FiVideo /> Zoom
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="ob-no-results">
              No batches found matching your criteria.
            </div>
          )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default OnlineBatches;
