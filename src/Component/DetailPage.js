import React, { Component } from 'react';
import DetailCocktail from './DetailCocktail';
import './DetailPage.css'

class DetailPage extends Component {
    state = {
        data: [],
        detailData:[],
        urlKey: this.props.urlKey,
        url: "",
        id: this.props.match.params.id,
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
                this.setState({ data: json.drinks });
                fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${json.drinks[this.state.id].idDrink}`)
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        let newData = json.drinks
                        this.setState({ detailData: newData });
                    })
            })
    }
    componentDidUpdate() {
        if (document.getElementById("close") != null) {
            document.getElementById("close").addEventListener("click", () => {
                console.log("clicked")
                this.props.history.push(`/${this.props.urlKey}`)
            })
            document.getElementById("left").addEventListener("click", () => {
                if (this.state.id - 1 >= 0) {
                    this.props.history.push(`/${this.props.urlKey}/${this.state.id - 1}`)
                    window.location.reload(false);
                }
            })
            if (this.state.id == 0) {
                document.getElementById("left").style.color = "gray"
            }
            document.getElementById("right").addEventListener("click", () => {
                console.log("click")
                console.log(this.state.id)
                if (Number(this.state.id) + 1 < this.state.data.length) {
                    console.log(this.state.id)
                    this.props.history.push(`/${this.props.urlKey}/${Number(this.state.id) + 1}`)
                    window.location.reload(false);
                }
            })
            if (this.state.id == this.state.data.length-1) {
                document.getElementById("right").style.color = "gray"
            }
        }
    }
    render() {
        return (
            <div className="detailPage">
                {this.state.detailData.map((elt, i) => 
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
        );
    }
}

export default DetailPage;