import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  alt: PropTypes.string,
  height: PropTypes.string,
  isPro: PropTypes.bool,
  name: PropTypes.string,
  parentClassName: PropTypes.string,
  showStatus: PropTypes.bool,
  src: PropTypes.string,
  width: PropTypes.string,
};

const defaultProps = {
  isPro: false,
  showStatus: false,
};

function Avatar({ alt, height, isPro, name, parentClassName, showStatus, src, width }) {
  return (
    <React.Fragment>
      <div
        className={`${parentClassName}__avatar-wrapper user__avatar-wrapper ${isPro &&
          `${parentClassName}__avatar-wrapper--pro`}`}
      >
        <img alt={alt} className="reviews__avatar user__avatar" height={height} src={src} width={width} />
      </div>
      {name && <span className={`${parentClassName}__user-name`}>{name}</span>}
      {showStatus && <span className={`${parentClassName}__user-status`}>Pro</span>}
    </React.Fragment>
  );
}

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
