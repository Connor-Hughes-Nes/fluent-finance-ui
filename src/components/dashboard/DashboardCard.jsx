import React from 'react';
import { Link } from 'react-router-dom';

import './dashboard-card.scss'
import { Button } from '../button/Button';
import { noOp } from '@neslotech/utils';

const DashboardCard = ({ title, path, icon }) => (


  <article className="dashboard-card">
    <section className="dashboard-card__detail">
      {/*<h4>{title}</h4>*/}
      <Link className="dashboard-card__action" to={path}>
        <Button placeholder="Get Started" label="Get Started" type="submit" onClick={noOp} />
      </Link>
    </section>
    <section className="dashboard-card__icon">{icon}</section>
  </article>
);
export default DashboardCard;