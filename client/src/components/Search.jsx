import React from 'react';
import SearchForm from './SearchForm.jsx';
import stylr from './styles/Search.css';

const Search = () => (
  <div className={stylr.divOuter}>
    <div className={stylr.divInner}>
      <div className={stylr.divOuterSearch}>
        <div className={stylr.divInnerSearch}>
          <div className={stylr.divSearchBar}>
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Search;