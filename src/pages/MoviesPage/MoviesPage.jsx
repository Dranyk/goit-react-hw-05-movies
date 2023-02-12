import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import css from './MoviesPage.module.css';
import { fetchByQuery } from 'components/api';
import MovieList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const handleQuerySearch = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Enter the film title');
    }
    setSearchParams({ search });
    setSearch('');
  };

  const movieName = searchParams.get('query');

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const data = await fetchByQuery(movieName);
        setMovies(data);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    if (movieName) {
      fetchMovie();
    }
  }, [movieName]);

  return (
    <>
      <div className={css.search}>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <input
            type="text"
            name="searchQuery"
            value={search}
            autoComplete="off"
            autoFocus
            placeholder="Search ..."
            onChange={handleQuerySearch}
            className={css.searchInput}
          />
          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </form>
      </div>
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;
