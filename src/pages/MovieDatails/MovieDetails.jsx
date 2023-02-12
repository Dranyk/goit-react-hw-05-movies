import css from './MovieDetails.module.css';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'components/api';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getYear = () => new Date(movie.release_date).getFullYear();

  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  let activeClassName = {
    color: '#2196f3',
  };

  const handleClick = () => navigate(back);
  const back = location?.state?.from ?? '/';

  useEffect(() => {
    const movieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMoviesDetails(movieId);
        setMovie(data);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    movieDetails();
  }, [movieId]);

  return (
    <div className={css.film}>
      <button onClick={handleClick} className={css.backButton}>
        Go back
      </button>

      {movie && <p>{movie.title}</p>}
      {loading && 'Loading ...'}
      {error && <div>{error}</div>}
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
          <p>({getYear()})</p>
          <p>User Score: {movie.popularity}</p>
          <div className="movie_overview">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h2>Additional Information</h2>
        <NavLink
          to='reviews'
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          state={{back}}
        >
          <p className={css.reviews}>Reviews</p>
        </NavLink>

        <NavLink
          to='cast'
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
          state={{back}}
        >
          <p className={css.cast}>Cast</p>
        </NavLink>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
