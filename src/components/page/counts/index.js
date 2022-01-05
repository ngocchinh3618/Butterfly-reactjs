import React from 'react'
import Counter from './Counter'
import { COUNT_DATA } from '../../data'
import Styles from './Counts.module.css'
export default function Count() {
    const countdata = COUNT_DATA.map(data =>
        <Counter
            title={data.title}
            end={data.end}
            key={data.title}
        />
    )
    return (
        <section id="counts" className={Styles.counts}>
            <div className="container">
                <div className={"text-center " + Styles.title }>
                    <h3>What we have achieved so far</h3>
                    <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
                </div>
                <div className={"row position-relative " + Styles.counters}>
                    {countdata}
                </div>
            </div>
        </section>

    )
}
