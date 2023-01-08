import s from './TextComposition.module.css';
import PropTypes from 'prop-types';

export const HeadingTitle = ({ title }) => {
  return <h1 className={s.headingTitle}>{title}</h1>;
};
export const Title = ({ title }) => {
  return <h2 className={s.title}> {title}</h2>;
};

export const TextComposition = ({ title, text }) => {
  return (
    <div>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}> {text}</p>
    </div>
  );
};

HeadingTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
TextComposition.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};
