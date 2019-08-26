import * as React from 'react';
import * as moment from 'moment';
import { get } from 'lodash';

import Avatar from '../../../components/Avatar';
import Rating from '../../../components/Rating';

import { Review } from '../../../types';

interface Props {
  review: Review;
}

const getDateFormat = (date) => {
  if (date) {
    return {
      dateTime: moment(date).format('YYYY-MM-DD'),
      text: moment(date).format('MMMM YYYY'),
    };
  }
  return null;
};

function ReviewItem({
  review: {
    comment,
    date,
    rating,
    user: { avatar_url: avatarUrl, is_pro: isPro, name },
  },
}: Props) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <Avatar
          alt="Review author avatar"
          height="54"
          isPro={isPro}
          name={name}
          parentClassName="reviews"
          src={avatarUrl}
          width="54"
        />
      </div>
      <div className="reviews__info">
        <Rating parentClassName="reviews" rating={rating} />
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={get(getDateFormat(date), 'dateTime', '')}>
          {get(getDateFormat(date), 'text', '')}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
