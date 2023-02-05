import React from "react";
import { AiFillPushpin } from "react-icons/ai";
import "./Ingredientes.scss";
const Ingredients = ({ extendedIngredients }) => {
  return (
    <div className="ingredients-container">
      <h3>Ingredients</h3>
      {extendedIngredients?.map((item, index) => (
        <ul key={index}>
          <div className="ingredientsList">
            <div>
              <AiFillPushpin />
            </div>

            <li>{item.nameClean}</li>
          </div>

          <hr />
        </ul>
      ))}
    </div>
  );
};

export default Ingredients;
