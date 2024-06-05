import React, { useEffect } from 'react';
import './styles/background.scss';

function BackgroundStars() {
  // Function to generate random size class for stars
  const getRandomSize = () => {
    const sizes = ['s', 'm', 'l', 'xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  useEffect(() => {
    const numStars = 350;
    const container = document.querySelector('.background-stars');
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    for (let i = 0; i < numStars; i += 1) {
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

  return <div className="background-stars" />;
}

export default BackgroundStars;
