import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'api/api';

import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const { list } = styles;

  useEffect(() => {
    getMovieReviews(movieId).then(reviews => setReviews(reviews));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul className={list}>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
