import React from 'react';
import { NavLink } from 'react-router-dom';
// const { useRef } = React;

const Navigation = () => {
  return (
    <div className='navigation '>
      <nav>
        <NavLink exact to='/'>Accueil</NavLink>
        <NavLink exact to='/glaces'>Nos glaces</NavLink>
        <NavLink exact to='/contact'>Contact</NavLink>
        <NavLink exact to='/a-propos'>À propos</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;