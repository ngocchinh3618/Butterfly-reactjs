import React from 'react'
import { TESTIMONIAL_DATA } from '../../data'
import TestimonialItem from './TestimonialItem'
import Styles from './Testimonial.module.css'
export default function Testimonials() {
    const testimonialData = TESTIMONIAL_DATA.map(data =>
        <TestimonialItem 
        key={data.id}
        img={data.img}
        name={data.name}
        pos={data.pos}
        quote={data.quote}
        />)
    return (
        <section id="testimonials" className={Styles.testimonials}>
            <div className="container position-relative">
                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                        {testimonialData}
                    </div>
                    <div className="swiper-pagination"></div> 
                </div>
            </div>
        </section>
    )
}
