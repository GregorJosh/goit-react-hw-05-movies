import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import styles from './MovieListItem.module.css';

const MovieListItem = ({ movie }) => {
  const { id, title } = movie;
  const { item, link } = styles;
  const { pathname, search } = useLocation();

  return (
    <li className={item}>
      <Link
        className={link}
        to={'/movies/' + id}
        state={{ from: pathname + search }}
      >
        {title}
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
