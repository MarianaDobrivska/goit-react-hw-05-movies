import { getMovieReviews } from 'API/Themovied';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  TextComposition,
  Title,
} from 'components/TextComposition/TextComposition';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ data }) => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <TextComposition
                title={`Author: ${review.author}`}
                text={review.content}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Title title="We don't have any reviews for this movie" />
      )}
    </>
  );
};
