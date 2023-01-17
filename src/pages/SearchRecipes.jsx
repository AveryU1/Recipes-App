import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Recipes from "../components/Recipes/Recipes";
import { fetchData, recipesOptions } from "../utils/fetchData";
import "./SearchRecipes.scss";
const SearchRecipes = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleInputSearch = async () => {
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${inputSearch}`;

    const recipesData = await fetchData(url, recipesOptions);

    setRecipes(recipesData);
    setInputSearch("");
    console.log(recipes);
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
      {recipes?.map(({ title, id }) => (
        <Recipes key={id} recipes={title} />
      ))}
    </div>
  );
};

export default SearchRecipes;
