import React from 'react';
import '../Styles/style.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>
      <div className="contact-links">
        <a href="mailto:sabitabarik588@gmail.com" target="_blank" rel="noopener noreferrer">
          ✉️ Email
        </a>
        <a href="https://github.com/Sabita-35" target="_blank" rel="noopener noreferrer">
          🐱 GitHub
        </a>
        <a href="https://linkedin.com/in/sabita-barik-183203218" target="_blank" rel="noopener noreferrer">
          💼 LinkedIn
        </a>
      </div>
    </section>
  );
}