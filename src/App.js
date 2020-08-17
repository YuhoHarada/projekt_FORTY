import React, { Component } from 'react';
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
import menuList from './Component/menuList'
import ScrollToTop from './Component/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
    this.state = {
      value: ""
    }
  }
  
  handleSearch = (page) => {
    console.log(page)
    if (page === "home") {
      console.log(this.context.router)
      
    } else {
      this.childRef.current.NameFilter(this.state.value)
    }
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  render() { 
    return ( 
      <div className="App">
        <Router>
          <ScrollToTop>
            <Switch>
              <Route path="/" exact>
                <Hero page="home" name="Cocktails" handleSearch={this.handleSearch} handleChange={(event) => this.handleChange(event)} />
                <div className="menu" id="inhalt">
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

              <Route path="/random" exact render={props =>
                <div>
                  <Hero page="random" name="Random" />
                  <RandomCocktail {...props} />
                </div>
              }>
              </Route>

              <Route path='/:id' render={props =>
                <div>
                  <Hero page={props.match.params.id} name={menuList.find(x => x.url == props.match.params.id).name} handleSearch={this.handleSearch} handleChange={(event) => this.handleChange(event)} />
                  <CocktailMenu {...props} ref={this.childRef}/>
                </div>}>
              </Route>

            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
     );
  }
}
 
export default App;
