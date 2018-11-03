import React from 'react';
import styles from './styles/navigation.css';
import Logo from './Logo.jsx';
import Search from './Search.jsx';

const divTable = {
  display: "table",
  borderSpacing: "0px",
  height: "80px"
}

export const TopBar = () => (
  <div style={divTable}>
    <Logo />
    <Search />



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