'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  children: PropTypes.node,
  isEmpty: PropTypes.bool,
};
const defaultProps = {
  children: null,
};
function Content({ children, isEmpty }) {
  return React.createElement(
    'main',
    { className: classnames_1.default('page__main page__main--index', isEmpty && 'page__main--index-empty') },
    React.createElement('h1', { className: 'visually-hidden' }, 'Cities'),
    children
  );
}
Content.propTypes = propTypes;
Content.defaultProps = defaultProps;
exports.default = Content;
//# sourceMappingURL=Content.js.map
