import React, { Component } from 'react';
import { Route } from "react-router-dom";
import CocktailItem from './CocktailItem';
import DetailPage from './DetailPage';

class CocktailMenu extends Component {
    state = {
        data: [],
        urlKey: this.props.match.params.id,
        url: ""
    }
    componentWillMount() {
        if (this.state.urlKey === "Non_Alcoholic") {
            this.setState({ url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" });
        } else {
            this.setState({ url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.urlKey}` });
        }
    }
    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(json => {
                console.log(json.drinks)
                this.setState({ data: json.drinks });
            })
    }
    render() {
        return (
            <div className="cocktailMenu">
                {this.state.data.map((elt, i) => 
                    <CocktailItem
                        key={i}
                        urlKey={this.state.urlKey}
                        id={i}
                        strDrinkThumb={elt.strDrinkThumb}
                        name={elt.strDrink}
                    />
                )}
                <Route path={`/${this.state.urlKey}/:id`} render={props => <DetailPage urlKey={this.state.urlKey} {...props} />}>
                </Route>
            </div>
        );
    }
}

export default CocktailMenu;