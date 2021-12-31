import React from 'react';
import {PORTFOLIO_DATA} from "../../data"
import ItemPortfolio from './ItemPortfolio';
import "./portfolio.css"

export default function Portfolios() {
    const itemPortfolio = PORTFOLIO_DATA.map(data =>
      <ItemPortfolio 
      img={data.img} 
      title = {data.title} 
      name={data.name} 
      linkImg={data.linkImg} 
      link={data.link} 
      id={data.id}
      key={data.id} />
      )
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container">
         {itemPortfolio}
        </div>
      </div>
    </section>
  )
}
