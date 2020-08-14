import React, { Component } from 'react';
import DetailCocktail from './DetailCocktail';

class DetailPage extends Component {
    state = {
        data: [],
        urlKey: this.props.urlKey,
        url: "",
        id: this.props.match.params.id
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
                let newData = json.drinks.splice(this.state.id, 1)
                this.setState({ data: newData });
            })
    }
    render() {
        return (
            <div className="detailPage">
                {this.state.data.map((elt, i) => 
                    <DetailCocktail
                        key={i}
                        strDrinkThumb={elt.strDrinkThumb}
                        strDrink={elt.strDrink}
                    />
                )}
            </div>
        );
    }
}

export default DetailPage;