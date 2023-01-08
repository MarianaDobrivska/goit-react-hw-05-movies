import { getMovieReviews } from 'API/Themovied';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  TextComposition,
  Title,
} from 'components/TextComposition/TextComposition';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(({ data }) => {
        setReviews(data.results);
      })
      .catch(error => {
        toast.error('Sorry, something went wrong. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '20px' }}>
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
      <ToastContainer />
    </>
  );
};
