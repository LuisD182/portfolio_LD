import './Footer.css'
import React from 'react'
import wave from "../../img/wave.png";
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
    return (
        <div className="footer">
            <img src={wave} alt="" style={{ width: '100%' }} />
            <div className="f-content">
                <span> ld_222@hotmail.com or luis.d.r.v.222@gmail.com</span>
                <div className="f-icons">
                        <Linkedin color='white' size='3rem'/>
                        <Github color='white' size='3rem'/>
                </div>


            </div>
        </div>
    )
}

export default Footer;