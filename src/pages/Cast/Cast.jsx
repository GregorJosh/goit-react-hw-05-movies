import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/api';

import styles from './Cast.module.css';

import avatarPlaceholder from 'images/avatar-placeholder.svg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const { list, image } = styles;

  useEffect(() => {
    getMovieCredits(movieId).then(credits => setCast(credits));
  }, [movieId]);

  return (
    <ul className={list}>
      {cast.map(({ name, credit_id, profile_path }) => (
        <li key={credit_id}>
          {profile_path ? (
            <img className={image} src={profile_path} alt={name} />
          ) : (
            <img className={image} src={avatarPlaceholder} alt="Placeholder" />
          )}
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
