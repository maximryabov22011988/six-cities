import { createSelector } from 'reselect';

import nameSpace from '../name-spaces';

const getReadyApp = state => state[nameSpace.APP].isReady;

const isReadyApp = createSelector(
  [getReadyApp],
  isReady => isReady
);

export { isReadyApp };
