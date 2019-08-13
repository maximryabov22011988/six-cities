'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const React = require('react');
const lodash_1 = require('lodash');
const Form_1 = require('../../components/Form');
const Button_1 = require('../../components/Button');
const Rating_1 = require('./addReviewsForm/Rating');
const MIN_CHARACTERS = 50;
class AddReviewsForm extends React.Component {
  constructor(props) {
    super(props);
    this.isCorrectComment = () => {
      const { review } = this.state;
      return review.length > MIN_CHARACTERS;
    };
    this.isCorrectRating = () => {
      const { rating } = this.state;
      return lodash_1.isNumber(lodash_1.parseInt(rating));
    };
    this.isLocked = () => !(this.isCorrectComment() && this.isCorrectRating());
    this.handleChange = ({ target }) => {
      this.setState((prevState) => Object.assign({}, prevState, { [target.name]: target.value }));
    };
    this.handleSubmit = (evt) => {
      evt.preventDefault();
      const { hotelId, onSendReview } = this.props;
      const { rating, review: comment } = this.state;
      onSendReview(hotelId, { rating, comment });
      this.resetForm();
    };
    this.resetForm = () => {
      this.setState({
        rating: null,
        review: '',
      });
    };
    this.state = {
      rating: null,
      review: '',
    };
  }
  render() {
    const { rating, review } = this.state;
    return React.createElement(
      Form_1.default,
      { className: 'reviews__form', method: 'post', onSubmit: this.handleSubmit },
      React.createElement('label', { className: 'reviews__label form__label', htmlFor: 'review' }, 'Your review'),
      React.createElement(Rating_1.default, { currentRating: rating, onChange: this.handleChange }),
      React.createElement('textarea', {
        className: 'reviews__textarea form__textarea',
        id: 'review',
        name: 'review',
        placeholder: 'Tell how was your stay, what you like and what can be improved',
        value: review,
        onChange: this.handleChange,
      }),
      React.createElement(
        'div',
        { className: 'reviews__button-wrapper' },
        React.createElement(
          'p',
          { className: 'reviews__help' },
          'To submit review please make sure to set ',
          React.createElement('span', { className: 'reviews__star' }, 'rating'),
          ' and describe your stay with at least ',
          React.createElement('b', { className: 'reviews__text-amount' }, MIN_CHARACTERS, ' characters'),
          '.'
        ),
        React.createElement(
          Button_1.default,
          { className: 'reviews__submit form__submit', disabled: this.isLocked(), type: 'submit' },
          'Submit'
        )
      )
    );
  }
}
exports.default = AddReviewsForm;
//# sourceMappingURL=AddReviewsForm.js.map
