import { useState } from "react";

import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import { Home } from "./pages/Home/Home";
import { AuthProvider } from "./context/authContext";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./features/ProtectedRoute";
import { ForgotPassowrd } from "./pages/ForgotPassword/ForgotPassowrd";
import { StateContext } from "./context/StateContext";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AuthProvider>
        <StateContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login/forgot-password" element={<ForgotPassowrd />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            {/* <Route path="login" element={<LoginButton />} /> */}
            <Route
              path="/recipes/:id/information"
              element={
                <ProtectedRoute>
                  <RecipeDetails />
                </ProtectedRoute>
              }
            />
          </Routes>
        </StateContext>
      </AuthProvider>
    </div>
  );
}

export default App;
