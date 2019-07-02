import { createSelector } from 'reselect';

import nameSpace from '../name-spaces';

const getReady = state => state[nameSpace.APP].isReady;

const getReadyApp = createSelector(
  [getReady],
  isReady => isReady
);

export { getReadyApp };
