import React from 'react';
import { skills } from '../DATA.json';

const Skills = () => {
  return (
    <p>
      <b>{'Skills'}:</b>{' '}
      {skills.map(
        (item, index) =>
        (
          <span className="skill" key={index}>{item}</span>
        )
      )}
    </p>
  );
};

export default Skills;
