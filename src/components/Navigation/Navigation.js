import React from "react";
import "./Navigation.scss";
const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="navigation-container">
        <p
          onClick={() => onRouteChange("signout")}
          className="navigation-child"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="navigation-container">
        <p onClick={() => onRouteChange("signin")} className="navigation-child">
          Sign In
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="navigation-child"
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
