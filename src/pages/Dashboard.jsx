import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroBanner from "../components/Banner/HeroBanner";
import Navbar from "../components/Navbar/Navbar";
import SearchRecipes from "../components/SearchRecipes/SearchRecipes";
import { useAuth } from "../context/authContext";
import { useStateDataContext } from "../context/StateContext";

const Dashboard = () => {
  const { user, loading } = useAuth();
  const { recipes, setRecipes } = useStateDataContext();

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

export default Dashboard;
