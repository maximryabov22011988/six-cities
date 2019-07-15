import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../../api';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  avatarUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  email: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};

class UserInfo extends React.PureComponent {
  render() {
    const { isAuth, avatarUrl, email } = this.props;

    return (
      <li className="header__nav-item user">
        {!isAuth ? (
          <Link to="/login">Sign In</Link>
        ) : (
          <Link
            to="/favorites"
            className="header__nav-link header__nav-link--profile"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img
                className="user__avatar"
                alt="avatar"
                src={`${BASE_URL}${avatarUrl}`}
              />
            </div>
            <span className="header__user-name user__name">{email}</span>
          </Link>
        )}
      </li>
    );
  }
}

UserInfo.propTypes = propTypes;

export default UserInfo;
