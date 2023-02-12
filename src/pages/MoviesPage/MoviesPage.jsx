import { useState } from 'react';

import css from './MoviesPage.module.css';

const MoviesPage = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuerySearch = e => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      alert('Enter the film title');
    }

    onSearch(searchQuery);
    setSearchQuery('');
  };

  return (
    <div className={css.search}>
          <form onSubmit={handleSubmit} className={css.searchForm}>
        <input
          type="text"
          name="searchQuery"
          value={searchQuery}
          autoComplete="off"
          autoFocus
          placeholder="Search ..."
          onChange={handleQuerySearch}
          className={css.searchInput}
        />
        <button
          type="submit"
          //   onClick={handleInputClear}
          className={css.searchButton}
        >
          Search
        </button>
      </form>
    </div>

  );
};

export default MoviesPage;
