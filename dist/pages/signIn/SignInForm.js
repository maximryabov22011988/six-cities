'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const Form_1 = require('../../components/Form');
const Field_1 = require('../../components/Field');
const Button_1 = require('../../components/Button');
const fieldClasses = {
  wrap: 'login__input-wrapper',
  label: 'visually-hidden',
  input: 'login__input',
};
const field = {
  email: {
    label: 'E-mail',
    type: 'email',
    maxLength: 120,
    name: 'email',
    placeholder: 'Email',
    required: true,
  },
  password: {
    label: 'Password',
    type: 'password',
    minLength: 3,
    name: 'password',
    placeholder: 'Password',
    required: true,
  },
};
class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.handleChange = (evt) => {
      const { name, value } = evt.target;
      this.setState({
        [name]: value,
      });
    };
    this.handleSubmit = (evt) => {
      const { onSignIn } = this.props;
      evt.preventDefault();
      const user = new FormData(evt.target);
      onSignIn(user.get('email'), user.get('password'));
    };
    this.state = {
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    const emailInput = this.emailRef.current;
    if (emailInput) {
      emailInput.focus();
    }
  }
  isLocked() {
    const { email, password } = this.state;
    return !(email.length >= 5 && password.length >= 3);
  }
  render() {
    const { email, password } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', { className: 'login__title' }, 'Sign in'),
      React.createElement(
        Form_1.default,
        { className: 'login__form', method: 'post', onSubmit: this.handleSubmit },
        React.createElement(
          Field_1.default,
          Object.assign({}, field.email, {
            classes: fieldClasses,
            ref: this.emailRef,
            value: email,
            onChange: this.handleChange,
          })
        ),
        React.createElement(
          Field_1.default,
          Object.assign({}, field.password, { classes: fieldClasses, value: password, onChange: this.handleChange })
        ),
        React.createElement(
          Button_1.default,
          { className: 'login__submit form__submit', disabled: this.isLocked(), type: 'submit' },
          'Sign in'
        )
      )
    );
  }
}
exports.default = SignInForm;
//# sourceMappingURL=SignInForm.js.map
