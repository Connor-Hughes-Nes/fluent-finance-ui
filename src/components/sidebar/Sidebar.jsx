import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../icons/FF-logo-w-heading.svg';

import './sidebar.scss'

const Item = ({ path, label, icon }) => (
  <li id={label} className='sidebar-item'>
    <Link to={path}>
        {icon}
      <span>
        {label}
      </span>
    </Link>
  </li>
);

const SidebarLogo = () => {
  return (
    <Link to="/dashboard">
      <div className="sidebar__logo">
        <Logo />
      </div>
    </Link>
  );
};

const Sidebar = ({ items }) => {

  return (
    <aside className="sidebar">
      <SidebarLogo/>
      <ul className="sidebar__items">
        {items.map(({ icon, label, link }) => (
          <Item
            path={link}
            icon={icon}
            key={label}
            label={label}
          />
        ))}
      </ul>
    </aside>
  )
}

Sidebar.defaultProps = {
  items: []
};

export default Sidebar;