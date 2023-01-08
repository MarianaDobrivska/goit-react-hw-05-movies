import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { SearchMoviePage } from 'pages/SearchMoviePage';

const CastPage = lazy(() =>
  import('pages/CastPage').then(module => ({
    ...module,
    default: module.CastPage,
  }))
);

const ReviewsPage = lazy(() =>
  import('pages/ReviewsPage').then(module => ({
    ...module,
    default: module.ReviewsPage,
  }))
);

export const App = () => {
  return (
    <div style={{ padding: '30px', position: 'relative' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<SearchMoviePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
