export const Picture = ({ path, width, alt, placeholder }) => {
  return (
    <img
      src={path ? `https://image.tmdb.org/t/p/w300/${path}` : placeholder}
      width={width}
      alt={alt}
    />
  );
};
