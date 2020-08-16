import React, { Component } from 'react';
import DetailCocktail from './DetailCocktail'

class RandomCocktail extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
            .then(response => response.json())
            .then(json => {
                console.log(json.drinks)
                this.setState({ data: json.drinks })
                console.log(this.props.history)
            })
    }
    componentDidUpdate() {
        if (document.getElementById("close") != null) {
            document.getElementById("close").addEventListener("click", () => {
                console.log("clicked")
                this.props.history.push(`/`)
            })
        }
    }
    handleChange = () => {
        window.location.reload(false);
    }
    render() { 
        return ( 
            <div className="randomCocktail">
                <div className="detailPage">
                    {this.state.data.map((elt, i) => 
                        <DetailCocktail
                            key={i}
                            strDrinkThumb={elt.strDrinkThumb}
                            strDrink={elt.strDrink}
                            strInstructions={elt.strInstructions}
                            strGlass={elt.strGlass}
                            strIngredient1={elt.strIngredient1}
                            strMeasure1={elt.strMeasure1}
                            strIngredient2={elt.strIngredient2}
                            strMeasure2={elt.strMeasure2}
                            strIngredient3={elt.strIngredient3}
                            strMeasure3={elt.strMeasure3}
                            strIngredient4={elt.strIngredient4}
                            strMeasure4={elt.strMeasure4}
                            strIngredient5={elt.strIngredient5}
                            strMeasure5={elt.strMeasure5}
                            strIngredient6={elt.strIngredient6}
                            strMeasure6={elt.strMeasure6}
                            strIngredient7={elt.strIngredient7}
                            strMeasure7={elt.strMeasure7}
                            strIngredient8={elt.strIngredient8}
                            strMeasure8={elt.strMeasure8}
                            strIngredient9={elt.strIngredient9}
                            strMeasure9={elt.strMeasure9}
                            strIngredient10={elt.strIngredient10}
                            strMeasure10={elt.strMeasure10}
                            strIngredient11={elt.strIngredient11}
                            strMeasure11={elt.strMeasure11}
                            strIngredient12={elt.strIngredient12}
                            strMeasure12={elt.strMeasure12}
                            strIngredient13={elt.strIngredient13}
                            strMeasure13={elt.strMeasure13}
                            strIngredient14={elt.strIngredient14}
                            strMeasure14={elt.strMeasure14}
                            strIngredient15={elt.strIngredient15}
                            strMeasure15={elt.strMeasure15}
                        />
                    )}
                </div>
                <button onClick={this.handleChange}>Change</button>
            </div>
         );
    }
}
 
export default RandomCocktail;