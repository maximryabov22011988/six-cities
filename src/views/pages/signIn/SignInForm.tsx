import * as React from 'react';

import Form from '../../components/Form';
import Field from '../../components/Field';
import Button from '../../components/Button';

import { onSignIn } from '../../types';

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

interface Props {
  onSignIn: onSignIn;
}

interface State {
  email: string;
  password: string;
}

class SignInForm extends React.Component<Props, State> {
  emailRef = React.createRef<HTMLInputElement>();

  constructor(props) {
    super(props);
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

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({
      [name]: value,
    } as Pick<State, keyof State>);
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
            ref={this.emailRef}
            value={email}
            onChange={this.handleChange}
          />
          <Field {...field.password} classes={fieldClasses} value={password} onChange={this.handleChange} />
          <Button className="login__submit form__submit" disabled={this.isLocked()} type="submit">
            Sign in
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default SignInForm;
