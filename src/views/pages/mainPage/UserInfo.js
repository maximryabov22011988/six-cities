import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  email: PropTypes.string.isRequired
};

class UserInfo extends React.PureComponent {
  render() {
    const { email } = this.props;
    return (
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href="#">
          <div className="header__avatar-wrapper user__avatar-wrapper" />
          <span className="header__user-name user__name">{email}</span>
        </a>
      </li>
    );
  }
}

UserInfo.propTypes = propTypes;

export default UserInfo;
