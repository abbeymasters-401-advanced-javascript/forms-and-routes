import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ photoUrl }) => {

  return (
    <figure>
      <img src={photoUrl} alt={name} />
    </figure>
  );
};

Character.propTypes = {
  photoUrl: PropTypes.string
};

export default Character;
