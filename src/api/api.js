import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjg0NzNlZDkyMjFiZjUxZjY1ZjYyMzFmZWM1ZGNhNiIsInN1YiI6IjY0YjlhODFmMzAwOWFhMDBjNWI3OTc1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kZ0dgbGdwQSV2jydkgQdOLeOv-bFL8HeHwItjiQ9dk';

const host = 'api.themoviedb.org';
const base = 'https://' + host;
const path = '/3/';
const url = new URL(path, base);

async function sendRequest(path) {
  try {
    const response = await axios({
      method: 'get',
      url: url.href + path,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_KEY,
      },
    });

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.error(
        'Axios: Request made but the server responded with an error.'
      );
    } else if (error.request) {
      console.error(
        'Axios: Request made but no response is received from the server.'
      );
    } else {
      console.error('Axios: Error occured while setting up the request.');
      console.error(error);
    }
  }
}

export async function getTrendingMovies() {
  const movies = await sendRequest('trending/movie/day');

  return movies.results;
}

export async function getMoviesByKeyword(keyword) {
  const movies = await sendRequest('search/movie?query=' + keyword);

  return movies.results;
}

export async function getMovieById(movieId) {
  const movie = await sendRequest('movie/' + movieId);

  if (movie.poster_path) {
    movie.poster_path = 'http://image.tmdb.org/t/p/w185' + movie.poster_path;
  }

  return movie;
}

export async function getMovieCredits(movieId) {
  const credits = await sendRequest(`movie/${movieId}/credits`);

  return credits.cast.map(cast => {
    if (cast.profile_path) {
      cast.profile_path = 'http://image.tmdb.org/t/p/w185' + cast.profile_path;
    }

    return cast;
  });
}

export async function getMovieReviews(movieId) {
  const reviews = await sendRequest(`movie/${movieId}/reviews`);

  return reviews.results;
}
