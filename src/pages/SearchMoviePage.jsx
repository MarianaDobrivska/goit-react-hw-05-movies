import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Pagination } from 'components/Pagination/Pagination';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getSearchedMovies } from 'API/Themovied';

export const SearchMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams({ page: 1, query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInpuValue] = useState('');

  const page = Number(search.get('page'));
  const query = search.get('query');

  const handlePageClick = e => {
    setSearch(prevSearch => ({ ...prevSearch, page: e.selected + 1 }));
  };
  const handleSearchButtonSubmit = value => {
    setSearch({ page: 1, query: value });
    setMovies([]);
    setTotalPages(0);
  };

  //   useEffect(() => {
  //     getSearchedMovies(query, page).then(({ data }) => {
  //       console.log(data);
  //     });
  //   }, [page, query]);

  return (
    <>
      <div>
        <Searchbar onSubmit={handleSearchButtonSubmit} />
      </div>
    </>
  );
};
