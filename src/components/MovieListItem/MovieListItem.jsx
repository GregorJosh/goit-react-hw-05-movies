import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import styles from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const { item, image } = styles;
  const { pathname, search } = useLocation();

  return (
    <li className={item}>
      <Link
        to={'/movies/' + id}
        state={{ from: pathname + search }}
      >
        <img className={image} src={poster_path} alt={title + ' movie poster'} />
      </Link>
    </li>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default MovieListItem;
