import { Link } from 'react-router-dom';
import { FcFilm } from 'react-icons/fc';
import s from './MoviesGalleryItem.module.css';
import PropTypes from 'prop-types';

export const MoviesGalleryItem = ({ id, name, state }) => {
  return (
    <li className={s.galleryItemWrapper}>
      <Link to={`/movies/${id}`} className={s.linkWrapper} state={state}>
        <FcFilm />
        <p>{name}</p>
      </Link>
    </li>
  );
};

MoviesGalleryItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};
