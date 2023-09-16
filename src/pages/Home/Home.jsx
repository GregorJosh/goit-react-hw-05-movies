import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'api/api';

import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(movies => setMovies(movies));
  }, []);

  return <MovieList movies={movies} />;
};

export default Home;
