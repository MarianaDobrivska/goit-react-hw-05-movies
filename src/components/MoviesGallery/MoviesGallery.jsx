import { getTrendingMovies } from 'API/Themovied';
import { useEffect, useState } from 'react';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MoviesGallery = ({ setTotalPages, search }) => {
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
      <ul>
        {movies.map(movie => (
          <MoviesGalleryItem key={movie.id} name={movie.title} id={movie.id} />
        ))}
      </ul>
      <ToastContainer />
    </>
  );
};
