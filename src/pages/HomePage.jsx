import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Pagination } from 'components/Pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import { HeadingTitle } from 'components/TextComposition/TextComposition';

export const HomePage = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useSearchParams({ page: 1 });
  const location = useLocation();

  const handlePageClick = e => {
    setSearch({ page: e.selected + 1 });
  };
  return (
    <div style={{ marginTop: '85px' }}>
      <HeadingTitle title="Trending today" />
      <MoviesGallery
        setTotalPages={setTotalPages}
        search={search}
        state={{ from: location }}
      />
      <Pagination handlePageClick={handlePageClick} pages={totalPages} />
    </div>
  );
};
