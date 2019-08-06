import * as React from 'react';

interface Props {
  logo: React.ReactElement;
  userInfo?: React.ReactElement;
}

function Header({ logo, userInfo }: Props) {
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

export default Header;
