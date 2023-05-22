import React from "react"
import Card from "../Card/Card"
import './Services.css'
import CV from "../../img/CVU-full-stack.pdf"
import { themeContext } from "../../Context";
import { useContext } from "react";


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="services" id='Services'>

            { /* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>Some of my</span>
                <span>abilities</span>
                {/* <span>
                    Abilities that I adquired
                </span> */}
                <a href={CV} download>
                    <button className="s-button button"> Download my CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>

            { /* right side */}

            <div className="cards">
                <div style={{ left: '19rem', color: darkMode ? 'white' : '' }}>
                    <Card
                        style={{ color: darkMode ? 'white' : '' }}
                        techIcon={
                            <span className="techIcon">
                                <i class="fa-brands fa-html5 fa-8x" ></i>
                            </span>
                        }
                        heading={
                            <span style={{ color: darkMode ? 'white' : '' }}>
                                HTML 5
                            </span>
                        }
                    />
                </div>

                <div style={{ top: '10rem', left: '1rem', }}>
                    <Card
                        techIcon={
                            <span className="techIcon">
                                <i class="fa-brands fa-css3-alt fa-8x" ></i>
                            </span>
                        }
                        heading={
                            <span style={{ color: darkMode ? '' : 'white' }}>
                                CSS 3
                            </span>
                        }

                    />
                </div>

                <div style={{ top: '16rem', left: '19rem', }}>
                    <Card
                        techIcon={
                            <span className="techIcon">
                                <i class="fa-brands fa-js fa-8x" ></i>
                            </span>
                        }
                        heading={
                            <span style={{ color: darkMode ? 'white' : '' }}>
                                Javascript
                            </span>
                        }
                    />
                </div>

                <div style={{ top: '26rem', left: '1rem', }}>
                    <Card
                        techIcon={
                            <span className="techIcon">
                                <i class="fa-brands fa-react fa-8x" ></i>
                            </span>
                        }
                        heading={
                            <span style={{ color: darkMode ? 'white' : '' }}>
                                React Js
                            </span>
                        }
                    />
                </div>

                <div style={{ top: '32rem', left: '19rem', }}>
                    <Card
                        techIcon={
                            <span className="techIcon">
                                <i class="fa-brands fa-node fa-8x fa-fade"></i>
                            </span>
                        }
                        heading={
                            <span style={{ color: darkMode ? 'white' : '' }}>
                            NodeJs
                        </span>
                            }
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
            </div>




        </div>
    )


}

export default Services