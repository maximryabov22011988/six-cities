import * as React from 'react';
import cn from 'classnames';

interface Props {
  className?: string,
  height: string,
  isShowLabel?: boolean,
  label?: string,
  name: string,
  width: string,
}

function SvgIcon({ className, height, isShowLabel, label, name, width }: Props) {
  return (
    <React.Fragment>
      <svg className={className} height={height} width={width}>
        <use xlinkHref={`#${name}`} />
      </svg>
      <span className={cn(!isShowLabel && 'visually-hidden')}>{label}</span>
    </React.Fragment>
  );
}

export default SvgIcon;
