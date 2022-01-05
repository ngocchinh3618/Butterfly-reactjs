import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink(props) {
    return (
        <>
            {props.children
                ?
                <li className={props.classDown ? "dropdown link" : "dropdown link link2"}><span>{props.name}</span> <i className={props.classDown ? props.classDown : props.classRight} />{props.children}</li>
                :
                <li><Link to={props.link} className={"nav-link scrollto " + props.act}>{props.name}</Link></li>
            }
        </>
    )
}
