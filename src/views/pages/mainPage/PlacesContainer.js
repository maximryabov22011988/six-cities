import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const propTypes = {
  isEmpty: PropTypes.bool,
  leftPanel: PropTypes.element,
  rightPanel: PropTypes.element,
};

const defaultProps = {
  leftPanel: null,
  rightPanel: null,
};

function PlacesContainer({ isEmpty, leftPanel, rightPanel }) {
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

PlacesContainer.propTypes = propTypes;
PlacesContainer.defaultProps = defaultProps;

export default PlacesContainer;
