import * as React from 'react';

interface Props {
  isShow: boolean,
  name: string,
  parentClassName: string,
}

function Label({ isShow, name, parentClassName }: Props) {
  return (
    isShow && (
      <div className={`${parentClassName}__mark`}>
        <span>{name}</span>
      </div>
    )
  );
}

export default Label;
