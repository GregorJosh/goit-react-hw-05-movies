import { Link, useLocation } from 'react-router-dom';

import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const { list, link } = styles;

  const location = useLocation();

  return (
    <ul className={list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={link}
            to={'/movies/' + movie.id}
            state={{ from: location }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
