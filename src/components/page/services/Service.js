import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Services.module.css'

export default function Service(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className={Styles["icon-box"]}>
                <div className={Styles.icon}><i className={props.icon} style={{color: props.color}}></i></div>
                <h4 className={Styles.title}><Link to="#">{props.title}</Link></h4>
                <p className={Styles.description}>{props.desc}</p>
            </div>
        </div>
    )
}
