import { useEffect, useState } from 'react';
import { getMovies } from 'components/api';
import MovieList from 'components/MoviesList/MoviesList';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchTrendingMovies = () => {
        setLoading(true);
        getMovies()
          .then(results => {
            setMovies(results);
          })
          .catch(error => {
            setError('Ooops. Something went wrong...');
            console.log(error);
          })
          .finally(() => setLoading(false));
      };
      fetchTrendingMovies();
    }, []);
  
    // const isNotFound = !loading && !movies.length;
    return (
      <>
          {/* <SearchBar onSubmit={handleFormSubmit} /> */}
          {loading && 'Loading ...'}
          {/* {isNotFound && <NotFoundView />} */}
          {error && <div>{error}</div>}
          {movies && <MovieList movies={movies} />}
      </>
    );
  }
  