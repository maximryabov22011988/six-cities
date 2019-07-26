import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const RATING_TITLES = ['terribly', 'badly', 'not bad', 'good', 'perfect'];

function Rating() {
  return (
    <React.Fragment>
      {RATING_TITLES.reverse().map((title, index) => (
        <React.Fragment key={title}>
          <input
            className="form__rating-input visually-hidden"
            id={`${index + 1}-stars`}
            name="rating"
            type="radio"
            value={index + 1}
          />

          <label className="reviews__rating-label form__rating-label" htmlFor={`${index + 1}-stars`} title={title}>
            <svg className="form__star-image" height="33" width="37">
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

Rating.propTypes = propTypes;
Rating.defaultProps = defaultProps;

export default Rating;
