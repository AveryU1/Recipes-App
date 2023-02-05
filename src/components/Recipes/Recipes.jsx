import React from "react";
import { Link } from "react-router-dom";
import "./Recipes.scss";
const Recipes = ({ recipes }) => {
  return (
    <div className="app__recipes-container">
      {recipes.map(recipe => (
        <Link
          key={recipe.id}
          className="app__recipes-card"
          to={`/recipes/${recipe.id}/information`}
        >
          <h5>{recipe.title}</h5>

          <img src={recipe.image} alt="recipe-image" loading="lazy" />
        </Link>
      ))}
    </div>
  );
};

export default Recipes;
