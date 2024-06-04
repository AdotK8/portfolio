import './styles/contact.scss';
import avatarIcon from './assets/avatar.svg';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>Contact me</h1>
      <img src={avatarIcon} className="avatar-icon" />
      <p>
        {' '}
        My inbox is always open! If you have a question or just want to say hi,
        write me an email at:
      </p>
      <h2>ahmedkhan895.ak@gmail.com</h2>
      <div className="icon-container">
        <img src={githubIcon} />
        <img src={linkedinIcon} />
      </div>
    </section>
  );
};

export default Contact;
