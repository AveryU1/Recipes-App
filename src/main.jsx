import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN;
const clientID = import.meta.env.VITE_APP_AUTH_CLIENT_ID;

root.render(
  <BrowserRouter>
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user update:current_user_metadata",
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
