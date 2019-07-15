import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  isShow: PropTypes.bool.isRequired,
  name: PropTypes.string,
  parentClassName: PropTypes.string
};

function Label({ isShow, name, parentClassName }) {
  return (
    isShow && (
      <div className={`${parentClassName}__mark`}>
        <span>{name}</span>
      </div>
    )
  );
}

Label.propTypes = propTypes;

export default Label;
