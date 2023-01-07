import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

export function getTrendingMovies(page = 1) {
  const params = {
    api_key: '2ca2fa90c9dc265ce4ea7dec89cd34fb',
    page,
  };

  const data = axios
    .get(`/3/trending/movie/day`, { params })
    .then(data => data);

  return data;
}

export function getSearchedMovies(query, page = 1) {
  const params = {
    api_key: '2ca2fa90c9dc265ce4ea7dec89cd34fb',
    page,
    query,
  };

  const data = axios.get(`/3/search/movie`, { params }).then(data => data);
  return data;
}

export function getMovieID(id) {
  const params = {
    api_key: '2ca2fa90c9dc265ce4ea7dec89cd34fb',
  };

  const data = axios.get(`/3/movie/${id}?`, { params }).then(data => data);
  return data;
}

export function getMovieCredits(id) {
  const params = {
    api_key: '2ca2fa90c9dc265ce4ea7dec89cd34fb',
  };

  const data = axios
    .get(`/3/movie/${id}/credits`, { params })
    .then(data => data);
  return data;
}

export function getMovieReviews(id) {
  const params = {
    api_key: '2ca2fa90c9dc265ce4ea7dec89cd34fb',
  };

  const data = axios
    .get(`/3/movie/${id}/reviews`, { params })
    .then(data => data);
  return data;
}
