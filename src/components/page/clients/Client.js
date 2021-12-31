import React from 'react'

export default function Client(props) {
    return (
        <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
                <img src={props.client} className="img-fluid" alt="" />
            </div>
        </div>
    )
}
