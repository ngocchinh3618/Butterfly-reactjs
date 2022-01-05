import React from 'react'
import PortfolioDetailSlider from './PortfolioDetailSlider'
import PortfolioDetailInfo from './PortfolioDetailInfo'
import PortfolioDetailDesc from './PortfolioDetailDesc'
import { PORTFOLIO_DATA } from '../../../data'
import { useParams } from 'react-router-dom'
import Styles from './Portfoliodetail.module.css'
export default function PortfolioDetail() {
    const {id} = useParams() 
    const detailPortfolio = PORTFOLIO_DATA.find(el => el.id === Number(id))

    return (
        <section id="portfolio-details" className={Styles["portfolio-details"]}>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-8">
                        <PortfolioDetailSlider 
                        img={detailPortfolio.img}
                        />
                    </div>
                    <div className="col-lg-4">
                        <PortfolioDetailInfo />
                        <PortfolioDetailDesc />
                    </div>
                </div>
            </div>
        </section>
    )
}
