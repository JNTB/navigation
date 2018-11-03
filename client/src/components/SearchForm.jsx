import React from 'react';
import styles from './styles/searchform.css'

const SearchForm = () => (
  <form style={styles.form}>
    <div style={styles.divOuter}>
      <div style={styles.divInner}>
        <label style={styles.label}>
          <div style={styles.icon}>
            <svg viewBox="0 0 16 16" focusable="false" style={styles.svg}><path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path></svg>
          </div>
          <div style={styles.divInputWrapper}>
            <div style={styles.divInput}>
              <input type="text" style={styles.input} placeholder="Search">
              </input>
            </div>
          </div>
        </label>
      </div>
    </div>
  </form>
)

export default SearchForm;