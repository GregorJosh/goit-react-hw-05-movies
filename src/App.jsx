import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Movies from 'pages/Movies/Movies';

const Layout = lazy(() => import('./components/Layout/Layout'));

lazy(() => import('./components/Cast/Cast'));
lazy(() => import('./components/Reviews/Reviews'));

lazy(() => import('./pages/Home/Home'));
lazy(() => import('./pages/Movies/Movies'));
lazy(() => import('./pages/MovieDetails/MovieDetails'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
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
    </Suspense>
  );
};

export default App;
