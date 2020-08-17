import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Hero.css"

class Hero extends Component {
    state = { 
        handleSearch: this.props.handleSearch,
        handleChange: this.props.handleChange
    }
    
    render() { 
        return ( 
            <div className={`hero ${this.props.page}`}>
                <section className="welcomeSection">
                    <header className="headerHero" id="hero">
                        <ul>
                            <li>
                                <Link className="logo" to={`/`}><img src="/FRTY-Logo-white.svg" alt="" /></Link>
                            </li>
                            <li className="headerTitle">{this.props.name}</li>
                            <li><a className="menuLink" href="#inhalt">MENU</a></li>
                        </ul>
                    </header>
                    <div className="overlayBorder">
                        <article className="welcomeText">
                            <div className="title">
                                <h1>{this.props.name}</h1>
                                <h1>&amp;</h1>
                                <h1>Drinks</h1>
                            </div>
                            <h2>Welcome to the world of {this.props.name === 'Cocktails' ? "cocktail" : this.props.name} drinks!</h2>
                            <div className="searchWrap">
                                <input className="input" type="text" placeholder="Search" value={this.state.value} onChange={(event) => this.state.handleChange(event)}></input>
                                {this.props.page === 'home' ? <Link to='/search' className="searchBtn"><i className="fas fa-search"></i></Link> : <button className="searchBtn" onClick={() => this.state.handleSearch(this.props.page)}><i className="fas fa-search"></i></button>}
                            </div>
                            <div className="arrowWrap">
                                <a href="#inhalt"><i className="fas fa-chevron-down scrollIcon"></i></a>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Hero;
