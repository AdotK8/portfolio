import React from 'react';
import './styles/home.scss';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import homeImg from './assets/home-image.png';

function Home() {
  const [changingText] = useTypewriter({
    words: [
      'Frontend Developer',
      'Full Stack Developer',
      'MERN Stack Developer',
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <section className="home-section" id="home">
      <div className="home-text">
        <p>
          Hi There! <span id="wave"> 👋🏻</span>
        </p>
        <p>
          I&apos;m <span id="home-name">Ahmed Khan</span>
        </p>
        <p id="home-moving-text">
          <span>{changingText}</span> <Cursor />
        </p>
      </div>
      <img src={homeImg} className="home-image" alt="Home" />
    </section>
  );
}

export default Home;
