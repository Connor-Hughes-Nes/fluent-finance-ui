import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../button/Button';

import './dashboard-card.scss'

const DashboardCard = ({ title, path, icon, content }) => {

  const navigate = useNavigate();

  return (
    <article className="dashboard-card">
      <section className="dashboard-card__detail">
        <section className="dashboard-card__icon">{icon}</section>
        <h4 className="dashboard-card__title">{title}</h4>
      </section>
      <p> {content} </p>
      <Button placeholder="Get Started" label="Get Started" type="submit" onClick={() => navigate(path)} />
    </article>
  )

};
DashboardCard.defaultProps = {
  items: []
};

export default DashboardCard;