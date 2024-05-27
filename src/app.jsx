// src/App.jsx

import React from 'react';
import BackgroundStars from './background';
import Shapes from './shapes';
import './styles/app.scss';

function NavBar() {
  return <div className="nav-bar">Navigation Bar</div>;
}

export default function App() {
  return (
    <div className="App">
      <BackgroundStars />
      <div className="scrollable-content">
        <Shapes />
        <NavBar />
        <div className="content"></div>
      </div>
    </div>
  );
}
