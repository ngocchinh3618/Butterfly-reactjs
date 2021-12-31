import React from 'react'

export default function PortfolioDetailSlider(props) {
    return (
        <div className="portfolio-details-slider swiper">
            <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                    <img src={props.img} />
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    )
}
