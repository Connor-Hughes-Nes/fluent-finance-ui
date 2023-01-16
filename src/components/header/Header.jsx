import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss'

export const Header = (navItems, children) => {

  return (
    <header className="header">
      <section className="header__nav-items">
          <ul>
            {/*<a href={} target="_blank" ref="noreferrer">*/}
            {/*  {title}*/}
            {/*</a>*/}
            NAME
          </ul>
      </section>

      <section className="header__actions">
        {/*<span className="header__children">{children}</span>*/}
      </section>
    </header>
  )
}

export default Header;