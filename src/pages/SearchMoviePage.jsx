import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { Pagination } from 'components/Pagination/Pagination';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getSearchedMovies } from 'API/Themovied';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams({ page: 1, query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const location = useLocation();
  const page = Number(search.get('page'));
  const query = search.get('query');

  const handlePageClick = e => {
    setSearch({ page: e.selected + 1, query });
  };
  const handleSearchButtonSubmit = value => {
    setSearch({ page: 1, query: value });
    setMovies([]);
    setTotalPages(0);
  };

  useEffect(() => {
    if (query === '') return;
    getSearchedMovies(query, page)
      .then(({ data }) => {
        if (data.results.length === 0) {
          toast.info(
            `Sorry, there are no images matching your search query '${query}'. Please try again.`,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
          return '';
        }
        setMovies(data.results);
        setTotalPages(data.total_pages);
      })
      .catch(error => {
        toast.error('Sorry, something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, [page, query]);

  return (
    <>
      <div style={{ marginTop: '85px' }}>
        <Searchbar onSubmit={handleSearchButtonSubmit} />
        <ul>
          {movies.map(movie => (
            <MoviesGalleryItem
              name={movie.title}
              id={movie.id}
              key={movie.id}
              state={{ from: location }}
            />
          ))}
        </ul>
        <Pagination handlePageClick={handlePageClick} pages={totalPages} />
      </div>
      <ToastContainer />
    </>
  );
};
