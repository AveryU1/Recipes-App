import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import "./Register.scss";
export const Register = () => {
  const { signUp } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password); //singUp viene de authContext, comunicacion entre componentes, user es el estado
      navigate("/dashboard"); //si se registra el usuario, nos redirige a Dashboard
    } catch (error) {
      console.log(error);
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
      }
    }
  };
  return (
    <div className="form-register__container">
      {error && <p>{error}</p>}
      <div className="form-register__text">
        <h1>Create your account</h1>
        <p>Create an account to continue</p>
      </div>
      <form onSubmit={handleSubmit} className="form-register">
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
        <div className="register-btn__container">
          <p>By creating an account, you agree to Term of Services</p>
          <button>Register</button>
        </div>
      </form>
      <div className="register__footer">
        <span>Already have an account?</span> <Link to="/login">Sign in</Link>
      </div>
    </div>
  );
};
