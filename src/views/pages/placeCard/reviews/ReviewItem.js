import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { get } from 'lodash';

import Avatar from '../../../components/Avatar';
import Rating from '../../../components/Rating';

const propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.shape({
      id: PropTypes.number,
      is_pro: PropTypes.bool,
      name: PropTypes.string,
      avatar_url: PropTypes.string,
    }),
    rating: PropTypes.number,
    comment: PropTypes.string,
    date: PropTypes.string,
  }),
};

const getDateFormat = (date) => {
  if (date) {
    return {
      dateTime: moment().format('YYYY-MM-DD'),
      text: moment().format('MMMM YYYY'),
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
}) {
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

ReviewItem.propTypes = propTypes;

export default ReviewItem;
