import React from 'react';
import {
    Link
} from "react-router-dom";
  
const MenuItem = (props) => {
    return ( 
        <div className="menuItem">
            <h2><Link to={`/${props.url}`}>{props.name}</Link></h2>
            <p>{props.text}</p>
        </div>
     );
}
 
export default MenuItem;