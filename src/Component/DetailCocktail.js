import React from 'react';

const DetailCocktail = (props) => {
    return ( 
        <div className="detailCocktail" id="borderPopup">
            <article id="boxContent">
                <article>
                    <img id="imgPopup" src={props.strDrinkThumb} alt="" />
                    <h4 id="arrows"> <span id="left">&lt;</span><img id="random" class="imgSmall" src="/random.svg" alt="" /><span id="right">&gt;</span></h4>
                </article>
                <article>
                    <div className="overflowTxt">
                        <h1 id="titlePopup">{props.strDrink}</h1>
                        <p><span>Ingredients: </span></p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{props.strIngredient1}</td>
                                    <td>{props.strMeasure1}</td>
                                </tr>
                                {props.strIngredient2!= null ? <tr>
                                    <td>{props.strIngredient2}</td>
                                    <td>{props.strMeasure2}</td>
                                </tr> : null}
                                {props.strIngredient3!= null ? <tr>
                                    <td>{props.strIngredient3}</td>
                                    <td>{props.strMeasure3}</td>
                                </tr> : null}
                                {props.strIngredient4!= null ? <tr>
                                    <td>{props.strIngredient4}</td>
                                    <td>{props.strMeasure4}</td>
                                </tr> : null}
                                {props.strIngredient5!= null ? <tr>
                                    <td>{props.strIngredient5}</td>
                                    <td>{props.strMeasure5}</td>
                                </tr> : null}
                                {props.strIngredient6!= null ? <tr>
                                    <td>{props.strIngredient6}</td>
                                    <td>{props.strMeasure6}</td>
                                </tr> : null}
                                {props.strIngredient7!= null ? <tr>
                                    <td>{props.strIngredient7}</td>
                                    <td>{props.strMeasure7}</td>
                                </tr> : null}
                                {props.strIngredient8!= null ? <tr>
                                    <td>{props.strIngredient8}</td>
                                    <td>{props.strMeasure8}</td>
                                </tr> : null}
                                {props.strIngredient9!= null ? <tr>
                                    <td>{props.strIngredient9}</td>
                                    <td>{props.strMeasure9}</td>
                                </tr> : null}
                                {props.strIngredient10!= null ? <tr>
                                    <td>{props.strIngredient10}</td>
                                    <td>{props.strMeasure10}</td>
                                </tr> : null}
                                {props.strIngredient11!= null ? <tr>
                                    <td>{props.strIngredient11}</td>
                                    <td>{props.strMeasure11}</td>
                                </tr> : null}
                                {props.strIngredient12!= null ? <tr>
                                    <td>{props.strIngredient12}</td>
                                    <td>{props.strMeasure12}</td>
                                </tr> : null}
                                {props.strIngredient13!= null ? <tr>
                                    <td>{props.strIngredient13}</td>
                                    <td>{props.strMeasure13}</td>
                                </tr> : null}
                                {props.strIngredient14!= null ? <tr>
                                    <td>{props.strIngredient14}</td>
                                    <td>{props.strMeasure14}</td>
                                </tr> : null}
                                {props.strIngredient15!= null ? <tr>
                                    <td>{props.strIngredient15}</td>
                                    <td>{props.strMeasure15}</td>
                                </tr> : null}
                            </tbody>
                        </table>
                        <p>
                            <span>Preparation: </span>{props.strInstructions}
                        </p>
                        <p><span>Glass: </span>{props.strGlass}</p>
                    </div>
                </article>
            </article>
            <img id="close" src="/x-mark-thin.svg" alt="x"></img>
        </div>
     );
}
 
export default DetailCocktail;