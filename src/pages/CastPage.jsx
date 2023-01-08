import { getMovieCredits } from 'API/Themovied';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import placeholder from '../data/No-Image-Placeholder.png';
import {
  TextComposition,
  Title,
} from 'components/TextComposition/TextComposition';
import { Picture } from 'components/Picture/Picture';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CastPage = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    getMovieCredits(movieId)
      .then(({ data }) => {
        setCastInfo(data.cast);
      })
      .catch(error => {
        toast.error('Sorry, something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, [movieId]);

  return (
    <div>
      {castInfo.length > 0 ? (
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {castInfo.slice(0, 30).map(el => (
            <li key={el.id} style={{ width: '150px' }}>
              {el.profile_path ? (
                <Picture
                  path={el.profile_path}
                  width={150}
                  alt={el.original_name}
                />
              ) : (
                <Picture
                  placeholder={placeholder}
                  width={150}
                  alt="default image"
                  height="225"
                />
              )}

              <TextComposition
                title={el.original_name}
                text={`Character: ${el.character}`}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Title title="Cast is temporarily unavailable." />
      )}
      <ToastContainer />
    </div>
  );
};
