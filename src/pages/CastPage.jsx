import { getMovieCredits } from 'API/Themovied';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import placeholder from '../data/No-Image-Placeholder.png';
import {
  TextComposition,
  Title,
} from 'components/TextComposition/TextComposition';
import { Picture } from 'components/Picture/Picture';

export const CastPage = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState([]);
  useEffect(() => {
    getMovieCredits(movieId).then(({ data }) => {
      setCastInfo(data.cast);
    });
  }, [movieId]);

  return (
    <>
      {castInfo.length > 0 ? (
        <ul>
          {castInfo.slice(0, 20).map(el => (
            <li key={el.id}>
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
    </>
  );
};
