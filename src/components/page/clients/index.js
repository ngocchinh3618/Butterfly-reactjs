import React from 'react'
import Client from './Client'
import { CLIENT_DATA } from '../../data'
import Styles from  './Clients.module.css'
export default function Clients() {
    const clientdata = CLIENT_DATA.map(data => 
        <Client 
            client={data.client}
            key={data.client}
        />
    )
    return (
        <section id="clients" className="clients">
            <div className="container">
                <div className={"row no-gutters clearfix wow fadeInUp " + Styles["clients-wrap"] }>
                    {clientdata}
                </div>
            </div>
        </section>
    )
}
