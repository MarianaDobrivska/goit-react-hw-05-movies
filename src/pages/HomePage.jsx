import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Pagination } from 'components/Pagination/Pagination';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { HeadingTitle } from 'components/TextComposition/TextComposition';

export const HomePage = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useSearchParams({ page: 1 });

  const handlePageClick = e => {
    setSearch({ page: e.selected + 1 });
  };
  return (
    <div>
      <HeadingTitle title="Trending today" />
      <MoviesGallery setTotalPages={setTotalPages} search={search} />
      <Pagination handlePageClick={handlePageClick} pages={totalPages} />
    </div>
  );
};
