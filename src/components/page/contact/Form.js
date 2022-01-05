import React from 'react'
import Styles from './Contact.module.css'

export default function Form() {
    return ( 
        <form action="/forms/contact.php" method="post" role="form" className={Styles["php-email-form"]}>
            <div className="row">
                <div className={"col-md-6 form-group " + Styles["form-group"]}>
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
            </div>
            <div className={"form-group mt-3 " + Styles["form-group"]}>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className={" form-group mt-3 "+ Styles["form-group"]}>
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
                <div className={Styles["loading"]}>Loading</div>
                <div className={Styles["error-message"]}></div>
                <div className={Styles["sent-message"]}>Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
    )
}
