import React from "react";
import style from './recipie.module.css';


const Recipie = ({title, calories, image, ingredients}) =>{
    return(
        <div>
            <h1 className={style.recipie}>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="url"/>
        </div>
    )
}

export default Recipie;