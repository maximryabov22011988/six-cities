import * as React from 'react';
import { connect } from 'react-redux';

import ReviewList from './reviews/ReviewList';

import { loadReviews } from '../../../state/reviews/operations';
import { getReviews } from '../../../state/reviews/selectors';

import { Review } from '../../interfaces';

interface Props {
  hotelId: number;
  reviews: Array<Review>;
  loadReviews: (hotelId: number) => void;
}

class Reviews extends React.Component<Props> {
  componentDidMount() {
    const { hotelId, loadReviews } = this.props;
    loadReviews(hotelId);
  }

  getReviewsAmount() {
    const { reviews } = this.props;
    return reviews.length;
  }

  render() {
    const { reviews } = this.props;

    return (
      <React.Fragment>
        <h2 className="reviews__title">
          Reviews &middot; <span className="reviews__amount">{this.getReviewsAmount()}</span>
        </h2>
        <ReviewList reviews={reviews} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = {
  loadReviews,
};

export { Reviews };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
