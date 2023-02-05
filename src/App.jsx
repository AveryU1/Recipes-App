import { useState } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id/information" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
