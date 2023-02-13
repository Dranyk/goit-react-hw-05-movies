import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import Notification from 'components/Notification/Notification';
import Loader from 'components/Loader/Loader';


const MovieList = ({ movies, loading, error }) => {
  const location = useLocation()

  const elements = movies.map(({ id, title, name }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  ));
  return (
    <>
      <div>
      <ul>{elements}</ul>
      {loading && <Loader />}
      {error && <h2> <Notification message="Oooooops. Sorry, but something went wrong" /></h2>}
    </div>
    </>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};