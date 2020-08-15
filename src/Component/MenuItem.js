import React from 'react';
import "./MenuItem.css"
import {
    Link
} from "react-router-dom";
  
const MenuItem = (props) => {
    return ( 
        <div className="menuItem">
            <h2><Link className="menuItemLink" to={`/${props.url}`}>{props.name}</Link></h2>
            {/* <p>{props.text}</p> */}
        </div>
     );
}
 
export default MenuItem;