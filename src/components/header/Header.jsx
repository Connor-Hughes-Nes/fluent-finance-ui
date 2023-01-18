import React from 'react';
import { Link } from 'react-router-dom';

// import { ReactComponent as UserIcon } from './icons/temp-user-icon.svg';
import { ReactComponent as UserIcon } from '../../icons/temp-user-icon.svg';

import './header.scss'

export const Header = (navItems, children) => {

  return (
    <header className="header">
      <section className="header__nav-items">
        <div className="header__title">
          Connor Hughes
        </div>
          <ul>
            {/*<a href={} target="_blank" ref="noreferrer">*/}
            {/*  {title}*/}
            {/*</a>*/}
            <UserIcon/>
          </ul>
      </section>

      <section className="header__actions">
        {/*Username:*/}
        {/*<span className="header__children">{children}</span>*/}
      </section>
    </header>
  )
}

export default Header;