import React, { useEffect } from 'react';
import './styles/background.scss';

const BackgroundStars = () => {
  useEffect(() => {
    const numStars = 150;
    const container = document.querySelector('.background-stars');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.classList.add(getRandomSize());
      star.style.left = `${Math.random() * width}px`;
      star.style.top = `${Math.random() * height}px`;
      container.appendChild(star);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Function to generate random size class for stars
  const getRandomSize = () => {
    const sizes = ['s', 'm', 'l', 'xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return <div className="background-stars"></div>;
};

export default BackgroundStars;
