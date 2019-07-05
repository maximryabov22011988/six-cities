import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Logo from '../components/Logo';

import Content from './signIn/Content';
import SignInForm from './signIn/SignInForm';

const propTypes = {
  onSignIn: PropTypes.func.isRequired
};

function SignIn({ onSignIn }) {
  return (
    <div className="page page--gray page--login">
      <Header logo={<Logo />} />
      <Content>
        <SignInForm onSignIn={onSignIn} />
      </Content>
    </div>
  );
}

SignIn.propTypes = propTypes;

export default SignIn;
