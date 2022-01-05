import React from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Portfolio.module.css"

export default function ItemPortfolio(props) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className={Styles['portfolio-wrap']}>
        <img src={props.img} className="img-fluid" alt="" />
        <div className={Styles['portfolio-info']}>
          <h4>{props.title}</h4>
          <p>{props.name}</p>
          <div className={Styles['portfolio-links']}>
            <Link
              to={props.linkImg} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
              <i className="bx bx-plus"></i>
            </Link>
            <Link
              to={`/portfolio-details/${props.id}`}
              title="More Details">
              <i className="bx bx-link"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
