import React, { useState } from "react";
import HeroBanner from "../components/Banner/HeroBanner";
import SearchRecipes from "../components/SearchRecipes/SearchRecipes";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <div>
      <HeroBanner />
      <SearchRecipes recipes={recipes} setRecipes={setRecipes} />
    </div>
  );
};

export default Home;
