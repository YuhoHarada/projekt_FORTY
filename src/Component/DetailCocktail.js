import React from 'react';

const DetailCocktail = (props) => {
    return ( 
        <div>
            <img src={props.strDrinkThumb} alt=""/>
            <h2>{props.strDrink}</h2>
        </div>
     );
}
 
export default DetailCocktail;