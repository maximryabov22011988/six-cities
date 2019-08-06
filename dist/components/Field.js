'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const classnames_1 = require('classnames');
const Field = React.forwardRef(
  (
    { classes, label, id, type = 'text', minLength, maxLength, name, placeholder, disabled, required, value, onChange },
    ref
  ) =>
    React.createElement(
      'div',
      { className: classnames_1.default(classes.wrap, 'form__input-wrapper') },
      React.createElement(
        'label',
        { className: classnames_1.default(classes.label, 'form__label'), htmlFor: id },
        label
      ),
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
    )
);
exports.default = Field;
//# sourceMappingURL=Field.js.map
