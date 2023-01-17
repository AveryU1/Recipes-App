import React from "react";
import HeroBanner from "../components/Banner/HeroBanner";
import SearchRecipes from "./SearchRecipes";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <SearchRecipes />
    </div>
  );
};

export default Home;
