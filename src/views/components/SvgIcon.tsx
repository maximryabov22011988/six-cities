import * as React from 'react';

import cn from 'classnames';

const propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  isShowLabel: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
};

function SvgIcon({ className, height, isShowLabel, label, name, width }) {
  return (
    <React.Fragment>
      <svg className={className} height={height} width={width}>
        <use xlinkHref={`#${name}`} />
      </svg>
      <span className={cn(!isShowLabel && 'visually-hidden')}>{label}</span>
    </React.Fragment>
  );
}

SvgIcon.propTypes = propTypes;

export default SvgIcon;
