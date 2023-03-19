import React, { useState } from "react";

import HeroBanner from "../components/Banner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import SearchRecipes from "../components/SearchRecipes/SearchRecipes";
import { useAuth } from "../context/authContext";
import { useStateDataContext } from "../context/StateContext";

const Home = () => {
  const { user, loading } = useAuth();

  console.log(user);
  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      <Navbar />
      <HeroBanner />
      <SearchRecipes />
    </div>
  );
};

export default Home;
