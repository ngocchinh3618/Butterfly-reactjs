import React from 'react'

export default function Counter(props) {
    return (
        <div className="col-lg-3 col-6 text-center">
            <span 
                data-purecounter-start="0" 
                data-purecounter-end={props.end}
                data-purecounter-duration="1" 
                className="purecounter"
            >
                {props.end}
            </span>
            <p>{props.title}</p>
        </div>
    )
}
