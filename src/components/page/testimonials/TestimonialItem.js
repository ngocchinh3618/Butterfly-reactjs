import React from 'react'

export default function TestimonialItem(props) {
    return (
        <div className="swiper-slide">
            <div className="testimonial-item">
                <img src={props.img} className="testimonial-img" alt="" />
                    <h3>{props.name}</h3>
                    <h4>{props.pos}</h4>
                    <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i> {props.quote}
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
            </div>
        </div>
    )
}
