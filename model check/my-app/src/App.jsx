import React from 'react';
import BallCanvas from './components/BallCanvas';

const techIcons = [
  '/icons/c.png',
  '/icons/cj.png',
  '/icons/python.png',
  '/icons/nodejs.png'
];

const Skills = () => (
  <div className="flex flex-wrap gap-10">
    {techIcons.map((icon, index) => (
      <div className="w-28 h-28" key={index}>
        <BallCanvas icon={icon} />
      </div>
    ))}
  </div>
);

export default Skills;
