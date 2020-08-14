import React from 'react';
import {
    Link
  } from "react-router-dom";

const CocktailItem = (props) => {
    return ( 
        <div className="cocktailItem">
            <Link to={`/${props.urlKey}/${props.id}`}><img src={props.strDrinkThumb} alt=""/></Link>
        </div>
     );
}
 
export default CocktailItem;