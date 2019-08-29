import * as React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';

import { BASE_URL } from '../../api';

interface Props {
  avatarUrl: string;
  email: string;
  isAuth: boolean;
}

class UserInfo extends React.PureComponent<Props> {
  render() {
    const { isAuth, avatarUrl, email } = this.props;

    return (
      <li className="header__nav-item user">
        {isAuth ? (
          <Link className="header__nav-link header__nav-link--profile" to="/favorites">
            <Avatar alt="User avatar" name={email} parentClassName="header" src={`${BASE_URL}${avatarUrl}`} />
          </Link>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </li>
    );
  }
}

export default UserInfo;
