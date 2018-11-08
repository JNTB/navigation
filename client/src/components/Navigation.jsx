import React from 'react';
import stylr from './styles/Navigation.css';

const Navigation = () => (
  <div className={stylr.divOuter}>
    <nav className={stylr.nav}>
      <ul className={stylr.ul}>
        <li className={stylr.li}>
          <div className={stylr.divli}>
            <button type="button" className={stylr.button}>
              <div className={stylr.divButtonOuter}>
                <div className={stylr.divButtonInner}>
                  Become a host
                </div>
              </div>
            </button>
          </div>
        </li>
        <li className={stylr.li}>
          <div className={stylr.divli}>
            <button type="button" className={stylr.button}>
              <div className={stylr.divButtonOuter}>
                <div className={stylr.divButtonInner}>
                  Help
                </div>
              </div>
            </button>
          </div>
        </li>
        <li className={stylr.li}>
          <div className={stylr.divli}>
            <button type="button" className={stylr.button}>
              <div className={stylr.divButtonOuter}>
                <div className={stylr.divButtonInner}>
                  Sign up
                </div>
              </div>
            </button>
          </div>
        </li>
        <li className={stylr.li}>
          <div className={stylr.divli}>
            <button type="button" className={stylr.button}>
              <div className={stylr.divButtonOuter}>
                <div className={stylr.divButtonInner}>
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