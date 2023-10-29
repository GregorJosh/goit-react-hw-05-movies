import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjg0NzNlZDkyMjFiZjUxZjY1ZjYyMzFmZWM1ZGNhNiIsInN1YiI6IjY0YjlhODFmMzAwOWFhMDBjNWI3OTc1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-kZ0dgbGdwQSV2jydkgQdOLeOv-bFL8HeHwItjiQ9dk';

const base = 'https://api.themoviedb.org';
const path = '/3/';
const url = new URL(path, base);

function setImagesSize(results, fieldName, size) {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/';

  if (Array.isArray(results)) {
    return results.map(result => {
      if (result[fieldName]) {
        result[fieldName] = imageBaseUrl + size + result[fieldName];
      }

      return result;
    });
  } else {
    const result = results;

    if (result[fieldName]) {
      result[fieldName] = imageBaseUrl + size + result[fieldName];
    }

    return result;
  }
}

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

  return setImagesSize(movies.results, 'poster_path', 'w185');
}

export async function getMoviesByKeyword(keyword) {
  const movies = await sendRequest('search/movie?query=' + keyword);

  return setImagesSize(movies.results, 'poster_path', 'w185');
}

export async function getMovieById(movieId) {
  const movie = await sendRequest('movie/' + movieId);

  return setImagesSize(movie, 'poster_path', 'w185');
}

export async function getMovieCredits(movieId) {
  const credits = await sendRequest(`movie/${movieId}/credits`);

  return setImagesSize(credits.cast, 'profile_path', 'w185');
}

export async function getMovieReviews(movieId) {
  const reviews = await sendRequest(`movie/${movieId}/reviews`);

  return reviews.results;
}
