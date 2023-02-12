import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './Header/Header';
// import HomePage from 'pages/HomePage/HomePage';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from '../pages/MovieDatails/MovieDetails';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast' /* webpackChunkName: "Cast" */));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId/" element={<MovieDetails />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Route>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};
