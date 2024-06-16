import React, { useState } from 'react';
import PropTypes from 'prop-types';
import userIcon from './assets/account-outline.svg';
import xmlIcon from './assets/xml.svg';
import homeIcon from './assets/home-outline.svg';
import mailIcon from './assets/email-outline.svg';
import Home from './home.jsx';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import './styles/mainContent.scss';

function Content() {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
}

function MainContent() {
  return (
    <div className="content">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'nav-bar active' : 'nav-bar'}>
      <NavItem icon={homeIcon} text="Home" section="#home" />
      <NavItem icon={userIcon} text="About Me" section="#about" />
      <NavItem icon={xmlIcon} text="Projects" section="#projects" />
      <NavItem icon={mailIcon} text="Contact" section="#contact" />
    </div>
  );
}

function NavItem({ icon, text, section }) {
  return (
    <a className="nav-item" href={section}>
      <img src={icon} alt={text} className="nav-icon" />
      <span className="nav-text">{text}</span>
    </a>
  );
}

NavItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  section: PropTypes.string.isRequired,
};

export default Content;
