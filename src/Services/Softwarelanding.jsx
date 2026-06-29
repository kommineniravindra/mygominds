import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import '../ServicesCss/Softwarelanding.css';

const fullCode = `import { MyGoMinds } from '@mygominds/ai'

const site = await MyGoMinds.build({
  prompt: 'Business site + online orders',
  modules: ['crm', 'erp', 'whatsapp'],
  deploy: true,
})

console.log(site.url)
// ✓ Live at https://business.mygominds.app`;

const Softwarelanding = () => {
  const [typedCode, setTypedCode] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeWriter = () => {
      if (currentIndex <= fullCode.length) {
        setTypedCode(fullCode.slice(0, currentIndex));
        currentIndex++;
        timeoutId = setTimeout(typeWriter, 40);
      } else {
        timeoutId = setTimeout(() => {
          currentIndex = 0;
          setTypedCode('');
          typeWriter();
        }, 4000); // Wait 4 seconds at the end before restarting
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, []);

  const renderHighlightedCode = (text) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      let htmlLine = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      if (htmlLine.trim().startsWith('//')) {
        htmlLine = `<span class="code-comment">${htmlLine}</span>`;
      } else {
        htmlLine = htmlLine
          .replace(/(import|from|const|await|true)\b/g, '<span class="code-keyword">$1</span>')
          .replace(/('[^']*')/g, '<span class="code-string">$1</span>')
          .replace(/\b(site|console\.log|prompt|modules|deploy|build)\b/g, '<span class="code-variable">$1</span>');
      }

      if (i === lines.length - 1) {
        htmlLine += '<span class="code-cursor"></span>';
      }

      return (
        <div key={i} dangerouslySetInnerHTML={{ __html: htmlLine || ' ' }} />
      );
    });
  };

  return (
    <section className="software-landing-container">
      <div className="sl-content-wrapper">
        
        {/* Left Column: Text & Buttons */}
        <div className="sl-text-col">
          <div className="sl-badge">
            <span style={{fontSize: '14px', lineHeight: 1}}>✨</span> Welcome to MyGoMinds
          </div>
          
          <h1 className="sl-heading">
            <span style={{ whiteSpace: 'nowrap' }}>We Build Modern Website</span><br></br>
             <span style={{ whiteSpace: 'nowrap' }}>& Software That Grow</span><br></br>
              <span className="text-orange">Your Business</span>
          </h1>
          
          <p className="sl-desc">
            MyGoMinds is the all-in-one platform: Software development, IT training, CRM, ERP, AI calling and WhatsApp automation — under one roof.
          </p>
          
          <div className="sl-btn-group">
            <button className="sl-btn-primary">
              Start building free <FiArrowRight />
            </button>
            <button className="sl-btn-secondary">
              Browse templates
            </button>
          </div>
        </div>

        {/* Right Column: Code Window & Floating Badge */}
        <div className="sl-visual-col">
          <div className="sl-code-window">
            
            <div className="sl-window-header">
              <div className="sl-mac-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <div className="sl-window-title">build.js — MyGoMinds AI</div>
            </div>
            
            <div className="sl-code-body">
              <div className="sl-line-numbers">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
              </div>
              <div className="sl-code-content">
                {renderHighlightedCode(typedCode)}
              </div>
            </div>

            <div className="sl-window-footer">
              JavaScript · 100 credits
            </div>
            
            {/* Floating Badge */}
            <div className="sl-floating-badge">
              <div className="sl-float-icon">
                <FiCheck />
              </div>
              <div className="sl-float-text">
                <h4>Live in 60 seconds</h4>
                <p>From prompt to production</p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Softwarelanding;
