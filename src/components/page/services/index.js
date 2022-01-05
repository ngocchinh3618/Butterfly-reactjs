import React from 'react'
import { SERVICE_DATA } from '../../data'
import Service from './Service'

export default function Services() {
    const servicedata = SERVICE_DATA.map(data =>
        <Service
            color={data.color}
            title={data.title}
            icon={data.icon}
            desc={data.desc}
            key={data.title}
        />
    )
    return (
        <section id="services" className="services section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>
                <div className="row">
                    {servicedata}
                </div>
            </div>
        </section>
    )
}
