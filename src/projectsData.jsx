import cvApplicationImage from './assets/cv-application.png';
import battleshipImage from './assets/battleship.png';
import memoryCardImage from './assets/memory-card.png';
import yasePropertyImage from './assets/yase-property.png';

const projectsArray = [
  {
    name: 'Yase Property (Valuation Widget) - Live Company',
    codeLink: 'google.com',
    liveLink: 'google.com',
    image: yasePropertyImage,
    description:
      'Property Valuations Calculator embedded onto WIX created website via iframes. Provides prospective clients sale and rental estimates via propertydata api. Utilises nodemailer to send automated emails to both client and internal sales team. Deployed using Heorku. ',
    subheader: 'Javascript, Node, SASS, HTML, Heroku',
  },
  {
    name: 'CV Application',
    codeLink: 'https://github.com/AdotK8/cv-application',
    liveLink: 'https://cv-application-c680e5d1f0ee.herokuapp.com/',
    image: cvApplicationImage,
    description:
      'Simple CV builder application using react. User is able to add, edit and delete information which is then displayed to the user in real time in the visualization section.',
    subheader: 'Javascript, React, SASS, HTML, Heroku',
  },
  {
    name: 'Memory Card Game',
    codeLink: 'https://github.com/AdotK8/memory-card',
    liveLink: 'https://memory-card-3716161eff09.herokuapp.com/',
    image: memoryCardImage,
    description:
      'A retro themed pokemon themed memory game. Features all original 151 pokemon via PokeAPI. Users must click on a new pokemon on each turn until each round is complete, then new round with more pokemon starts. Users are also able to set their own high scores.',
    subheader: 'Javascript, React, SASS, HTML, Heroku',
  },
  {
    name: 'Battleship Game',
    codeLink: 'https://github.com/AdotK8/battleship',
    liveLink: 'https://adotk8.github.io/battleship/',
    image: battleshipImage,
    description:
      'Classic battleship game versus AI built using vanilla Javascript and robust testing using TDD (Jest). Animations and sfx included.  ',
    subheader: 'Javascript, CSS, HTML',
  },
];

export default projectsArray;
