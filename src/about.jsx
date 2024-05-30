import './styles/about.scss';
import babelIcon from './assets/babel.svg';
import cssIcon from './assets/css.svg';
import eslintIcon from './assets/eslint.svg';
import gitIcon from './assets/git.svg';
import herokuIcon from './assets/heroku.svg';
import htmlIcon from './assets/html.svg';
import jestIcon from './assets/jest.svg';
import jsIcon from './assets/js.svg';
import nodejsIcon from './assets/nodejs.svg';
import npmIcon from './assets/npm.svg';
import prettierIcon from './assets/prettier.svg';
import reactIcon from './assets/react.svg';
import sassIcon from './assets/sass.svg';
import webpackIcon from './assets/webpack.svg';

const icons = [
  { src: htmlIcon, name: 'HTML' },
  { src: cssIcon, name: 'CSS' },
  { src: jsIcon, name: 'JavaScript' },
  { src: sassIcon, name: 'Sass' },
  { src: nodejsIcon, name: 'Node.js' },
  { src: reactIcon, name: 'React' },
  { src: gitIcon, name: 'Git' },
  { src: eslintIcon, name: 'ESLint' },
  { src: herokuIcon, name: 'Heroku' },
  { src: jestIcon, name: 'Jest' },
  { src: npmIcon, name: 'npm' },
  { src: webpackIcon, name: 'Webpack' },
  { src: prettierIcon, name: 'Prettier' },
  { src: babelIcon, name: 'Babel' },
];

const About = () => {
  return (
    <section className="about-section">
      <div className="about-text-container">
        <h1>
          If I don't know it, <span>I figure it out</span>
        </h1>
        <p>
          <span>Committed to the idea of life-long learning, </span>I am
          passionate about web development and the endless possibilities it
          offers. I am always seeking new challenges and opportunities to grow
          and improve as a developer.
        </p>
        <p>
          Whether working on a personal project or collaborating with a team, I
          am committed to delivering high-quality and scalable web applications
          that meet the needs of users and businesses.
        </p>
      </div>
      <div className="about-icons-container">
        {icons.map((icon) => (
          <div key={icon.name} className="icon">
            <img src={icon.src} alt={icon.name} />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
