import { async } from "@firebase/util";
import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import "./ForgotPassword.scss";
export const ForgotPassowrd = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const handleChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const handleResetPassword = async e => {
    e.preventDefault();
    console.log("hello");
    if (!email) return setError("Please enter your email");
    try {
      await resetPassword(email);
      console.log("world");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <form>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={handleResetPassword}>Send</button>
        </div>
      </form>
    </div>
  );
};
