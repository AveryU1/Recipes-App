import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import { Home } from "./pages/Home/Home";
import { LoginButton } from "./features/LoginButton/LoginButton";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />]
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="login" element={<LoginButton />} />
        <Route path="/recipes/:id/information" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
