import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, node, shape, string } from 'prop-types';


import { ReactComponent as Logo } from '../../icons/FF-logo-w-heading.svg';

import './sidebar.scss'

const Item = ({ link, title, icon }) => (
  <li id={title} className='sidebar-item'>
    <Link to={link}>
      {icon}
    </Link>
  </li>
);

const SidebarLogo = () => {
  return (
    <Link to="/dashboard">
      <Logo />
    </Link>
  );
};

const Sidebar = ({ items }) => {

  return (
    <aside className="sidebar">
      <SidebarLogo/>
      <ul className="sidebar__items">
        {items.map(({ icon, title, link }) => (
          <Item
            icon={icon}
            link={link}
            key={title}
            title={title}
          />
        ))}
      </ul>
    </aside>
  )
}

Sidebar.defaultProps = {
  items: []
};

Sidebar.propTypes = {
  items: arrayOf(
    shape({
      icon: node,
      title: string.isRequired,
      link: string.isRequired
    })
  )
};

export default Sidebar;