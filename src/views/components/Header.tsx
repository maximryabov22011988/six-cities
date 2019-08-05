import * as React from 'react';


const propTypes = {
  logo: PropTypes.element,
  userInfo: PropTypes.element,
};

function Header({ logo, userInfo }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">{logo}</div>
          <nav className="header__nav">
            <ul className="header__nav-list">{userInfo}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;

export default Header;
