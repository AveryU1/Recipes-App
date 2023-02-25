import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Recipes from "../Recipes/Recipes";
import { fetchData, recipesOptions } from "../../utils/fetchData";
import PropTypes from "prop-types";
import "./SearchRecipes.scss";
const SearchRecipes = ({ recipes, setRecipes }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleInputSearch = async () => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}&number=20`;

    const recipesData = await fetchData(url, recipesOptions);

    setRecipes(recipesData.results);
    console.log(recipesData);
    setInputSearch("");
  };

  return (
    <div id="searchRecipes" className="app__searchRecipes-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value.toLocaleLowerCase())}
        />
        <BiSearch onClick={handleInputSearch} />
      </div>
      <Recipes recipes={recipes} id={recipes.id} />
    </div>
  );
};

SearchRecipes.propTypes = {
  recipes: PropTypes.array.isRequired,
  setRecipes: PropTypes.array.isRequired,
};

export default SearchRecipes;
