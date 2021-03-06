import React from 'react'
import Home from './Home'
import About from './About'
import Count from './Counts'
import Clients from './Clients'
import Services from './Services'
import Portfolios from "./Portfolio"
import Header from '../../common/Header'
import Testimonials from './Testimonials'
import Teams from './Teams'
import Galleries from './Gallery'
import Contacts from './Contact'
import Footer from '../../common/Footer'
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
            <Footer/>   
        </>
    )
}
