import React, { Component } from 'react';
import CocktailItem from './CocktailItem';
import "./CocktailMenu.css"
import DetailCocktail from './DetailCocktail';
import './DetailPage.css'

class CocktailMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            data: [{strDrink: "first"}],
            urlKey: this.props.match.params.id,
            url: "",
            defaultData: [],
            value: this.props.value,
            detailData: [{strDrink: "first"}],
            detailIndex: 0,
            Setting: false
        };
      }
    componentWillMount() {
        if (this.state.urlKey === "Non_Alcoholic") {
            this.setState({ url: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic" });
        } else if (this.state.urlKey === "search") {
            this.setState({ url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sa` }); //${this.state.value}
        } else {
            this.setState({ url: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.urlKey}` });
        }
    }
    componentDidMount() {
        fetch(this.state.url)
            .then(response => response.json())
            .then(json => {
                this.setState({ data: json.drinks });
                this.setState({ defaultData: json.drinks });
            })
    }
    componentDidUpdate() {
        if (document.getElementById("close") != null && this.state.Setting == false) {
            document.getElementById("close").addEventListener("click", () => {
                document.getElementById("detail").style.height = "0"
                document.getElementById("detail").style.width = "0"
            })
            document.getElementById("left").addEventListener("click", () => {
                if (this.state.detailIndex - 1 >= 0) {
                    this.handleDetail(this.state.detailIndex-1)
                }
            })
            document.getElementById("right").addEventListener("click", () => {
                if (Number(this.state.detailIndex) + 1 < this.state.data.length) {
                    this.handleDetail(Number(this.state.detailIndex) + 1)
                }
            })
            
            this.setState({ Setting: true });
        }
    }
    NameFilter = (value) => {
        const NewData = this.state.defaultData.filter(elt => {
            let checkelt = false
            elt.strDrink.toUpperCase().search(value.toUpperCase()) >= 0 ? checkelt = true : checkelt = false
            return checkelt
        })
        this.setState({ data: NewData })
        this.setState({ value: value });
        document.documentElement.scrollTop = document.getElementById("inhalt").getBoundingClientRect().top + window.pageYOffset
    }
    handleDetail = (elt) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.state.data[elt].idDrink}`)
            .then(response => response.json())
            .then(json => {
                let newData = json.drinks
                this.setState({ detailData: newData });
            })
        document.getElementById("detail").style.height = "100vh"
        document.getElementById("detail").style.width = "100vw"
        document.getElementById("random").style.display = "none"
        if (elt === 0) {
            document.getElementById("left").style.color = "gray"
        } else {
            document.getElementById("left").style.color = "#fff"
        }
        if (elt === this.state.data.length - 1) {
            document.getElementById("right").style.color = "gray"
        } else {
            document.getElementById("right").style.color = "#fff"
        }
        this.setState({ detailIndex: elt });
    }
    render() {
        return (
            <div id="inhalt" className={`cocktailMenu ${this.state.urlKey}Menu`}>
                {this.state.data[0] != null ? this.state.data.map((elt, i) =>
                    <CocktailItem
                        key={i}
                        urlKey={this.state.urlKey}
                        id={i}
                        strDrinkThumb={elt.strDrinkThumb}
                        name={elt.strDrink}
                        handleDetail={() => this.handleDetail(i)}
                    />
                ): <div className="NotFound"><h1>"{this.state.value}" not found</h1></div>}
                <div className="detailPage" id="detail">
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
            </div>
        );
    }
}

export default CocktailMenu;