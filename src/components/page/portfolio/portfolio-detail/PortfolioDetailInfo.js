import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './Portfoliodetail.module.css'

export default function PortfolioDetailInfo() {
    return (
        <div className={Styles["portfolio-info"]}>
            <h3>Project information</h3>
            <ul>
                <li><strong>Category</strong>: Web design</li>
                <li><strong>Client</strong>: ASU Company</li>
                <li><strong>Project date</strong>: 01 March, 2020</li>
                <li><strong>Project URL</strong>: <Link to="#">www.example.com</Link></li>
            </ul>
        </div>
    )
}
