import React from 'react'
import { Link } from 'react-router-dom'

export default function IconBox(props) {
    return (
        <div className="icon-box">
            <div className="icon"><i className={props.class}></i></div>
            <h4 className="title"><Link to="#">{props.title}</Link></h4>
            <p className="description">{props.desc}</p>
        </div>

    )
}
