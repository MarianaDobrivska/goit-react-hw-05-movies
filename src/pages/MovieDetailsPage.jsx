import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieID } from 'API/Themovied';
import {
  TextComposition,
  HeadingTitle,
  Title,
} from 'components/TextComposition/TextComposition';
import { Picture } from 'components/Picture/Picture';
import placeholder from '../data/No-Image-Placeholder.png';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MovieDetailsPage = () => {
  const [movieInfo, setMovieinfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieID(movieId)
      .then(({ data }) => {
        setMovieinfo(data);
      })
      .catch(error => {
        toast.error('Sorry, something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, [movieId]);

  return (
    <div>
      <button type="button">Go back</button>
      {movieInfo && (
        <>
          <div>
            {movieInfo.poster_path ? (
              <Picture
                path={movieInfo.poster_path}
                alt={movieInfo.original_title}
                width={240}
              />
            ) : (
              <Picture
                placeholder={placeholder}
                alt={movieInfo.original_title}
                width={240}
              />
            )}

            <div>
              <HeadingTitle
                title={`${
                  movieInfo.original_title
                } (${movieInfo.release_date.slice(0, 4)})`}
              />
              <TextComposition
                title="User score:"
                text={movieInfo.vote_average.toFixed(2)}
              />
              <TextComposition title="Overview" text={movieInfo.overview} />
              <TextComposition
                title="Genres"
                text={movieInfo.genres.map(genre => genre.name + '   ')}
              />
            </div>
          </div>

          <div>
            <Title title="Additional information" />
            <ul>
              <li>
                <NavLink to="cast">Cast</NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews</NavLink>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

/* <p>User score: {movieInfo.vote_average.toFixed(2)}</p> */
