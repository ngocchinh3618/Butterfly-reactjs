// import React from 'react';
import logo from "../../assets/img/logo.png"
import "./header.css";
import Navbar from "./Navbar";


export default function Header() {
  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo"><img src={logo} className="img-fluid" /></a>
        <Navbar/>
      </div>
    </header>
    // {/* End Header */}

  )
}
