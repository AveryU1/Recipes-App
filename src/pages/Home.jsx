import React, { useState } from "react";

import HeroBanner from "../components/Banner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import SearchRecipes from "../components/SearchRecipes/SearchRecipes";
import { useAuth } from "../context/authContext";
import { useStateDataContext } from "../context/StateContext";
import Pagination from "../features/Pagination/Pagination";
import "./Home.scss";
const Home = () => {
  const { user, loading } = useAuth();

  console.log(user);
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="home-container">
      <Navbar />
      <HeroBanner />
      <SearchRecipes />
      <Pagination />
    </div>
  );
};

export default Home;
