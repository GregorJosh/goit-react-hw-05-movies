import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/api';

import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const { list } = styles;

  useEffect(() => {
    getMovieCredits(movieId).then(credits => setCast(credits));
  }, [movieId]);

  return (
    <ul className={list}>
      {cast.map(({ name, credit_id, profile_path }) => (
        <li key={credit_id}>
          <img src={profile_path} alt={name} />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
