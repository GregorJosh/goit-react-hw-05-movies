import PropTypes from 'prop-types';

import MovieListItem from 'components/MovieListItem/MovieListItem';

import styles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const { list } = styles;

  return (
    <ul className={list}>
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default MovieList;
