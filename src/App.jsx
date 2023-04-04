import "./App.scss";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./features/ProtectedRoute";
import { ForgotPassowrd } from "./pages/ForgotPassword/ForgotPassowrd";
import { StateContext } from "./context/StateContext";

const Welcome = lazy(() => import("./pages/Welcome/Welcome"));
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const RecipeDetails = lazy(() => import("./pages/RecipeDetails/RecipeDetails"));

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AuthProvider>
        <StateContext>
          <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/login/forgot-password"
                element={<ForgotPassowrd />}
              />
              <Route path="/login" element={<Login />} />

              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
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
          </Suspense>
        </StateContext>
      </AuthProvider>
    </div>
  );
}

export default App;
