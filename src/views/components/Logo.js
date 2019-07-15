import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const propTypes = {
  position: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  isActive: PropTypes.bool,
};

const defaultProps = {
  src: 'img/logo.svg',
  width: '81',
  height: '41',
  label: '6 cities logo',
};

class Logo extends React.PureComponent {
  render() {
    const { position, src, width, height, label, isActive } = this.props;

    const linkClasses = classnames(
      position && `${position}__logo-link`,
      isActive && `${position}__logo-link--active`,
    );
    const logoClasses = classnames(position && `${position}__logo`);

    return isActive ? (
      <div className={linkClasses}>
        <img
          className={logoClasses}
          src={src}
          width={width}
          height={height}
          alt={label}
        />
      </div>
    ) : (
      <Link to="/" className={linkClasses}>
        <img
          className={logoClasses}
          src={src}
          width={width}
          height={height}
          alt={label}
        />
      </Link>
    );
  }
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
