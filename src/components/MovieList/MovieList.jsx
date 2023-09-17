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

export default MovieList;
