import React from 'react';
import './skilllist.css';

const skills = [
  { category: 'Programming', tools: 'C++, Python' },
  { category: 'Web Development', tools: 'HTML, CSS, JavaScript, React, Node.js' },
  { category: 'Backend & APIs', tools: 'Express.js, RESTful APIs' },
  { category: 'Database', tools: 'MySQL, MongoDB' },
  { category: 'Version Control', tools: 'Git, GitHub' },
  { category: 'Other Tools', tools: 'VS Code' },
];

const Skilllist = () => {
  return (
    <div className="skilllist-container">
      <h2>💻 My Skill Set</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.category}</h3>
            <p>{skill.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skilllist;