import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import './Pagination.css';

export const Pagination = ({ handlePageClick, pages }) => {
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pages}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
};

Pagination.propTypes = {
  handlePageClick: PropTypes.func.isRequired,
  pages: PropTypes.number.isRequired,
};
