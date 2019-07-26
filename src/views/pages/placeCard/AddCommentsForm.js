import React from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';
import Rating from './addCommentsForm/Rating';

const propTypes = {};
const defaultProps = {};

class AddCommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      comment: '',
    };
  }

  render() {
    return (
      <Form className="reviews__form" method="post" onSubmit={() => {}}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          <Rating />
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" disabled="" type="submit">
            Submit
          </button>
        </div>
      </Form>
    );
  }
}

AddCommentsForm.propTypes = propTypes;
AddCommentsForm.defaultProps = defaultProps;

export default AddCommentsForm;
