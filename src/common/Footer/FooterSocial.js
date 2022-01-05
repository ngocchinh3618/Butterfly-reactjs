import React from 'react';
import { Link } from 'react-router-dom';


export default function FooterSocial(props) {
  return (
    <>
      <Link to={props.link} className={props.className}><i className={props.name} /></Link>
    </>
  )
}
