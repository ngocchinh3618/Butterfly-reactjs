import React from 'react'
import { TEAM_DATA } from '../../data'
import TeamItem from './TeamItem'

export default function Teams() {
    const teamData = TEAM_DATA.map(data =>
        <TeamItem
            key={data.id}
            img={data.img}
            name={data.name}
            pos={data.pos}
        />
    )
    return (
        <section id="team" className="team section-bg">
            <div className="container">
                <div className="section-title">
                    <h2>Team</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                        quidem hic quas.</p>
                </div>
                <div className="row">
                    {teamData}
                </div>
            </div>
        </section>
    )
}
