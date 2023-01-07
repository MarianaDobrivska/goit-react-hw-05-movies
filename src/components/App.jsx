import { Routes, Route, Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from 'pages/HomePage';
import { MovieDetailsPage } from 'pages/MovieDetailsPage';
import { CastPage } from 'pages/CastPage';
import { ReviewsPage } from 'pages/ReviewsPage';
import { SearchMoviePage } from 'pages/SearchMoviePage';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export const App = () => {
  return (
    <>
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
    </>
  );
};
