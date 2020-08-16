import React from 'react';
import {
    Link
} from "react-router-dom";
import "./Hero.css"

const Hero = () => {
    return (
        <div id="hero">
            <section className="welcomeSection">
                <header className="headerHero">
                    <ul>
                        <li>
                            <Link className="logo" to={`/`}><img src="/FRTY-Logo.svg" alt="" /></Link>
                        </li>
                        <li className="headerTitle">Cocktails&Drinks</li>
                        <li><a className="menuLink" href="#hero">MENU</a></li>
                    </ul>
                </header>

                <div className="overlayBorder">
                    <article className="welcomeText">
                        <div className="title">
                            <h1>Cocktails</h1>
                            <h1>&amp;</h1>
                            <h1>Drinks</h1>
                        </div>
                        <h2>Herzlich WIllkommen in der Welt der Cocktails and Drinks</h2>
                        <div className="searchWrap">
                            <input className="input" type="text" name="" id="" placeholder="Suchtext eingeben"></input>
                            <button className="searchBtn"><i className="fas fa-search"></i></button>
                        </div>

                        <div className="arrowWrap">
                            <a href="#hero"><i className="fas fa-chevron-down scrollIcon"></i></a>
                        </div>
                    </article>
                </div>     
            </section>
        </div>
    );
}

export default Hero;