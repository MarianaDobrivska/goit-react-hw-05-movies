import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Pagination } from 'components/Pagination/Pagination';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const HomePage = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useSearchParams({ page: 1 });

  const handlePageClick = e => {
    setSearch({ page: e.selected + 1 });
  };
  return (
    <div>
      <h2>Trending today</h2>
      <MoviesGallery setTotalPages={setTotalPages} search={search} />
      <Pagination handlePageClick={handlePageClick} pages={totalPages} />
    </div>
  );
};
