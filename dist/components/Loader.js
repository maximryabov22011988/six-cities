'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const react_redux_1 = require('react-redux');
const name_spaces_1 = require('../../state/name-spaces');
const propTypes = {
  isLoading: PropTypes.bool,
};
const wrapStyles = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  zIndex: 10000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255, 0.85)',
};
class Loader extends React.Component {
  render() {
    const { isLoading } = this.props;
    return isLoading
      ? React.createElement(
          'div',
          { style: wrapStyles },
          React.createElement(
            'div',
            { className: 'lds-ellipsis' },
            React.createElement('div', null),
            React.createElement('div', null),
            React.createElement('div', null),
            React.createElement('div', null)
          )
        )
      : null;
  }
}
Loader.propTypes = propTypes;
const mapStateToProps = (state) => ({
  isLoading: state[name_spaces_1.default.APP].isLoading,
});
exports.default = react_redux_1.connect(mapStateToProps)(Loader);
//# sourceMappingURL=Loader.js.map
