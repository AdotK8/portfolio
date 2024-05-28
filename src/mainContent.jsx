import userIcon from './assets/account-outline.svg';
import xmlIcon from './assets/xml.svg';
import homeIcon from './assets/home-outline.svg';
import mailIcon from './assets/email-outline.svg';
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
  return <div className="content"></div>;
};

const NavBar = () => {
  return (
    <div className="nav-bar">
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
