import React from 'react';
import './bottom.css';

const Bottom = () => {
  return (
    <footer className="bott">
      <div className="footer-content">
        <h2>🚀 Let's Connect</h2>
        <p>Thanks for visiting! Stay curious, keep building, and never stop learning.</p>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:your@email.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Bottom;