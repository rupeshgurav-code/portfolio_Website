import './skill.css';
import React from 'react';
import Skilllist from './Skilllist';

const Skill = () => {
  return (
    <div className='skill'>
      <div className="intro">
        <h2>👋 Hi, I'm Rupesh Gurav</h2>
        <p>
          A dedicated and detail-oriented developer with expertise in C++, Python, and Web Development.
          I enjoy building efficient systems, writing clean code, and creating user-friendly web experiences.
          My passion lies in solving problems through technology and continuously learning new tools and techniques.
        </p>
      </div>

      <Skilllist />

      <div className="log">
        <img src="./img/html.png" alt="HTML" />
        <img src="./img/css.png" alt="CSS" />
        <img src="./img/js.png" alt="JavaScript" />
        <img src="./img/react.png" alt="React" />
        <img src="./img/python.png" alt="Python" />
      </div>

      <div className="goal">
        <div className="goalimg">
          <img src="./img/goal1.jpg" alt="My Goal" />
        </div>
        <div className="Gcontent">
          <h1>🎯 My Goals</h1>

          <div className="goal-section">
            <h2>🔹 Short-Term Goals</h2>
            <ul>
              <li>Master core technologies like Python</li>
              <li>Build strong command over Data Structures and Algorithms</li>
              <li>Crack placement opportunities at top tech companies</li>
            </ul>
          </div>

          <div className="goal-section">
            <h2>🔹 Long-Term Vision</h2>
            <ul>
              <li>Leverage technical skills to solve real-world problems</li>
              <li>Develop impactful software solutions</li>
              <li>Contribute to accessible and meaningful tech projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;