import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

import { getMoviesByKeyword } from 'api/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const keywords = searchParams.get('query');

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const keywords = form.elements.query.value;

    setSearchParams({query: keywords});

    form.reset();
  };

  useEffect(() => {
    if (keywords) {
        getMoviesByKeyword(keywords).then(movies => setMovies(movies));
    }

  }, [keywords]);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="query" />
        <button>🔎</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={'/movies/' + movie.id} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
