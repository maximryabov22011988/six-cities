import * as React from 'react';


const propTypes = {
  rating: {
    currentRating: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  },
  label: {
    ratingValue: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  },
  radio: {
    checked: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  },
};

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
  return (
    <div className="reviews__rating-form form__rating">
      <Radio
        checked={currentRating === RATING_MAP[PERFECT]}
        id={`${RATING_MAP[PERFECT]}-stars`}
        value={RATING_MAP[PERFECT]}
        onChange={onChange}
      />
      <Label ratingValue={RATING_MAP[PERFECT]} title={PERFECT} />

      <Radio
        checked={currentRating === RATING_MAP[GOOD]}
        id={`${RATING_MAP[GOOD]}-stars`}
        value={RATING_MAP[GOOD]}
        onChange={onChange}
      />
      <Label ratingValue={RATING_MAP[GOOD]} title={GOOD} />

      <Radio
        checked={currentRating === RATING_MAP[NOT_BAD]}
        id={`${RATING_MAP[NOT_BAD]}-stars`}
        value={RATING_MAP[NOT_BAD]}
        onChange={onChange}
      />
      <Label ratingValue={RATING_MAP[NOT_BAD]} title={NOT_BAD} />

      <Radio
        checked={currentRating === RATING_MAP[BADLY]}
        id={`${RATING_MAP[BADLY]}-stars`}
        value={RATING_MAP[BADLY]}
        onChange={onChange}
      />
      <Label ratingValue={RATING_MAP[BADLY]} title={BADLY} />

      <Radio
        checked={currentRating === RATING_MAP[TERRIBLY]}
        id={`${RATING_MAP[TERRIBLY]}-stars`}
        value={RATING_MAP[TERRIBLY]}
        onChange={onChange}
      />
      <Label ratingValue={RATING_MAP[TERRIBLY]} title={TERRIBLY} />
    </div>
  );
}

Rating.propTypes = propTypes.rating;

function Label({ ratingValue, title }) {
  return (
    <label className="reviews__rating-label form__rating-label" htmlFor={`${ratingValue}-stars`} title={title}>
      <svg className="form__star-image" height="33" width="37">
        <use xlinkHref="#icon-star" />
      </svg>
    </label>
  );
}

Label.propTypes = propTypes.label;

function Radio({ checked, id, value, onChange }) {
  return (
    <input
      checked={checked}
      className="form__rating-input visually-hidden"
      id={id}
      name="rating"
      type="radio"
      value={value}
      onChange={onChange}
    />
  );
}

Radio.propTypes = propTypes.radio;

export default Rating;
