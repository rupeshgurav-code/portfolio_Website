import React from 'react';
import './platform.css';

const Platform = () => {
  return (
    <div className='plat'>
      <div className="card linkedin-card">
        <h3>🔗 Let's Connect on LinkedIn</h3>
        <p>
          I'm passionate about building meaningful connections in tech, sharing insights, and learning from others.
        </p>
        <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          👉 Visit My LinkedIn Profile
        </a>
      </div>

      <div className="card leetcode-card">
        <h3>💻 My LeetCode Journey</h3>
        <p>
          I tackle coding challenges daily to improve my algorithmic thinking and prepare for technical interviews.
        </p>
        <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer">
          🚀 Explore My LeetCode Progress
        </a>
      </div>
    </div>
  );
};

export default Platform;