import { Link } from 'react-router-dom';

export const MoviesGalleryItem = ({ id, name }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>
        <p>{name}</p>
      </Link>
    </li>
  );
};
