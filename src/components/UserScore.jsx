import PropTypes from 'prop-types';

export const UserScore = ({ title, score }) => {
  return (
    <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>
      {title}
      <span
        style={{
          padding: '5px',
          width: '100px',
          height: '100px',
          borderRadius: '4px',
          backgroundColor: 'rgb(60, 141, 223)',
          color: 'white',
          fontSize: '13px',
        }}
      >
        {score}
      </span>
    </h2>
  );
};

UserScore.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};
