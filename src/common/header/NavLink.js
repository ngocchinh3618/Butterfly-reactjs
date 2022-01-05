import React from 'react';
import { Link } from 'react-router-dom';
import Styles from "./Navbar.module.css";
export default function NavLink(props) {
    return (
        <>
            {props.children
                ?
                <li className={props.classDown ? Styles.link + " " + Styles.dropdown : Styles.link + " " + Styles.link2 + " " + Styles.dropdown}><span>{props.name}</span> <i className={props.classDown ? props.classDown : props.classRight} />{props.children}</li>
                :
                <li><Link to={props.link} className={"nav-link scrollto " + props.act}>{props.name}</Link></li>
            }
        </>
    )
}
