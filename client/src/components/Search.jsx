import React from 'react';
import SearchForm from './SearchForm.jsx';
import styles from './styles/search.css';

const Search = () => (
  <div style={styles.divOuter}>
    <div style={styles.divInner}>
      <div style={styles.divOuterSearch}>
        <div style={styles.divInnerSearch}>
          <div style={styles.divSearchBar}>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Search;