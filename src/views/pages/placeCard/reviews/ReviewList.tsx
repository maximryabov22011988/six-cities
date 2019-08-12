import * as React from 'react';

import ReviewItem from './ReviewItem';

import { Review } from '../../../types';

interface Props {
  reviews: Array<Review>;
}

const REVIEWS_MAX = 10;

function ReviewList({ reviews }: Props) {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => {
        if (i < REVIEWS_MAX) {
          return <ReviewItem key={review.id} review={review} />;
        }
        return null;
      })}
    </ul>
  );
}

export default ReviewList;
