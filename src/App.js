import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css'
import CocktailMenu from './Component/CocktailMenu';
import MenuItem from './Component/MenuItem';
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";
import RandomCocktail from './Component/RandomCocktail';

const menuList = [
  {
    url: "gin",
    name: "Gin",
    text: "Lorem ipsum dolor sit"
  },
  {
    url: "vodka",
    name: "Vodka",
    text: "Lorem ipsum dolor sit"
  },
  {
    url: "rum",
    name: "Rum",
    text: "Lorem ipsum dolor sit"
  },
  {
    url: "scotch",
    name: "Scotch",
    text: "Lorem ipsum dolor sit"
  },
  {
    url: "Non_Alcoholic",
    name: "Non-Alcoholic",
    text: "Lorem ipsum dolor sit"
  },
  {
    url: "random",
    name: "Zufälliges Getränk",
    text: "Lorem ipsum dolor sit"
  },
]

const App = (props) => {
    return (
      <div className="App">
        <Router>
          <Hero/>
          <Switch>
            <Route path="/" exact>
              <div className="menu">
                {menuList.map((elt, i) => 
                  <MenuItem
                    key={i}
                    url={elt.url}
                    name={elt.name}
                    text={elt.text.toUpperCase()}
                  />
                )}
              </div>
            </Route>
            <Route path="/random" exact render={props => <RandomCocktail {...props} />}>
            </Route>
            <Route path="/:id" component={CocktailMenu}>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
}

export default App;