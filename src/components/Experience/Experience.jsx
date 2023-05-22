import React from "react";
import './Experience.css'
import Academlo from '../../img/academlo.png'

const Experience = () => {
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="circle">
                    <img src={Academlo} alt=""className="logoAcademlo"/>

                </div>
                <span>formed in</span>
                <span className="e-text">Academlo</span>
            </div>

            <div className="achievement">
                <div className="circle">1</div>
                <span>year</span>
                <span className="e-text" >Experience</span>
            </div>

            <div className="achievement">
                <div className="circle">4+</div>
                <span>completed</span>
                <span className="e-text">Proyects</span>
            </div>

        </div>

    )
}

export default Experience;