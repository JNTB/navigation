import React from 'react';
import styles from './styles/navigation.css';

const divOuter = {
  display: "table-cell",
  verticalAlign: "middle",
  boxSizing: "border-box",
  width: "100%",
  height: "80px",
  margin: "0px 0px 0px 0px"
}

const divli = {
  boxSizing: "border-box",
  display: "block",
  height: "80px",
  cursor: "pointer"
}

const button = {
  height: "80px",
  lineHeight: "80px",
  display: "inline-block",
  position: "relative",
  whiteSpace: "nowrap",
  background: "transparent",
  borderStyle: "none",
  margin: "0px",
  padding: "0px 8px",
  fontSize: "14px",
  outline: "none",
  cursor: "pointer"
}

const divButtonOuter = {
  height: "100%",
  verticalAlign: "middle",
  boxSizing: "border-box",
  borderBottom: "2px solid transparent",
  display: "block"
}

const divButtonInner = {
  display: "inline-block",
  verticalAlign: "middle",
  lineHeight: "1",
  padding: "8px"
}

const Navigation = () => (
  <div style={divOuter}>
    <nav style={{display: "block", boxSizing: "border-box"}}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <div style={divli}>
            <button type="button" style={button}>
              <div style={divButtonOuter}>
                <div style={divButtonInner}>
                  Become a host
                </div>
              </div>
            </button>
          </div>
        </li>
        <li style={styles.li}>
          <div style={divli}>
            <button type="button" style={button}>
              <div style={divButtonOuter}>
                <div style={divButtonInner}>
                  Help
                </div>
              </div>
            </button>
          </div>
        </li>
        <li style={styles.li}>
          <div style={divli}>
            <button type="button" style={button}>
              <div style={divButtonOuter}>
                <div style={divButtonInner}>
                  Sign up
                </div>
              </div>
            </button>
          </div>
        </li>
        <li style={styles.li}>
          <div style={divli}>
            <button type="button" style={button}>
              <div style={divButtonOuter}>
                <div style={divButtonInner}>
                  Log in
                </div>
              </div>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navigation;