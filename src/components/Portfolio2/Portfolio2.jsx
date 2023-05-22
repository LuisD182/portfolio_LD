import React from "react";
import './Portfolio2.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from "swiper";



const Portfolio2 = () => {
    const portImgs = [
        {
            img: Sidebar,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita quasi eveniet quibusdam? Magni, porro ipsum. Iure ex vel autem omnis, delectus nesciunt a aliquid."
        },
        {
            img: Ecommerce,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita quasi eveniet quibusdam? Magni, porro ipsum. Iure ex vel autem omnis, delectus nesciunt a aliquid."
        },
        {
            img: HOC,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita quasi eveniet quibusdam? Magni, porro ipsum. Iure ex vel autem omnis, delectus nesciunt a aliquid."
        },
        {
            img: MusicApp,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia expedita quasi eveniet quibusdam? Magni, porro ipsum. Iure ex vel autem omnis, delectus nesciunt a aliquid."
        },
    ]

    return (
        <div className="portfolio">
            <div>
{/** Heading */}
            <span>Recent Proyects</span>
            <span>Portfolio</span>

            {/** Slider */}
            {/* <Swiper
                spaceBetween={20}
                slidesPerView={4}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                    <span></span>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper> */}

                {/* Alternative carrousel */}
            {/* <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                    {
                        portImgs.map((proyect, index) => (
                      
                            <SwiperSlide key={index}>
                                <div >
                                    <img src={proyect.img} alt="" />
                                    <span> {proyect.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    )}
           </Swiper> */}

            </div>
            


        </div>
    )
}

export default Portfolio2;