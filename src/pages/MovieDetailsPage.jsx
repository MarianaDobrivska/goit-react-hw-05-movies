import { useParams, NavLink, Outlet } from 'react-router-dom';
import { getMovieID } from 'API/Themovied';
import {
  TextComposition,
  HeadingTitle,
  Title,
} from 'components/TextComposition/TextComposition';
import { useEffect, useState } from 'react';

export const MovieDetailsPage = () => {
  const [movieInfo, setMovieinfo] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieID(movieId).then(({ data }) => {
      setMovieinfo(data);
    });
  }, [movieId]);

  return (
    <div>
      <button type="button">Go back</button>
      {movieInfo && (
        <>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`}
              alt={movieInfo.original_title}
              width="240"
            />
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
    </div>
  );
};

/* <p>User score: {movieInfo.vote_average.toFixed(2)}</p> */
