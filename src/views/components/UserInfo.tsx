import * as React from 'react';

import { Link } from 'react-router-dom';

import Avatar from './Avatar';

import { BASE_URL } from '../../api';

const propTypes = {
  avatarUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  email: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  isAuth: PropTypes.bool.isRequired,
};

class UserInfo extends React.PureComponent {
  render() {
    const { isAuth, avatarUrl, email } = this.props;

    return (
      <li className="header__nav-item user">
        {!isAuth ? (
          <Link to="/login">Sign In</Link>
        ) : (
          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
            <Avatar alt="User avatar" name={email} parentClassName="header" src={`${BASE_URL}${avatarUrl}`} />
          </Link>
        )}
      </li>
    );
  }
}

UserInfo.propTypes = propTypes;

export default UserInfo;
