import React from 'react'
import Styles from './Contact.module.css'

export default function Info() {
    return (
        <div className={Styles.info}>
            <div className={Styles.address}>
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
            </div>

            <div className={Styles.email}>
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
            </div>

            <div className={Styles.phone}>
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
            </div>

        </div>
    )
}
