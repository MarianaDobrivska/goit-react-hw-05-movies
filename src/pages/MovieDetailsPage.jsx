import { useParams, Outlet, useLocation, NavLink } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getMovieID } from 'API/Themovied';
import {
  TextComposition,
  HeadingTitle,
  Title,
} from 'components/TextComposition/TextComposition';
import { Picture } from 'components/Picture/Picture';
import { UserScore } from 'components/UserScore';
import { AdditionalInfoNavigation } from 'components/Navigation/MovieInfoNavigation';
import placeholder from '../data/No-Image-Placeholder.png';
import { ToastContainer, toast } from 'react-toastify';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import s from '../components/Navigation/Navigation.module.css';
import 'react-toastify/dist/ReactToastify.css';

export const MovieDetailsPage = () => {
  const [movieInfo, setMovieinfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

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
    <div style={{ marginTop: '85px' }}>
      <NavLink
        to={location?.state?.from}
        className={s.navigationLink}
        style={{
          width: '100px',
          fontSize: '12px',
          marginBottom: '15px',
          scale: '1',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <BsFillArrowLeftCircleFill /> Go back
      </NavLink>
      {movieInfo && (
        <>
          <div style={{ display: 'flex', gap: '20px' }}>
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

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
            >
              <HeadingTitle
                title={`${
                  movieInfo.original_title
                } (${movieInfo.release_date.slice(0, 4)})`}
              />
              <UserScore
                title="User score: "
                score={movieInfo.vote_average.toFixed(2)}
              />
              <TextComposition title="Overview" text={movieInfo.overview} />
              <TextComposition
                title="Genres"
                text={movieInfo.genres.map(genre => genre.name + '   ')}
              />
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <Title title="Additional information" />
            <AdditionalInfoNavigation state={{ from: location.state.from }} />
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
