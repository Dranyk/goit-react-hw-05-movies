import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'components/api';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        const res = await fetchMoviesCredits(movieId);
        setCast(res);
      } catch (error) {
        setError('Ooops. Something went wrong...');
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && 'Loading...'}
      {error && <div>{error}</div>}
      <ul>
        {cast.map(({ profile_path, name, character,  cast_id }) => (
        <li  key={cast_id}>
          <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt={name} />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
          ))
        }
      </ul>
    </>
  );
};

export default Cast;
