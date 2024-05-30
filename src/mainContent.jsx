import { useState } from 'react';
import userIcon from './assets/account-outline.svg';
import xmlIcon from './assets/xml.svg';
import homeIcon from './assets/home-outline.svg';
import mailIcon from './assets/email-outline.svg';
import Home from './Home';
import About from './about';
import './styles/mainContent.scss';

const Content = () => {
  return (
    <>
      <NavBar />
      <MainContent />
    </>
  );
};

const MainContent = () => {
  return (
    <div className="content">
      <Home />
      <About />
    </div>
  );
};

const NavBar = () => {
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
      <NavItem icon={homeIcon} text="Home" />
      <NavItem icon={userIcon} text="About Me" />
      <NavItem icon={xmlIcon} text="Projects" />
      <NavItem icon={mailIcon} text="Contact" />
    </div>
  );
};

const NavItem = ({ icon, text }) => {
  return (
    <div className="nav-item">
      <img src={icon} alt={text} className="nav-icon" />
      <span className="nav-text">{text}</span>
    </div>
  );
};

export default Content;
