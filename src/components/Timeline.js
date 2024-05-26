import React from 'react';
import './Timeline.css';

const Timeline = ({ isDarkMode }) => {
  return (
    <section className={`design-section ${isDarkMode ? 'design-section-dark-mode' : ''}`}>
      <h1>EXPERIENCE</h1>
      <div className="timeline">
        <div className="timeline-empty"></div>
        <div className={`timeline-middle ${isDarkMode ? 'timeline-middle-dark' : ''}`}>
          <div className={`timeline-circle ${isDarkMode ? 'timeline-circle-dark' : ''}`}>
            <p>2024</p>
          </div>
        </div>
        <div className={`timeline-component timeline-content ${isDarkMode ? 'timeline-content-dark' : ''}`}>
          <h3>HTML</h3>
          <p>Some Text</p>
        </div>
        <div className={`timeline-component timeline-content ${isDarkMode ? 'timeline-content-dark' : ''}`}>
          <h3>CSS</h3>
          <p>Some Text.</p>
        </div>
        <div className={`timeline-middle ${isDarkMode ? 'timeline-middle-dark' : ''}`}>
          <div className={`timeline-circle ${isDarkMode ? 'timeline-circle-dark' : ''}`}>
            <p>2023</p>
          </div>
        </div>
        <div className="timeline-empty"></div>
        <div className="timeline-empty"></div>
        <div className={`timeline-middle ${isDarkMode ? 'timeline-middle-dark' : ''}`}>
          <div className={`timeline-circle ${isDarkMode ? 'timeline-circle-dark' : ''}`}>
            <p>2022</p>
          </div>
        </div>
        <div className={`timeline-component timeline-content ${isDarkMode ? 'timeline-content-dark' : ''}`}>
          <h3>Javascript</h3>
          <p>Some Text.</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
