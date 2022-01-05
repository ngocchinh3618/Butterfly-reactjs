import React from 'react'
import './breadcrumb.css'
export default function Breadcrumbs() {
    return (
        <section id="breadcrumbs" className="breadcrumbs">
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2>Portfolio Details</h2>
                    <ol>
                        <li><a href="index.html">Home</a></li>
                        <li>Portfolio Details</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}
