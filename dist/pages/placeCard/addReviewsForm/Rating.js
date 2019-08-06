"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const TERRIBLY = 'terribly';
const BADLY = 'badly';
const NOT_BAD = 'not bad';
const GOOD = 'good';
const PERFECT = 'perfect';
const RATING_MAP = {
    [TERRIBLY]: '1',
    [BADLY]: '2',
    [NOT_BAD]: '3',
    [GOOD]: '4',
    [PERFECT]: '5',
};
function Rating({ currentRating, onChange }) {
    return (React.createElement("div", { className: "reviews__rating-form form__rating" },
        React.createElement(Radio, { checked: currentRating === RATING_MAP[PERFECT], id: `${RATING_MAP[PERFECT]}-stars`, value: RATING_MAP[PERFECT], onChange: onChange }),
        React.createElement(Label, { ratingValue: RATING_MAP[PERFECT], title: PERFECT }),
        React.createElement(Radio, { checked: currentRating === RATING_MAP[GOOD], id: `${RATING_MAP[GOOD]}-stars`, value: RATING_MAP[GOOD], onChange: onChange }),
        React.createElement(Label, { ratingValue: RATING_MAP[GOOD], title: GOOD }),
        React.createElement(Radio, { checked: currentRating === RATING_MAP[NOT_BAD], id: `${RATING_MAP[NOT_BAD]}-stars`, value: RATING_MAP[NOT_BAD], onChange: onChange }),
        React.createElement(Label, { ratingValue: RATING_MAP[NOT_BAD], title: NOT_BAD }),
        React.createElement(Radio, { checked: currentRating === RATING_MAP[BADLY], id: `${RATING_MAP[BADLY]}-stars`, value: RATING_MAP[BADLY], onChange: onChange }),
        React.createElement(Label, { ratingValue: RATING_MAP[BADLY], title: BADLY }),
        React.createElement(Radio, { checked: currentRating === RATING_MAP[TERRIBLY], id: `${RATING_MAP[TERRIBLY]}-stars`, value: RATING_MAP[TERRIBLY], onChange: onChange }),
        React.createElement(Label, { ratingValue: RATING_MAP[TERRIBLY], title: TERRIBLY })));
}
function Label({ ratingValue, title }) {
    return (React.createElement("label", { className: "reviews__rating-label form__rating-label", htmlFor: `${ratingValue}-stars`, title: title },
        React.createElement("svg", { className: "form__star-image", height: "33", width: "37" },
            React.createElement("use", { xlinkHref: "#icon-star" }))));
}
function Radio({ checked, id, value, onChange }) {
    return (React.createElement("input", { checked: checked, className: "form__rating-input visually-hidden", id: id, name: "rating", type: "radio", value: value, onChange: onChange }));
}
exports.default = Rating;
//# sourceMappingURL=Rating.js.map