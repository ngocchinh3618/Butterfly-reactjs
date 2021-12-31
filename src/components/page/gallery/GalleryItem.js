import React from 'react'
import { Link } from 'react-router-dom'

export default function GalleryItem(props) {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
                <Link 
                to={props.linkImg} className="galleery-lightbox" data-gallery="gallery-item"
                >
                    <img 
                    src={props.img} alt="" className="img-fluid" 
                    />
                </Link>
            </div>
        </div>
    )
}
