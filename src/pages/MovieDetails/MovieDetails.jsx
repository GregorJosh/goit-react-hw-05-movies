import { useEffect, useState } from 'react';
import {
  useLocation,
  useParams,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';

import { getMovieById } from 'api/api';

import styles from './MovieDetails.module.css';

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
  const { card, content, links, link, active, filters, details } = styles;

  const setClass = ({ isActive }) => (isActive ? active : link);

  useEffect(() => {
    getMovieById(movieId).then(newMovie => setMovie(newMovie));
  }, [movieId]);

  return (
    <>
      <Link className={link} to={backLinkHRef}>
        &larr; Go Back
      </Link>
      <section className={card}>
        <img src={poster_path} alt={`${title} movie poster`} />
        <div className={content}>
          <header>
            <h1>{`${title} (${release_date})`}</h1>
            <p>User score: {vote_average}</p>
          </header>
          <div>
            <h3>Overview: </h3>
            <p>{overview}</p>
          </div>
          <div>
            <h3>Genres: </h3>
            <p>{genres.map(genre => genre.name + ' ')}</p>
          </div>
        </div>
      </section>
      <div className={filters}>
        <p>Additional information: </p>
        <ul className={links}>
          <li>
            <NavLink
              className={setClass}
              to="cast"
              state={{ from: backLinkHRef }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={setClass}
              to="reviews"
              state={{ from: backLinkHRef }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <section className={details}>
        <Outlet />
      </section>
    </>
  );
};

export default MovieDetails;
