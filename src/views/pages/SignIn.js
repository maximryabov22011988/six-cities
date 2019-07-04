import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Field from '../components/Field';
import Button from '../components/Button';

import Content from './signIn/Content';

const propTypes = {
  onLogin: PropTypes.func.isRequired
};

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

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
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
    const { onLogin } = this.props;
    evt.preventDefault();
    const user = new FormData(evt.target);
    onLogin(user.get('email'), user.get('password'));
  };

  isValidForm() {
    const { email, password } = this.state;
    return !(email.isValid && password.isValid);
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="page page--gray page--login">
        <Header logo={<Logo />} />
        <Content>
          <h1 className="login__title">Sign in</h1>
          <Form
            className="login__form"
            method="post"
            onSubmit={this.handleSubmit}
          >
            <Field
              classes={fieldClasses}
              label={field.email.label}
              type={field.email.type}
              name={field.email.name}
              placeholder={field.email.placeholder}
              required={field.email.required}
              value={email.value}
              onChange={this.handleChange}
            />
            <Field
              classes={fieldClasses}
              label={field.password.label}
              type={field.password.type}
              name={field.password.name}
              placeholder={field.password.placeholder}
              required={field.password.required}
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
        </Content>
      </div>
    );
  }
}

SignIn.propTypes = propTypes;

export default SignIn;
