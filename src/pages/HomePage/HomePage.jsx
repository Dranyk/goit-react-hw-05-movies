import { useEffect, useState } from 'react';
import { getMovies } from 'components/api';
import MovieList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      {error && <h2>Oooops. Sorry</h2>}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
