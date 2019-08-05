import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const propTypes = {
  height: PropTypes.string,
  isActive: PropTypes.bool,
  label: PropTypes.string,
  position: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.string,
};

const defaultProps = {
  height: '41',
  label: '6 cities logo',
  src: 'img/logo.svg',
  width: '81',
};

class Logo extends React.PureComponent {
  render() {
    const { position, src, width, height, label, isActive } = this.props;

    const linkClasses = cn(position && `${position}__logo-link`, isActive && `${position}__logo-link--active`);
    const logoClasses = cn(position && `${position}__logo`);

    return isActive ? (
      <div className={linkClasses}>
        <img alt={label} className={logoClasses} height={height} src={src} width={width} />
      </div>
    ) : (
      <Link className={linkClasses} to="/">
        <img alt={label} className={logoClasses} height={height} src={src} width={width} />
      </Link>
    );
  }
}

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
