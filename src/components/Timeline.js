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
          <h3>Software Engineering Co-op | Ontario Power Generation</h3>
          <p>Automated data processes with Python and SQL, built real-time dashboards with Angular and ASP.NET, and designed advanced data structures to support analytics and operations.</p>
        </div>
        <div className={`timeline-component timeline-content ${isDarkMode ? 'timeline-content-dark' : ''}`}>
          <h3>Software Research Assistant | University of Calgary</h3>
          <p>Software Engineering Research Assistant developing algorithms to analyze qubit min-entropy, enhancing applications in quantum information theory, cryptography, and computer science.</p>
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
          <h3>Business Development Intern | MemoMoti</h3>
          <p>Utilized Python libraries (Pandas, NumPy, scikit-learn) to analyze market data, create predictive sales models, and visualize stock data in dynamic Tableau dashboards, providing actionable insights and aiding in accurate sales forecasting and informed trading decisions.</p>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
