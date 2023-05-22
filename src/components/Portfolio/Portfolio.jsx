import React from "react";
import { Carousel } from "react-bootstrap";
import './Portfolio.css';
import phrases from "../../img/phrases.png";
import pokedex from "../../img/pokedex.png";
import crud from "../../img/crudFront.png";
import weatherApp from "../../img/weatherApp.png"
import rickyMorty from "../../img/rickMorty.png"
import ecomerce from "../../img/ecommerce2.png"
import { themeContext } from "../../Context";
import { useContext } from "react";



const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <section className="p-carousel" id='Portfolio'>
            <span style={{color: darkMode ? 'white' : ''}}>Recent Proyects</span>
            <span>Portfolio</span>
        <Carousel>
            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={phrases}
                    alt="Cites"
                />
                <Carousel.Caption>
                    <h3>Inspirational phrases</h3>
                    <p>Over a 100 cites from famous persons, you can change the cite by clicking the ying-yang button.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={pokedex}
                    alt="Pokedex"
                />
                <Carousel.Caption>
                    <h3 className="p">Pokedex</h3>
                    <p className="p-t">Consult all the imporant info and stats from over 1200 pokemons in this react responsive proyect.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={weatherApp}
                    alt="weatherApp"
                />
                <Carousel.Caption>
                    <h3>Weather App</h3>
                    <p>With this app you can search the current weather of any city in the world!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={crud}
                    alt="CRUD"
                />
                <Carousel.Caption>
                    <h3>CRUD</h3>
                    <p>An stylish front-end page with the ability of create, read, update and delete users.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={rickyMorty}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Rick & Morty api</h3>
                    <p>Travel across the multiverse of the famous series Rick & Morty, looking for all the characters ever seen on the screen</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={ecomerce}
                    alt="Ecommerce"
                />
                <Carousel.Caption>
                    <h3>Ecommerce</h3>
                    <p>Simulation of a real ecommerce.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </section>
    )
}

export default Portfolio;