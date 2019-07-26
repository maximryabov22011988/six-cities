import { createSelector } from 'reselect';

import nameSpace from '../name-spaces';

const getIsReady = createSelector(
  [(state) => state[nameSpace.APP].isReady],
  (isReady) => isReady
);

const getIsAuth = createSelector(
  [(state) => state[nameSpace.APP].auth.isSignIn],
  (isAuth) => isAuth
);

const getUser = createSelector(
  [(state) => state[nameSpace.APP].auth.user],
  (user) => user
);

export { getIsReady, getIsAuth, getUser };
