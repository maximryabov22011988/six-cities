import * as React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  height?: string;
  isActive?: boolean;
  label?: string;
  position: string;
  src?: string;
  width?: string;
}

class Logo extends React.PureComponent<Props> {
  render() {
    const {
      position,
      src = 'img/logo.svg',
      width = '81',
      height = '41',
      label = '6 cities logo',
      isActive,
    } = this.props;

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

export default Logo;
