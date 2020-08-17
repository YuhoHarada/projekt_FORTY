import React from 'react';
import "./CocktailItem.css"

const CocktailItem = (props) => {
    return ( 
        <div className="cocktailItem" onClick={() => props.handleDetail(props.id)}>
            <img src={props.strDrinkThumb} alt="" />
            <h2 className="linkCocktailItem">{props.name}</h2>
        </div>
    );
}

export default CocktailItem;