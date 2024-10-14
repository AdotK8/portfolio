import React, { useEffect } from 'react';
import './styles/background.scss';

function BackgroundStars() {
  //funciton to generate random stars for background
  const getRandomSize = () => {
    const sizes = ['s', 'm', 'l', 'xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const createStars = (numStars, width, height) => {
    const container = document.querySelector('.background-stars');
    container.innerHTML = '';
    for (let i = 0; i < numStars; i += 1) {
      const star = document.createElement('div');
      star.className = 'star';
      star.classList.add(getRandomSize());
      star.style.left = `${Math.random() * width}px`;
      star.style.top = `${Math.random() * height}px`;
      container.appendChild(star);
    }
  };

  useEffect(() => {
    const numStars = 350;
    const container = document.querySelector('.background-stars');

    const updateStars = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      createStars(numStars, width, height);
    };

    updateStars();
    window.addEventListener('resize', updateStars);

    return () => {
      window.removeEventListener('resize', updateStars);
      container.innerHTML = '';
    };
  }, []);

  return <div className="background-stars" />;
}

export default BackgroundStars;
