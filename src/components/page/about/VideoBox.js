import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./About.module.css";

export default function VideoBox() {
    return (
        <div className={"col-xl-5 col-lg-6 d-flex justify-content-center align-items-stretch position-relative " + Styles["video-box"]}>
            <Link to="https://www.youtube.com/watch?v=jDDaplaOz7Q" className={"glightbox mb-4 " + Styles["play-btn"]}></Link>
        </div>
    )
}
