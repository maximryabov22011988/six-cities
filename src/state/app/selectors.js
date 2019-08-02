import nameSpace from '../name-spaces';

const getIsReady = (state) => state[nameSpace.APP].isReady;
const getIsAuth = (state) => state[nameSpace.APP].auth.isSignIn;
const getUser = (state) => state[nameSpace.APP].auth.user;

export { getIsReady, getIsAuth, getUser };
