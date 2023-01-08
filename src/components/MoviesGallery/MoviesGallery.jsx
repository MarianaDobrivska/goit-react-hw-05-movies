import { getTrendingMovies } from 'API/Themovied';
import { useEffect, useState } from 'react';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './MoviesGallery.module.css';

export const MoviesGallery = ({ setTotalPages, search, state }) => {
  const [movies, setMovies] = useState([]);
  const page = Number(search.get('page'));

  useEffect(() => {
    getTrendingMovies(page)
      .then(({ data }) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => {
        toast.error('Sorry, something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, [page, setTotalPages]);

  return (
    <>
      <ul className={s.galleryWrapper}>
        {movies.map(movie => (
          <MoviesGalleryItem
            key={movie.id}
            name={movie.title}
            id={movie.id}
            state={state}
          />
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};

MoviesGallery.propTypes = {
  setTotalPages: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};
