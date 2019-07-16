import React from 'react';
import classnames from 'classnames';

import getDisplayName from '../utils/getDisplayName';

function withActiveItem(WrappedComponent) {
  function WithActiveItem(props) {
    const { className, isActive, children } = props;

    return (
      <WrappedComponent {...props} className={classnames(className, isActive && `${className}--active`)}>
        {children}
      </WrappedComponent>
    );
  }

  WithActiveItem.displayName = `WithActiveItem(${getDisplayName(WrappedComponent)})`;

  return WithActiveItem;
}

export default withActiveItem;
