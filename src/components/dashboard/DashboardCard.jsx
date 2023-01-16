import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard-card.scss'

const DashboardCard = (title, path) => (
  <article className="dashboard-card">
    <section className="dashboard-card__detail">
      {/*<h4>{title}</h4>*/}
      <Link className="dashboard-card__action" to={path}>
        Get Started
      </Link>
    </section>
    {/*<section className="dashboard-card__icon">{icon}</section>*/}
  </article>
);

export default DashboardCard;