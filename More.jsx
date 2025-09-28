import React from 'react';
import './more.css';

const More = () => {
  return (
    <div className="education-container">
      <h2>🎓 My Education Journey</h2>
      <div className="timeline">
        <div className="timeline-item complete">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>10th Grade</h3>
            <p>Completed Secondary Education</p>
          </div>
        </div>

        <div className="timeline-item complete">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Diploma in Computer Science</h3>
            <p>Graduated with 89.43% aggregate</p>
          </div>
        </div>

        <div className="timeline-item ongoing">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>B.Tech in Computer Science</h3>
            <p>Currently pursuing – 3rd Year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;