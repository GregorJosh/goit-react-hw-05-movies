import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(credits => setCast(credits));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ name, credit_id }) => (
        <li key={credit_id}>{name}</li>
      ))}
    </ul>
  );
};

export default Cast;
