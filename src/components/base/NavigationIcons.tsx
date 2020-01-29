import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const NavigationIcons: React.FC<Props> = () => {
  return (
    <div>
      <Link to="/about">about</Link>
      <Link to="/">main</Link>
      <Link to="/archive">archive</Link>
    </div>
  );
};

export default NavigationIcons;
