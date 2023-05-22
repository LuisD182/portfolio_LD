import React from "react";
import "./Floating.css"

const FloatingDiv = ( {image, txt1} ) => {


    return(
        <div className="floatingDiv">
            <img src={image} alt="" />
            <span className="floatingDiv-text"> Web Developer</span>

        </div>
    )

}

export default FloatingDiv
