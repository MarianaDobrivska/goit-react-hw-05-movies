import PropTypes from 'prop-types';

export const Picture = ({ path, width, alt, placeholder, height }) => {
  return (
    <img
      src={path ? `https://image.tmdb.org/t/p/w300/${path}` : placeholder}
      width={width}
      alt={alt}
      height={height ? height : 'auto'}
    />
  );
};

Picture.propTypes = {
  path: PropTypes.string,
  width: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
