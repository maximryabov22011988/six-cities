'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const propTypes = {
  classes: PropTypes.shape({
    input: PropTypes.string,
    label: PropTypes.string,
    wrap: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
const defaultProps = {
  type: 'text',
};
const Field = function(
  { classes, label, id, type, minLength, maxLength, name, placeholder, disabled, required, value, onChange },
  ref
) {
  return React.createElement(
    'div',
    { className: classnames_1.default(classes.wrap, 'form__input-wrapper') },
    React.createElement('label', { className: classnames_1.default(classes.label, 'form__label'), htmlFor: id }, label),
    React.createElement('input', {
      className: classnames_1.default(classes.input, 'form__input'),
      disabled: disabled,
      id: id,
      maxLength: maxLength,
      minLength: minLength,
      name: name,
      placeholder: placeholder,
      ref: ref,
      required: required,
      type: type,
      value: value,
      onChange: onChange,
    })
  );
};
Field.propTypes = propTypes;
Field.defaultProps = defaultProps;
exports.default = React.forwardRef(Field);
//# sourceMappingURL=Field.js.map
