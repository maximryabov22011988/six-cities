import * as React from 'react';

import Page from '../components/Page';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Content from '../components/Content';

import SignInForm from './signIn/SignInForm';

import { onSignIn } from '../interfaces';

interface Props {
  onSignIn: onSignIn,
}

function SignIn({ onSignIn }: Props) {
  return (
    <Page parentClassName="login">
      <Header logo={<Logo position="header" />} />
      <Content parentClassName="login">
        <SignInForm onSignIn={onSignIn} />
      </Content>
    </Page>
  );
}

export default SignIn;
