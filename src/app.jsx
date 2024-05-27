// src/App.jsx

import React from 'react';
import BackgroundStars from './background';
import './styles/app.scss';

function NavBar() {
  return <div className="nav-bar">Navigation Bar</div>;
}

export default function App() {
  return (
    <div className="App">
      <BackgroundStars />
      <NavBar />
      <div className="content" style={{ height: '200vh', padding: '20px' }}>
        <h1>Scrolling Content</h1>
        <p>Add your long content here...</p>
      </div>
    </div>
  );
}
