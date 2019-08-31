import * as React from 'react';

import Form from '../../components/Form';
import Button from '../../components/Button';
import Rating from './addReviewsForm/Rating';

const MIN_CHARACTERS = 50;

interface Props {
  hotelId: number;
  onSendReview: (hotelId: number, review: { rating: string; comment: string }) => void;
}

interface State {
  rating: string;
  review: string;
}

class AddReviewsForm extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      review: '',
    };
  }

  isCorrectComment = () => {
    const { review } = this.state;
    return review.length > MIN_CHARACTERS;
  };

  isCorrectRating = () => {
    const { rating } = this.state;
    const value = Number(rating);
    return !!value && value >= 1 && value <= 5;
  };

  isLocked = () => !(this.isCorrectComment() && this.isCorrectRating());

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { hotelId, onSendReview } = this.props;
    const { rating, review: comment } = this.state;
    onSendReview(hotelId, { rating, comment });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      rating: null,
      review: '',
    });
  };

  render() {
    const { rating, review } = this.state;

    return (
      <Form className="reviews__form" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>

        <Rating currentRating={rating} onChange={this.handleChange} />

        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={review}
          onChange={this.handleChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">{MIN_CHARACTERS} characters</b>.
          </p>
          <Button className="reviews__submit form__submit" disabled={this.isLocked()} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export default AddReviewsForm;
