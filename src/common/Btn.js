import React from 'react';

export default function Btn(props) {
    const onBtnClick = () => {
        props.click();
    }
    return (
        <button 
        className={"btn-get-started scrollto " + props.className} 
        onClick={onBtnClick}
        >
            {props.name}
        </button>
    )
}
