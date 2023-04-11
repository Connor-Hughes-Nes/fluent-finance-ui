import React from 'react';

import './budget-card.scss'

const DashboardCard = ({ title }) => (

  <article className="budget-card">
    <section className="budget-card__detail">
      {/*<section className="dashboard-card__icon">{icon}</section>*/}
      <h1 className="budget-card__percent" >2.5%</h1>
      <h4 className="budget-card__title">{title}</h4>
    </section>
  </article>
);

DashboardCard.defaultProps = {
  items: []
};

export default DashboardCard;