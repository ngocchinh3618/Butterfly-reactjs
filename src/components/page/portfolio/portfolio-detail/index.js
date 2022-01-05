import React from 'react'
import PortfolioDetail from './PortfolioDetail'
import Breadcrumbs from '../../../../common/Breadcrumbs/Breadcrumbs'
import Header from '../../../../common/Header'
export default function PortfolioDetails() {
    return (
        <>
            <Header />
            <main id="main">
                <Breadcrumbs />
                <PortfolioDetail />
            </main>
        </>
    )
}
