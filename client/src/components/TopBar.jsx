import React from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Navigation from './Navigation.jsx';
import stylr from './styles/TopBar.css';

export const TopBar = () => (
  <div className={stylr.divTable}>
    <Logo />
    <Search />
    <Navigation />
  </div>
)