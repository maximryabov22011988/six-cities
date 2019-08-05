import * as React from 'react';
import cn from 'classnames';

import getDisplayName from '../utils/getDisplayName';

function withActiveItem(WrappedComponent) {
  function WithActiveItem(props) {
    const { className, isActive, children } = props;

    return (
      <WrappedComponent {...props} className={cn(className, isActive && `${className}--active`)}>
        {children}
      </WrappedComponent>
    );
  }

  WithActiveItem.displayName = `WithActiveItem(${getDisplayName(WrappedComponent)})`;

  return WithActiveItem;
}

export default withActiveItem;
