export const HeadingTitle = ({ title }) => {
  return <h1>{title}</h1>;
};
export const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

export const TextComposition = ({ title, text }) => {
  return (
    <>
      <h2>{title}</h2>
      <p> {text}</p>
    </>
  );
};
