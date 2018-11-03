import React from 'react';
import Logo from './Logo.jsx';
import Search from './Search.jsx';
import Navigation from './Navigation.jsx';

const divTable = {
  display: "table",
  borderSpacing: "0px",
  height: "80px"
}

export const TopBar = () => (
  <div style={divTable}>
    <Logo />
    <Search />
    <Navigation />


    {/* <nav>
      <ul style={styles.ul}>
        <li style={styles.li}>Become a host</li>
        <li style={styles.li}>Help</li>
        <li style={styles.li}>Sign up</li>
        <li style={styles.li}>Log in</li>
      </ul>
    </nav> */}
  </div>
)