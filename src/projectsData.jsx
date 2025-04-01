import cvApplicationImage from './assets/cv-application.png';
import battleshipImage from './assets/battleship.png';
import memoryCardImage from './assets/memory-card.png';
import yasePropertyImage from './assets/yase-property.png';
import yaseDatabaseImage from './assets/yase-database.png';
import canvasImage from './assets/canvas.png';

const projectsArray = [
  {
    id: 1,
    name: 'Yase Property (Database & Property Matching Tool) - Active Company',
    backendLink: 'https://github.com/AdotK8/crud-backend',
    frontendLink: 'https://github.com/AdotK8/crud-frontend',
    liveLink: 'https://yase-databae.netlify.app/',
    image: yaseDatabaseImage,
    description:
      'This is a web application developed for Yase Property to streamline the work of real estate sales consultants. The app allows users to browse, filter, and manage a database of property developments, create new listings, and update property details. It includes a property matching tool that sends personalized property selections to clients via email. Additionally, the app integrates Google Maps for visualizing properties. The frontend communicates with a RESTful API backend built using the MERN stack, offering a smooth, user-friendly experience for property search and management.',
    subheader: 'React, NodeJS, Express, MongoDB, SASS, Jest, Netlify, Heroku',
  },

  {
    id: 2,
    name: 'Yase Property (Valuation Widget) - Active Company',
    backendLink: 'https://github.com/AdotK8/crud-backend',
    frontendLink: 'https://github.com/AdotK8/yase-valuation-tool',
    liveLink: 'https://www.yaseproperty.com/freeappraisal',
    image: yasePropertyImage,
    description:
      'This is a web widget created for Yase Property to offer clients instant property valuations. Integrated into the Yase Property website, it helps attract potential landlords by providing quick estimates for property sale and rental values. The widget communicates with a RESTful API backend built with the MERN stack and sends automated emails with valuation results to clients and the Yase team. It is built using vanilla JavaScript, designed for mobile responsiveness, and seamlessly integrated into the website.',
    subheader: 'Javascript, NodeJS, SASS, Netlify, Heroku',
  },

  {
    id: 3,
    name: 'Canvas Editing App - Active Business',
    codeLink: 'https://github.com/AdotK8/photo-editor',
    liveLink: 'https://benevolent-queijadas-a0d2ed.netlify.app/',
    image: canvasImage,
    description:
      'A web app for creating custom canvas designs for an Etsy store, allowing users to add numbers, images, and text with full customization. Features include image manipulation (drag, resize, flip), text styling, and PDF export for printing, built with React and KonvaJS.',
    subheader: 'Typescript, React, KonvaJS, SASS, Netlify',
  },
  {
    id: 4,
    name: 'Memory Card Game',
    codeLink: 'https://github.com/AdotK8/memory-card',
    liveLink: 'https://frabjous-palmier-1b298d.netlify.app/',
    image: memoryCardImage,
    description:
      'A retro themed pokemon themed memory game. Features all original 151 pokemon via PokeAPI. Users must click on a new pokemon on each turn until each round is complete, then new round with more pokemon starts. Users are also able to set their own high scores.',
    subheader: 'Javascript, React, SASS, HTML, Netlify',
  },
  {
    id: 5,
    name: 'CV Application',
    codeLink: 'https://github.com/AdotK8/cv-application',
    liveLink: 'https://deft-tarsier-6e911c.netlify.app/',
    image: cvApplicationImage,
    description:
      'Simple CV builder application using react. User is able to add, edit and delete information which is then displayed to the user in real time in the visualization section.',
    subheader: 'Javascript, React, SASS, HTML, Netlify',
  },

  {
    id: 6,
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
