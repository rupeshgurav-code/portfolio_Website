import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📬 Get in Touch</h2>
      <p>I'd love to hear from you! Whether it's a question, feedback, or just a hello.</p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" rows="5" placeholder="Type your message..." required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;