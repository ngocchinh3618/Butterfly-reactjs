import React from 'react'
import { Link } from 'react-router-dom'
import { SOCIAL_CLASS } from '../../data'
import Styles from './Teams.module.css'

export default function TeamItem(props) {
    const socialClass = SOCIAL_CLASS.map(className =>
        <Link to="#" key={className}><i className={className}></i></Link>
    )
    return (
        <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className={Styles.member}>
                <div className={Styles["member-img"]}>
                    <img src={props.img} className="img-fluid" alt="" />
                    <div className={Styles.social}>
                        {socialClass}
                    </div>
                </div>
                <div className={Styles["member-info"]}>
                    <h4>{props.name}</h4>
                    <span>{props.pos}</span>
                </div>
            </div>
        </div>
    )
}
