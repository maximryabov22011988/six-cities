import * as React from 'react';

interface Props {
  alt: string;
  height?: string;
  isPro?: boolean;
  name?: string;
  parentClassName: string;
  showStatus?: boolean;
  src: string;
  width?: string;
}

function Avatar({ alt, height, isPro = false, name, parentClassName, showStatus = false, src, width }: Props) {
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

export default Avatar;
