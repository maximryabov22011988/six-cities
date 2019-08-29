"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
const PlaceCard_1 = require("./PlaceCard");
const offer_1 = require("../../mocks/offer");
const { shallow } = Enzyme;
Enzyme.configure({ adapter: new Adapter() });
let wrapper;
let props;
beforeEach(() => {
    props = {
        className: 'cities',
        offer: offer_1.default,
        onAddToFavorities: jest.fn(),
        onRemoveFromFavorities: jest.fn(),
    };
    wrapper = shallow(React.createElement(PlaceCard_1.default, Object.assign({}, props)));
});
describe('PlaceCard rendering', () => {
    it('should have CSS-class ".cities__place-card"', () => {
        expect(wrapper.find('article').hasClass('cities__place-card')).toBeTruthy();
    });
    it('should have CSS-class ".near-places__card"', () => {
        wrapper = shallow(React.createElement(PlaceCard_1.default, Object.assign({}, props, { className: "near-places" })));
        expect(wrapper.find('article').hasClass('near-places__card')).toBeTruthy();
    });
    it('should have CSS-class ".favorites__card"', () => {
        wrapper = shallow(React.createElement(PlaceCard_1.default, Object.assign({}, props, { className: "favorites" })));
        expect(wrapper.find('article').hasClass('favorites__card')).toBeTruthy();
    });
});
describe('PlaceCard interactions', () => {
    it('Click on the image link in PlaceCard should work correctly', () => {
        const handleActiveOfferClick = jest.fn();
        wrapper = shallow(React.createElement(PlaceCard_1.default, Object.assign({}, props, { onActiveOfferClick: handleActiveOfferClick })));
        wrapper.find('.place-card__image-wrapper a').simulate('click', 12);
        expect(handleActiveOfferClick.mock.calls[0][0]).toBe(12);
    });
});
//# sourceMappingURL=PlaceCard.e2e.test.js.map