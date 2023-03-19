import "./App.css";
import { Routes, Route } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import { AuthProvider } from "./context/authContext";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { ProtectedRoute } from "./features/ProtectedRoute";
import { ForgotPassowrd } from "./pages/ForgotPassword/ForgotPassowrd";
import { StateContext } from "./context/StateContext";
import { Welcome } from "./pages/Welcome/Welcome";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AuthProvider>
        <StateContext>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login/forgot-password" element={<ForgotPassowrd />} />
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
        </StateContext>
      </AuthProvider>
    </div>
  );
}

export default App;
