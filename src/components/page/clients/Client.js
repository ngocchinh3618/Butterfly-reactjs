import React from 'react'
import Styles from  './Clients.module.css'
export default function Client(props) {
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className={Styles["client-logo"]}>
                <img src={props.client} className="img-fluid" alt="" />
            </div>
        </div>
    )
}
