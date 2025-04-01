import React from 'react'; // Import React to fix 'React' must be in scope when using JSX errors
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
import netlifyIcon from './assets/netlify.svg';
import mongoIcon from './assets/mongo.svg';
import expressIcon from './assets/express.svg';
import viteIcon from './assets/vite.png';
import typescriptIcon from './assets/typescript.svg';

const icons = [
  { src: htmlIcon, name: 'HTML' },
  { src: cssIcon, name: 'CSS' },
  { src: jsIcon, name: 'JavaScript' },
  { src: typescriptIcon, name: 'TypeScript' },
  { src: sassIcon, name: 'Sass' },
  { src: nodejsIcon, name: 'Node.js' },
  { src: reactIcon, name: 'React' },
  { src: mongoIcon, name: 'MongoDB' },
  { src: expressIcon, name: 'Express' },
  { src: gitIcon, name: 'Git' },
  { src: eslintIcon, name: 'ESLint' },
  { src: herokuIcon, name: 'Heroku' },
  { src: netlifyIcon, name: 'Netlify' },
  { src: viteIcon, name: 'Vite' },
  { src: jestIcon, name: 'Jest' },
  { src: npmIcon, name: 'npm' },
  { src: webpackIcon, name: 'Webpack' },
  { src: prettierIcon, name: 'Prettier' },
  { src: babelIcon, name: 'Babel' },
];

// Change to function declaration
function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-text-container">
        <h1>
          If I don&apos;t know it, <span>I figure it out</span>
        </h1>
        <p>
          Committed to the idea of life-long learning, I am passionate about web
          development and the endless possibilities it offers. I am always
          seeking new challenges and opportunities to grow and improve as a
          developer.
        </p>
        <p>
          Building things from scratch is what drives me, and is why after
          graduating with a masters in electrical engineering I went on to start
          multiple businesses, with the most recent being a digital real estate
          and media agency. This blend of technical expertise and business
          acumen has equipped me with a keen understanding of user needs, and
          the ability to align technical solutions to business goals.
        </p>
        <p>
          Now, I am eager to focus more on software development, rekindling my
          love for the technical challenges and continuous learning I enjoyed
          during my education.
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
}

export default About;
