import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, node, shape, string } from 'prop-types';

import { ReactComponent as Logo } from '../../icons/FF-logo-w-heading.svg';

import './sidebar.scss'

const Item = ({ link, label, icon }) => (
  <li id={label} className='sidebar-item'>
    <Link to={link}>
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
            icon={icon}
            link={link}
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

// Sidebar.propTypes = {
//   items: arrayOf(
//     shape({
//       icon: node,
//       title: string.isRequired,
//       link: string.isRequired
//     })
//   )
// };

export default Sidebar;