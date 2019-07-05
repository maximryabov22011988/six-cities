import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  isAuth: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired
};

class UserInfo extends React.PureComponent {
  render() {
    const { isAuth, email } = this.props;
    return (
      <li className="header__nav-item user">
        {!isAuth ? (
          <Link to="/login">Sign In</Link>
        ) : (
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper" />
            <span className="header__user-name user__name">{email}</span>
          </a>
        )}
      </li>
    );
  }
}

UserInfo.propTypes = propTypes;

export default UserInfo;
