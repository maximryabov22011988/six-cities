import * as React from 'react';
import cn from 'classnames';

interface Props {
  isEmpty: boolean;
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}

function PlacesContainer({ isEmpty, leftPanel = null, rightPanel = null }: Props) {
  return (
    <div className="cities__places-wrapper">
      <div className={cn('cities__places-container container', isEmpty && 'cities__places-container--empty')}>
        {leftPanel}
        <div className="cities__right-section">
          {!isEmpty && <section className="cities__map map">{rightPanel}</section>}
        </div>
      </div>
    </div>
  );
}

export default PlacesContainer;
