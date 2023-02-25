import React from "react";
import "./LoginButton.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Link>
      <button className="btn-login" onClick={() => loginWithRedirect()}>
        Login
      </button>
    </Link>
  );
};
