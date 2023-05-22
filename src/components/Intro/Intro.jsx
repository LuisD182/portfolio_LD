import React from "react";
import "./Intro.css"
import github from '../../img/github.png';
import photo from '../../img/CVU-causal-2.png';
import linkedIn from '../../img/linkedin.png';
import tv from '../../img/TV-logo.png';
import thumbUp from '../../img/thumbup.png';
import glassesEmoji from '../../img/glassesimoji.png';
import FloatingDiv from "../floatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
// import { motion } from "framer-motion";



const Intro = () => {
    // const transition = {duration: 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    return (
        <section className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hi! I am </span>
                    <span>Luis Rosales</span>
                    <span>Full stack developer</span>
                </div>

                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/LuisD182">
                        <img src={github} alt="gitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/phd-luis-david-rosales-v%C3%A1zquez-aaa683241/">
                        <img src={linkedIn} alt="linkedIn" />
                    </a>
                    <a href="https://es.tradingview.com/chart/ZrpO1fqn/?symbol=SPX">
                        <img src={tv} alt="tv" />
                    </a>
                </div>
            </div>

            <div className="i-right">
                <img className="i-photo" src={photo} alt="phot" srcset="" />
                <img className="i-glaseesEmoji" src={glassesEmoji} alt="" />

                <div className="floatingDiv-img">
                    <FloatingDiv image={thumbUp} txt1="Web Developer" />
                </div>
                {/* blur divs */}
            </div>

            <div className="blur" style={{ background: "rgb(238 210 255 )" }} ></div>
            <div className="blur-2" style={{ background: "#C1F5FF" }} ></div>

        </section>
    )
}

export default Intro;