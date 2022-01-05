import React from 'react';
import { FOOTER_DATA, FOOTER_DATA_SERVICES, FOOTER_DATA_SOCIAL } from '../../components/data'
import FooterLink from './FooterLink';
import FooterSocial from './FooterSocial';
import  Styles from "./Footer.module.css";
import {Link} from "react-router-dom";

export default function Footer() {
  const footerLink = FOOTER_DATA.map((data) =>
  <FooterLink key={data.name} name={data.name} link={data.link}/>
  );
  const footerServices = FOOTER_DATA_SERVICES.map((data) =>
  <FooterLink key={data.name} name={data.name} link={data.link}/>
  );
  const footerSocial = FOOTER_DATA_SOCIAL.map((data) =>
  <FooterSocial key={data.name} className={data.className} name={data.name} link={data.link}/>
  )
  return (
    <footer id="footer" className={Styles.footer}>
      <div className={Styles["footer-newsletter"]}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              <form action method="post">
                <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles["footer-top"]}>
        <div className="container">
          <div className="row">
            <div className={"col-lg-3 col-md-6 " + Styles["footer-contact"]}>
              <h3>Butterfly</h3>
              <p>
                A108 Adam Street <br /> New York, NY 535022<br /> United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>
            </div>
            <div className={"col-lg-3 col-md-6 "+ Styles["footer-links"]}>
              <h4>Useful Links</h4>
              <ul>
                {footerLink}
               </ul>
            </div>
            <div className={"col-lg-3 col-md-6 "+ Styles["footer-links"]}>
              <h4>Our Services</h4>
              <ul>
            {footerServices}
              </ul>
            </div>
            <div className={"col-lg-3 col-md-6 "+ Styles["footer-links"]}>
              <h4>Our Social Networks</h4>
              <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <div className={"mt-3 "+ Styles["social-links"]}>
                {footerSocial}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className={Styles.copyright}>
          © Copyright <strong><span>Butterfly</span></strong>. All Rights Reserved
        </div>
        <div className={Styles.credits}>
          Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
        </div>
      </div>
    </footer>

  )
}
