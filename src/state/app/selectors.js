import { createSelector } from 'reselect';

import nameSpace from '../name-spaces';

const getReady = state => state[nameSpace.APP].isReady;

const isReadyApp = createSelector(
  [getReady],
  isReady => isReady
);

export { isReadyApp };
