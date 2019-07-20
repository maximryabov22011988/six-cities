import React from 'react';
import PropTypes from 'prop-types';

import Page from '../components/Page';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Content from '../components/Content';

import SignInForm from './signIn/SignInForm';

const propTypes = {
  onSignIn: PropTypes.func.isRequired,
};

function SignIn({ onSignIn }) {
  return (
    <Page parentClassName="login">
      <Header logo={<Logo position="header" />} />
      <Content parentClassName="login">
        <SignInForm onSignIn={onSignIn} />
      </Content>
    </Page>
  );
}

SignIn.propTypes = propTypes;

export default SignIn;
