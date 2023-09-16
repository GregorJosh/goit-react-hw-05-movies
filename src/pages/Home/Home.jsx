import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={'movies/' + movie.id} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
