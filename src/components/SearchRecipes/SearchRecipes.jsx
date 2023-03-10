import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import Recipes from "../Recipes/Recipes";
import { fetchData, recipesOptions } from "../../utils/fetchData";
import PropTypes from "prop-types";
import "./SearchRecipes.scss";
import { useStateDataContext } from "../../context/StateContext";
const SearchRecipes = () => {
  const { inputSearch, setInputSearch, handleInputSearch } =
    useStateDataContext();

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
      <Recipes />
    </div>
  );
};

export default SearchRecipes;
