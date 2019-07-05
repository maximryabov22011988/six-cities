import { createSelector } from 'reselect';

import nameSpace from '../name-spaces';

const getReadyApp = state => state[nameSpace.APP].isReady;
const isAuth = state => state[nameSpace.APP].auth.isSignIn;
const getUserInfo = state => state[nameSpace.APP].auth.user;

const isReadyApp = createSelector(
  [getReadyApp],
  isReady => isReady
);

const isAuthUser = createSelector(
  [isAuth],
  isAuth => isAuth
);

const getUser = createSelector(
  [getUserInfo],
  user => user
);

export { isReadyApp, isAuthUser, getUser };
