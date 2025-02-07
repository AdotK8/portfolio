import React from 'react';
import './styles/contact.scss';
import profileImage from './assets/profile-image.png';
import githubIcon from './assets/github.svg';
import cvIcon from './assets/cv.png';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact me</h1>
      <img src={profileImage} className="avatar-icon" alt="Avatar" />
      <p>
        My inbox is always open! If you have a question or just want to say hi,
        write me an email at:
      </p>
      <h2>ahmedkhan895.ak@gmail.com</h2>
      <div className="icon-container">
        <a
          href="https://github.com/AdotK8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://drive.google.com/file/d/1nJEFnhZNGg1NyWhGCQGu6jF3v1XR8FR_/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cvIcon} alt="CV" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
