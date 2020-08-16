import React from 'react';
import "./Hero.css"

const Hero = (props) => {
    return (
        <div className={`hero ${props.page}`}>
            <section className="welcomeSection">
                <header className="headerHero">
                    <ul>
                        <li>
                            <a className="logo" href="#"><img src="/FRTY-Logo-white.svg" alt="" /></a>
                        </li>
                        <li className="headerTitle">{props.name}</li>
                        <li><a className="menuLink" href="#">MENU</a></li>
                    </ul>
                </header>
                <div className="overlayBorder">
                    <article className="welcomeText">
                        <div className="title">
                            <h1>{props.name}</h1>
                            <h1>&amp;</h1>
                            <h1>Drinks</h1>
                        </div>
                        <h2>{`Welcome to the world of ${props.name} drinks!`}</h2>
                        <div className="searchWrap">
                            <input className="input" type="text" name="" id="" placeholder="Suchtext eingeben"></input>
                            <button className="searchBtn"><i className="fas fa-search"></i></button>
                        </div>
                        <div className="arrowWrap">
                            <a href="#"><i className="fas fa-chevron-down scrollIcon"></i></a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}

export default Hero;