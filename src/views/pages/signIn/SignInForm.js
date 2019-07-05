import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';
import Field from '../../components/Field';
import Button from '../../components/Button';

const propTypes = {};
const defaultProps = {};

const fieldClasses = {
  wrap: 'login__input-wrapper',
  label: 'visually-hidden',
  input: 'login__input'
};

const field = {
  email: {
    label: 'E-mail',
    type: 'text',
    name: 'email',
    placeholder: 'Email',
    required: true
  },
  password: {
    label: 'Password',
    type: 'text',
    name: 'password',
    placeholder: 'Password',
    required: true
  }
};

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        isValid: true
      },
      password: {
        value: '',
        isValid: true
      }
    };
  }

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value
      }
    }));
  };

  handleSubmit = evt => {
    const { onSignIn } = this.props;
    evt.preventDefault();
    const user = new FormData(evt.target);
    onSignIn(user.get('email'), user.get('password'));
  };

  isValidForm() {
    const { email, password } = this.state;
    return !(email.isValid && password.isValid);
  }

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <h1 className="login__title">Sign in</h1>
        <Form
          className="login__form"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <Field
            {...field.email}
            classes={fieldClasses}
            value={email.value}
            onChange={this.handleChange}
          />
          <Field
            {...field.password}
            classes={fieldClasses}
            value={password.value}
            onChange={this.handleChange}
          />
          <Button
            className="login__submit form__submit"
            type="submit"
            disabled={this.isValidForm()}
          >
            Sign in
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

SignInForm.propTypes = propTypes;
SignInForm.defaultProps = defaultProps;

export default SignInForm;
