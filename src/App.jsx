import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
      </Route>
    </Routes>
  );
};

export default App;
