import React from 'react'
import { useNavigate } from 'react-router-dom'
import Btn from '../../../common/Btn';
import assets from '../../../assets';
import Styles from "./Hero.module.css"

export default function Hero() {
    const navigate = useNavigate();
    const btnClick = () => {
        navigate('about')
    }

    return (
        <section id="hero" className={"d-flex align-items-center " + Styles.hero}>
            <div className={"container " + Styles.container}>
                <div className="row">
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Creating websites that make you stop &amp; stare</h1>
                        <h2>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</h2>
                        <div>
                            <Btn
                            click={btnClick}
                            name="Get Started"
                            className={Styles["btn-get-started"]}
                        /></div>
                    </div>
                    <div className={"col-lg-6 order-1 order-lg-2 " + Styles["hero-img"]}>
                        <img src={assets.hero} className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>

    )
}
