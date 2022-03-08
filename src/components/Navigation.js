import React from 'react';
import { NavLink } from 'react-router-dom';
// const { useRef } = React;

const Navigation = () => {
  return (
    <div className='navigation '>
      <div className='container'>
        <nav>
          <NavLink exact to='/'>Accueil</NavLink>
          <NavLink exact to='/about'>À propos</NavLink>
          <NavLink exact to='#realisation'>Réalisations</NavLink>
          <NavLink exact to='#contact'>Contact</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;