import React from 'react'
import Map from './Map'
import Info from './Info'
import Form from './Form'
import Title from './Title'

export default function Contacts() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Title />
        <Map />
        <div className="row mt-5">
          <div className="col-lg-4">
            <Info />
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}
