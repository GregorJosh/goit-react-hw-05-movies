import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getMoviesByKeyword } from 'api/api';

import MovieList from 'components/MovieList/MovieList';

import styles from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keywords = searchParams.get('query');

  const { form, input, button } = styles;

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const keywords = form.elements.query.value;

    if (!keywords) return;

    setSearchParams({ query: keywords });

    form.reset();
  };

  useEffect(() => {
    if (keywords) {
      getMoviesByKeyword(keywords).then(movies => setMovies(movies));
    }
  }, [keywords]);

  return (
    <>
      <form className={form} onSubmit={onSubmit}>
        <input className={input} type="text" name="query" placeholder='Search movies' />
        <button className={button}>🔎</button>
      </form>
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
