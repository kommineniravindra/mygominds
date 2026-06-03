import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../UI/Catalog';
import { FiArrowLeft, FiClock, FiBookOpen, FiAward, FiVideo, FiMonitor, FiCheckCircle } from 'react-icons/fi';
import { FaCheckCircle as FaCheckSolid } from 'react-icons/fa';

const CourseDetails = () => {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Course not found</h2>
        <Link to="/courses" style={{ color: '#ea580c', textDecoration: 'none', fontWeight: 'bold' }}>&larr; Back to Courses</Link>
      </div>
    );
  }

  const { details } = course;

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem' }}>
      
      {/* Premium Hero Section */}
      <div style={{ 
        position: 'relative', 
        padding: '5rem 2rem 4rem 2rem', 
        background: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.8)), url(${course.image}) center/cover no-repeat`,
        color: 'white',
        textAlign: 'center'
      }}>
         <div style={{ maxWidth: '1500px', margin: '0 auto', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-4rem', left: '0' }}>
               <Link to="/courses" style={{ color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color='white'} onMouseLeave={(e) => e.target.style.color='#cbd5e1'}>
                 <FiArrowLeft /> Back to Courses
               </Link>
            </div>
            
            <span style={{ background: 'rgba(234, 88, 12, 0.2)', color: '#fdba74', border: '1px solid rgba(234, 88, 12, 0.5)', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block', letterSpacing: '1px' }}>
              {course.category}
            </span>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '4rem', margin: '0 0 1.5rem 0', lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {course.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
              {details?.description || "Master the skills needed to excel in this field with our comprehensive, industry-led curriculum."}
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', fontSize: '1.15rem', fontWeight: 500 }}>
               <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FiClock style={{ color: '#ea580c' }}/> {course.duration}</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FiBookOpen style={{ color: '#ea580c' }}/> {course.lessons}</span>
               <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FiAward style={{ color: '#ea580c' }}/> Certificate</span>
            </div>
         </div>
      </div>

      {/* Main Content Layout */}
      <div style={{ maxWidth: '1500px', margin: '-3rem auto 0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '3rem', position: 'relative', zIndex: 10 }}>
        
        {/* Left Column: Details */}
        <div style={{ background: 'white', borderRadius: '1rem', padding: '3.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
          {details ? (
            <>
              {/* Curriculum Section */}
              {details.coreCurriculum && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '2rem', fontFamily: "'Playfair Display', serif" }}>Core Curriculum</h3>
                  <div style={{ borderLeft: '2px solid #e2e8f0', marginLeft: '1rem' }}>
                    {details.coreCurriculum.map((item, idx) => (
                      <div key={idx} style={{ position: 'relative', paddingLeft: '2.5rem', marginBottom: '2rem' }}>
                        <div style={{ position: 'absolute', left: '-11px', top: '0', background: 'white', border: '2px solid #ea580c', width: '20px', height: '20px', borderRadius: '50%' }}></div>
                        <h4 style={{ margin: '0 0 0.5rem 0', color: '#0f172a', fontSize: '1.2rem' }}>Module {idx + 1}: {item}</h4>
                        <p style={{ color: '#64748b', margin: 0, fontSize: '1rem' }}>Deep dive into the core concepts and practical applications of {item}.</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights Section */}
              {details.keyHighlights && (
                <div style={{ marginBottom: '4rem' }}>
                  <h3 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '2rem', fontFamily: "'Playfair Display', serif" }}>Why Choose This Course?</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                    {details.keyHighlights.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', background: '#f8fafc', borderRadius: '0.75rem', border: '1px solid #e2e8f0', transition: 'transform 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-3px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
                        <div style={{ background: '#e0e7ff', color: '#4f46e5', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <FiCheckCircle size={20} />
                        </div>
                        <span style={{ color: '#334155', fontWeight: 600 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: 'center', color: '#64748b', padding: '4rem 0' }}>
              <p style={{ fontSize: '1.2rem' }}>Detailed course syllabus is coming soon.</p>
            </div>
          )}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <div style={{ alignSelf: 'start', position: 'sticky', top: '2rem' }}>
          
          {/* Pricing / Enrollment Card */}
          <div style={{ background: 'white', borderRadius: '1rem', padding: '2.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', marginBottom: '2rem', border: '1px solid #f1f5f9' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ color: '#64748b', textDecoration: 'line-through', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{details?.originalPrice || '₹30,000'}</div>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>{details?.discountPrice || '₹12,000'}<span style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 500 }}>/full</span></div>
            </div>
            
            <button style={{ width: '100%', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', border: 'none', padding: '1.25rem', borderRadius: '0.75rem', fontSize: '1.15rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 10px 20px rgba(234, 88, 12, 0.3)', transition: 'transform 0.2s', marginBottom: '1.5rem' }} onMouseEnter={(e)=>e.currentTarget.style.transform='scale(1.02)'} onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}>
              Enroll Now
            </button>
            <p style={{ textAlign: 'center', color: '#64748b', fontSize: '0.9rem', margin: 0 }}>30-Day Money-Back Guarantee</p>

            <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '2rem 0' }} />
            
            <h4 style={{ color: '#0f172a', marginBottom: '1rem', fontSize: '1.1rem' }}>This course includes:</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}><FiMonitor style={{ color: '#8b5cf6' }}/> Access on Mobile & TV</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}><FiVideo style={{ color: '#8b5cf6' }}/> Live Interactive Classes</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}><FiBookOpen style={{ color: '#8b5cf6' }}/> Comprehensive Study Material</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}><FiAward style={{ color: '#8b5cf6' }}/> Certificate of Completion</li>
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
