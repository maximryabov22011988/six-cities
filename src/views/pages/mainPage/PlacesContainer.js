import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  leftPanel: PropTypes.element,
  rightPanel: PropTypes.element
};

const defaultProps = {
  leftPanel: null,
  rightPanel: null
};

function PlacesContainer({ leftPanel, rightPanel }) {
  return (
    <div className="cities__places-wrapper">
      <div className="cities__places-container container">
        {leftPanel}
        <div className="cities__right-section">
          <section className="cities__map map">{rightPanel}</section>
        </div>
      </div>
    </div>
  );
}

PlacesContainer.propTypes = propTypes;
PlacesContainer.defaultProps = defaultProps;

export default PlacesContainer;
