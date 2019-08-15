import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
import axiosMock from 'axios';

import { PlaceCard } from './PlaceCard';
import Map from '../components/Map';

import user from '../mocks/user';
import offer from '../mocks/offer';

import reviewsReducer from '../../state/reviews';
import nameSpace from '../../state/name-spaces';

const reducer = combineReducers({
  [nameSpace.REVIEWS]: reviewsReducer
});
const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(axiosMock)));

it('PlaceCard renders correctly with mandatory props', () => {
  Map.prototype.componentDidMount = jest.fn();

  const tree = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <PlaceCard
            addOfferToFavorities={jest.fn()}
            isAuthUser={true}
            nearOffers={[offer]}
            offer={offer}
            removeOfferFromFavorities={jest.fn()}
            sendReview={jest.fn()}
            user={user}
          />
        </BrowserRouter>
      </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
