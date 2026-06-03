import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiCheckCircle, FiCheck } from "react-icons/fi";
import { FaCode } from "react-icons/fa";
import "../../css/Exam.css";
import examCategories from "../../JSON/examCategories.json";
import examRoadmaps from "../../JSON/examRoadmaps.json";
import examTestsData from "../../JSON/examTestsData.json";

const Exam = () => {
  const [view, setView] = useState("categories"); // 'categories', 'roadmap', 'topics', 'tests'
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedRoadmapSection, setSelectedRoadmapSection] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleCourseClick = (course) => {
    const routeKey = course.route.replace("/", "").replace("-", "");
    if (examRoadmaps[routeKey] && examRoadmaps[routeKey].sections.length > 0) {
      setSelectedCourse({ ...course, key: routeKey });
      setView("roadmap");
    } else {
      alert("Roadmap data for " + course.title + " is not yet available in JSON.");
    }
  };

  const handleSectionTopicsClick = (section) => {
    setSelectedRoadmapSection(section);
    setView("topics");
  };

  const handleSectionClick = (section) => {
    const testKey = section.route.replace("/", "").replace("-", "").toLowerCase();
    let foundKey = Object.keys(examTestsData).find(k => k.replace("-", "").toLowerCase() === testKey.replace("page", ""));
    
    if (!foundKey) {
        if (testKey.includes('angular')) foundKey = 'angular-topics';
        else if (testKey.includes('html')) foundKey = 'html-topics';
        else if (testKey.includes('js')) foundKey = 'js-topics';
        else if (testKey.includes('dotnet')) foundKey = 'dnexamone';
        else if (testKey.includes('java')) foundKey = 'javaexamone';
        else if (testKey.includes('python')) foundKey = 'pythonexamone';
        else if (testKey.includes('aws')) foundKey = 'awsexamone';
        else if (testKey.includes('powerbi')) foundKey = 'powerbiexamone';
    }

    if (foundKey && examTestsData[foundKey]) {
      setSelectedTopic({ ...section, testKey: foundKey });
      setView("tests");
    } else {
      alert("Test data for " + section.title + " is not yet available in JSON.");
    }
  };

  const handleItemClick = (testKey, title) => {
    if (examTestsData[testKey]) {
      setSelectedTopic({ title: title, testKey: testKey });
      setView("tests");
    } else {
      alert("Test data for " + title + " is not yet available in JSON.");
    }
  };

  const goBack = () => {
    if (view === "tests") {
      setView(selectedRoadmapSection && selectedRoadmapSection.subroutes ? "topics" : "roadmap");
    } else if (view === "topics") {
      setView("roadmap");
    } else if (view === "roadmap") {
      setView("categories");
    }
  };

  return (
    <div className="mg-portal-wrapper">
      <div className="mg-portal-content">
        
        {/* VIEW: CATEGORIES */}
        {view === "categories" && (
          <div className="mg-fade-in">
            {examCategories.categories.map((category, idx) => (
              <div key={idx} className="mg-category-block">
                <h2 className="mg-category-title">{category.title}</h2>
                <div className="mg-grid-layout">
                  {category.courses.map((course, courseIdx) => (
                    <div key={courseIdx} className="mg-card">
                      <div className="mg-card-media">
                        <img src={course.image} alt={course.title} className="mg-card-img" />
                        <h3 className="mg-card-overlay-title">{course.title}</h3>
                      </div>
                      <div className="mg-card-body">
                        <p className="mg-card-text">{course.desc}</p>
                        <button onClick={() => handleCourseClick(course)} className="mg-btn-action">
                          View Roadmap
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW: ROADMAP */}
        {view === "roadmap" && selectedCourse && (
          <div className="mg-fade-in">
            <div className="mg-view-header">
              <button onClick={goBack} className="mg-btn-back">
                <span className="mg-icon-back"><FiArrowLeft /></span> Back
              </button>
              <h2 className="mg-category-title mg-title-inline">{selectedCourse.title} Roadmap</h2>
            </div>
            <div className="mg-roadmap-layout">
              {examRoadmaps[selectedCourse.key].sections.map((section, idx) => (
                <div key={idx} className="mg-card mg-roadmap-card">
                  <div className="mg-roadmap-header">
                    <div className="mg-roadmap-icon">
                      <FaCode />
                    </div>
                    <h3 className="mg-roadmap-title">{section.title}</h3>
                  </div>
                  <ul className="mg-roadmap-list">
                    {section.items.map((item, i) => (
                      <li key={i} className="mg-roadmap-item">
                        <span className="mg-roadmap-text">
                          <FiCheck className="mg-roadmap-check" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mg-roadmap-footer">
                    {section.subroutes && (
                      <button onClick={() => handleSectionTopicsClick(section)} className="mg-btn-purple">
                        Start Learning <FiArrowRight />
                      </button>
                    )}
                    {!section.subroutes && (
                      <button onClick={() => handleSectionClick(section)} className="mg-btn-purple">
                        Take Test <FiArrowRight />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW: TOPICS */}
        {view === "topics" && selectedRoadmapSection && (
          <div className="mg-fade-in">
            <div className="mg-view-header">
              <button onClick={goBack} className="mg-btn-back">
                <span className="mg-icon-back"><FiArrowLeft /></span> Back
              </button>
              <h2 className="mg-category-title mg-title-inline">{selectedRoadmapSection.title} Topics</h2>
            </div>
            <div className="mg-grid-5-cols">
              {selectedRoadmapSection.items.map((item, index) => {
                const subroute = selectedRoadmapSection.subroutes && selectedRoadmapSection.subroutes[index];
                if (!subroute) return null;
                // Generate a vibrant background color consistently based on index
                const colors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#14b8a6', '#f43f5e'];
                const bgColor = colors[index % colors.length];

                return (
                  <div key={index} className="mg-topic-card" onClick={() => handleItemClick(subroute, item)}>
                    <div className="mg-topic-icon-wrapper" style={{ backgroundColor: bgColor }}>
                      {item.charAt(0)}
                    </div>
                    <h3 className="mg-topic-title">{item}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VIEW: TESTS */}
        {view === "tests" && selectedTopic && (
          <div className="mg-fade-in">
            <div className="mg-view-header">
              <button onClick={goBack} className="mg-btn-back">
                <span className="mg-icon-back"><FiArrowLeft /></span> Back
              </button>
              <h2 className="mg-category-title mg-title-inline">{selectedTopic.title} Tests</h2>
            </div>
            <div className="mg-grid-layout">
              {examTestsData[selectedTopic.testKey].map((test, index) => (
                <div key={index} className="mg-card">
                  <div className="mg-card-media mg-media-contain">
                    <img src={test.image} alt={test.title} className="mg-card-img-contain" />
                    <h3 className="mg-card-overlay-title">{test.title}</h3>
                  </div>
                  <div className="mg-card-body">
                    <p className="mg-card-text">{test.desc || test.description}</p>
                    <a href={test.link} target="_blank" rel="noopener noreferrer" className="mg-btn-action mg-btn-link">
                      Start Exam
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Exam;
