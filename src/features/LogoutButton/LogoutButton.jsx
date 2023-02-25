import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Link>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        LogoutButton
      </button>
    </Link>
  );
};