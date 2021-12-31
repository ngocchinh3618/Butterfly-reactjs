import React from 'react'
import { Link } from 'react-router-dom'

export default function Service(props) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="icon-box">
                <div className="icon"><i className={props.icon} style={{color: props.color}}></i></div>
                <h4 className="title"><Link to="#">{props.title}</Link></h4>
                <p className="description">{props.desc}</p>
            </div>
        </div>
    )
}
