import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterLink(props) {
  return (
    <>
       <li><i className="bx bx-chevron-right" /> <Link to={props.link}>{props.name}</Link></li>
    </>
  )
}
