'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  isEmpty: PropTypes.bool,
  leftPanel: PropTypes.node,
  rightPanel: PropTypes.node,
};
const defaultProps = {
  leftPanel: null,
  rightPanel: null,
};
function PlacesContainer({ isEmpty, leftPanel, rightPanel }) {
  return React.createElement(
    'div',
    { className: 'cities__places-wrapper' },
    React.createElement(
      'div',
      {
        className: classnames_1.default(
          'cities__places-container container',
          isEmpty && 'cities__places-container--empty'
        ),
      },
      leftPanel,
      React.createElement(
        'div',
        { className: 'cities__right-section' },
        !isEmpty && React.createElement('section', { className: 'cities__map map' }, rightPanel)
      )
    )
  );
}
PlacesContainer.propTypes = propTypes;
PlacesContainer.defaultProps = defaultProps;
exports.default = PlacesContainer;
//# sourceMappingURL=PlacesContainer.js.map
