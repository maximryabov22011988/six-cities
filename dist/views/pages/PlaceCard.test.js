"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const redux_thunk_1 = require("redux-thunk");
const react_router_dom_1 = require("react-router-dom");
const axios_1 = require("axios");
const PlaceCard_1 = require("./PlaceCard");
const Map_1 = require("../components/Map");
const user_1 = require("../mocks/user");
const offer_1 = require("../mocks/offer");
const reviews_1 = require("../../state/reviews");
const name_spaces_1 = require("../../state/name-spaces");
const reducer = redux_1.combineReducers({
    [name_spaces_1.default.REVIEWS]: reviews_1.default
});
const store = redux_1.createStore(reducer, redux_1.applyMiddleware(redux_thunk_1.default.withExtraArgument(axios_1.default)));
it('PlaceCard renders correctly with mandatory props', () => {
    Map_1.default.prototype.componentDidMount = jest.fn();
    const tree = renderer
        .create(React.createElement(react_redux_1.Provider, { store: store },
        React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(PlaceCard_1.PlaceCard, { addOfferToFavorities: jest.fn(), isAuthUser: true, nearOffers: [offer_1.default], offer: offer_1.default, removeOfferFromFavorities: jest.fn(), sendReview: jest.fn(), user: user_1.default })))).toJSON();
    expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=PlaceCard.test.js.map