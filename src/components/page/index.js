import React from 'react'
import Home from './home/Home'
import About from './about'
import Count from './counts'
import Clients from './clients'
import Services from './services'
import Portfolios from "./portfolio"
import Header from '../header'
import Testimonials from './testimonials'
import Teams from './teams'
import Galleries from './gallery'
import Contacts from './contact'
export default function Index() {
    return (
        <>
            <Header />
            <Home />
            <main id="main">
                <About />
                <Count />
                <Clients />
                <Services />
                <Portfolios />
                <Testimonials />
                <Teams />
                <Galleries />
                <Contacts />
            </main>
        </>
    )
}
