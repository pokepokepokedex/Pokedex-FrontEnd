import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  return (
    <div className='Nav'>
      <img
        src={require(`../assets/Logo.svg`)}
        alt='icon'
        className='pokemon-logo'
      />
      <NavLink
        exact={true}
        to='/'
        className='links'
        activeClassName='is-active'
      >
        Home
      </NavLink>
      <NavLink to='/dashboard' className='links' activeClassName='is-active'>
        Dashboard
      </NavLink>
      <NavLink to='/backpack' className='links' activeClassName='is-active'>
        Backpack
      </NavLink>
      <NavLink to='/about' className='links' activeClassName='is-active'>
        About
      </NavLink>
    </div>
  );
};

export default Nav;
