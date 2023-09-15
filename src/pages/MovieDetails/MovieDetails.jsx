import { useEffect, useState } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';

import { getMovieById } from 'api/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({
    poster_path: '',
    title: '',
    release_date: '',
    vote_average: '',
    overview: '',
    genres: [],
  });

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHRef = location.state?.from ?? '/';

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  useEffect(() => {
    getMovieById(movieId).then(newMovie => setMovie(newMovie));
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHRef}>&larr; Go Back</Link>
      <div>
        <img src={poster_path} alt={`${title} movie poster`} />
        <div>
          <ul>
            <li>
              <h1>{`${title} (${release_date})`}</h1>
              <p>User score: {vote_average}</p>
            </li>
            <li>
              <h3>Overview: </h3>
              <p>{overview}</p>
            </li>
            <li>
              <h3>Genres: </h3>
              <p>{genres.map(genre => genre.name + ' ')}</p>
            </li>
          </ul>
        </div>
      </div>
      <p>Additional information: </p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHRef }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHRef }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
