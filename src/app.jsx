import React from 'react';
import BackgroundStars from './background';
import Shapes from './shapes';
import Content from './mainContent';
import './styles/app.scss';

export default function App() {
  return (
    <div className="App">
      <BackgroundStars />
      <div className="scrollable-content">
        <Shapes />
        <Content />
      </div>
    </div>
  );
}
