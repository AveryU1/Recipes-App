import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    if (user.email && user.password !== "") {
      try {
        await login(user.email, user.password); //login viene de authContext, comunicacion entre componentes, user es el estado
        navigate("/home"); //si se registra el usuario, nos redirige a Dashboard
      } catch (error) {
        console.log(error.code);
        if (error.code === "auth/internal-error") {
          setError("correo invalido");
        } else if (error.code === "auth/wrong-password") {
          setError("Contrasena incorrecta");
        }
      }
    } else setError("Por favor ingrese un correo y contrasena validos");
  };
  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    navigate("/home");
  };
  return (
    <div className="form-login__container">
      <div className="form-login">
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <h1>Login Account</h1>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              onChange={handleChange}
            />
          </div>
          <Link to="forgot-password">Forgot password?</Link>
          <div className="btn-login__container">
            <button>Login</button>
          </div>
          <div className="google-btn-container">
            <button className="google-button" onClick={handleGoogleLogin}>
              Login with Google
            </button>
            <div>
              <span>Don't have an account?</span>
              <Link to="/register"> Sign Up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
