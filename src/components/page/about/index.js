import React from 'react'
import VideoBox from './VideoBox'
import IconBox from './IconBox'
import { ABOUT_DATA } from '../../data'
import "./about.css";
export default function About() {
    const iconbox = ABOUT_DATA.map(data => 
        <IconBox  
        class={data.class}
        title={data.title}
        desc={data.desc}
        key={data.title}
        />
    )
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <VideoBox />

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                        <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                        {iconbox}

                    </div>
                </div>
            </div>
        </section>
    )
}
