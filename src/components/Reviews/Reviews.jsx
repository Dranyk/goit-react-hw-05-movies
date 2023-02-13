import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'components/api';

import Notification from 'components/Notification/Notification';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetchMoviesReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <>
      {error && (
        <h2>
          <Notification message="Oooooops. Sorry, but something went wrong" />
        </h2>
      )}
      <ul>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <p>Author: {review.author}</p>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
