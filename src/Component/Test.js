import React, { Component } from 'react';

class Test extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin`)
            .then(response => response.json())
            .then(json => {
                console.log(json.drinks)
                this.setState({ data: json.drinks });
            })
    }
    render() {
        return (
            <div className="test">
                {this.state.data.map((elt, i) => 
                    <div key={i}>
                        <img src={elt.strDrinkThumb} alt=""/>
                    </div>
                )}
            </div>
        );
    }
}

export default Test;