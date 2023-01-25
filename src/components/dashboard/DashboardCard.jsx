import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../button/Button';
import { noOp } from '@neslotech/utils';

import './dashboard-card.scss'

const DashboardCard = ({ title, path, icon, content }) => (

  <article className="dashboard-card">
    <section className="dashboard-card__detail">
      <section className="dashboard-card__icon">{icon}</section>
      <h4 className="dashboard-card__title">{title}</h4>
    </section>
    <p> {content} </p>
    <Button placeholder="Get Started" label="Get Started" type="submit" onClick={path} />
  </article>
);

DashboardCard.defaultProps = {
  items: []
  // icon: sv
};

export default DashboardCard;