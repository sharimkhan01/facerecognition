import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.scss";
import logo from "./icon.png";
const Logo = () => {
  return (
    <div className="logo-container">
      <Tilt>
        <div
          className="logo-child "
          style={{
            height: "100px",
            width: "120px",
            backgroundColor: "darkgreen",
          }}
        >
          <img className="logo-icon" alt="icon" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
