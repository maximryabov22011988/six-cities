import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';
import Field from '../../components/Field';
import Button from '../../components/Button';

const propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

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

const emailRef = React.createRef();

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidMount() {
    emailRef.current.focus();
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    const { onSignIn } = this.props;
    evt.preventDefault();
    const user = new FormData(evt.target);
    onSignIn(user.get('email'), user.get('password'));
  };

  isLocked() {
    const { email, password } = this.state;
    return !(email.length >= 5 && password.length >= 3);
  }

  render() {
    const { email, password } = this.state;

    return (
      <React.Fragment>
        <h1 className="login__title">Sign in</h1>
        <Form className="login__form" method="post" onSubmit={this.handleSubmit}>
          <Field
            {...field.email}
            classes={fieldClasses}
            ref={emailRef}
            value={email.value}
            onChange={this.handleChange}
          />
          <Field {...field.password} classes={fieldClasses} value={password.value} onChange={this.handleChange} />
          <Button className="login__submit form__submit" disabled={this.isLocked()} type="submit">
            Sign in
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

SignInForm.propTypes = propTypes;

export default SignInForm;
