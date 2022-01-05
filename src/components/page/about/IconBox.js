import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./About.module.css";

export default function IconBox(props) {
    return (
        <div className={Styles["icon-box"]}>
            <div className={Styles.icon}><i className={props.class}></i></div>
            <h4 className={Styles.title}><Link to="#">{props.title}</Link></h4>
            <p className={Styles.description}>{props.desc}</p>
        </div>

    )
}
