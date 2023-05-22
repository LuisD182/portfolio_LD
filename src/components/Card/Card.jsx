import React from "react";
import './Card.css'

const Card = ( {techIcon, heading, detail})=>{
    return( 
        <div className="card">
            <span> {techIcon}</span>
            <span>{heading}</span>
            {/* <span>{detail}</span> */}
            {/* <button className="c-button">
                Learn more
            </button> */}
        </div>

    )
}

export default Card