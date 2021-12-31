import React from 'react'
import { Link } from 'react-router-dom'

export default function VideoBox() {
    return (
        <div className="col-xl-5 col-lg-6 d-flex justify-content-center video-box align-items-stretch position-relative">
            <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></Link>
        </div>
    )
}
