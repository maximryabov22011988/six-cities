import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReviewList from './reviews/ReviewList';

import { loadReviews } from '../../../state/reviews/operations';
import { getReviews } from '../../../state/reviews/selectors';

const propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
};

class Reviews extends React.Component {
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

Reviews.propTypes = propTypes;

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
});

const mapDispatchToProps = {
  loadReviews,
};

export { Reviews };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reviews);
