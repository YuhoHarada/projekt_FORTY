import React from 'react';
import "./MenuItem.css"
import { Link } from "react-router-dom";
  
const MenuItem = (props) => {
    return ( 
        <div className="menuItem">
            <h2>{props.name}</h2>
            <Link className="menuItemLink" to={`/${props.url}`}></Link>
        </div>
     );
}
 
export default MenuItem;